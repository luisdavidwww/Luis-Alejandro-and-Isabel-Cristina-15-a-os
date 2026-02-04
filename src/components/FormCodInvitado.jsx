import React, { useState, useEffect } from 'react';

// Hooks
import { useForm } from '../hook/useForm';
//Listado de Invitados
import { listInvitados } from '../Data/ListaInvitados';
//Componentes
import Loader from "./Loader/Loader";
import  InvitadoValidoModal  from "../components/InvitadoValidoModal";
//Estilos
import './FormCodInvitado.css'

const FormCodInvitado = ({InvitadoValidate, SetInvitado, Invitadof, isInvitadoValidoF}) => {

    const [loanding, setLoanding] = useState(false);

    //Peticion principal 
    const getHome = async () => {
          try {
            //Se inicializa el componente "Cargando"
            setLoanding(true);

            // Verificar conexión a Internet
            if (!navigator.onLine) {
              throw new Error('No hay conexión a Internet');
            }

            // Simular una pequeña demora antes de desactivar el loader (500ms en este ejemplo)
            setTimeout(() => {
              //Desactiva el componente "Cargando" y no se carga ningún error 
              setLoanding(false);
            }, 1500); // 500ms de retraso

          } catch (error) {
            setLoanding(false);
          }
    };


    //Estado Inicial del Formulario
    const {codigo, onChange} = useForm({
        codigo:''
    })


    const normalizeString = (str) => {
      return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quita acentos
        .replace(/\s+/g, "");            // quita espacios
    };


    const Invitadosvalidate = (e) => {
      const codigoNormalizado = normalizeString(codigo);

      const invitadoEncontrado = listInvitados.find((invitado) => {
        const codigoInvitado = normalizeString(invitado.codigoVerificacion);
        return codigoInvitado === codigoNormalizado;
      });

      if (invitadoEncontrado) {
        SetInvitado(invitadoEncontrado);     // Guarda la información completa
        InvitadoValidate(true);              // Marca como válido
      } else {
        SetInvitado(null);                   // Limpia si no es válido
        InvitadoValidate(false);             // Marca como inválido
      }
    };

  useEffect(() => {
    getHome();
  }, []);


  return (
    <>
      {
        loanding ? (<Loader />):(
          <>
          {isInvitadoValidoF ? (<InvitadoValidoModal Invitado={Invitadof}/>):null}
          
          <div className='header-container'>
            <form onSubmit={Invitadosvalidate} className='formInvidatos'>
                <label htmlFor="" className='title-intro' >¡Nos encantaria que seas parte de este día tan especial!</label>
                <span className='title-input' >INGRESA TU CÓDIGO PARA CONTINUAR:</span>
                <input 
                    type="text" 
                    id="codigo"
                    placeholder="Código de invitación"
                    className='inputCodigo'
                    value={codigo}
                    onChange={(e) => onChange(e.target.value, 'codigo')}
                />
                <div className='containerbtn'>
                    <button className='btn-outline-one' type='button' onClick={Invitadosvalidate}>VER INVITACIÓN</button>
                </div>
              </form>
            </div>  
          </>
        )
      }  
    </>
  )
}

export default FormCodInvitado;