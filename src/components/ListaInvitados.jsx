
import React, { useState, useEffect } from 'react';

// Hooks
import { useForm } from '../hook/useForm';
//Listado de Invitados
import { listInvitados } from '../Data/ListaInvitados';
//Componentes
import Loader from "./Loader/Loader";
//Estilos
import './FormCodInvitado.css'

const ListaInvitados = () => {

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


  useEffect(() => {
    getHome();
  }, []);


  return (
    <>
      {
        loanding ? (<Loader />):(
        <div style={{display:'flex', width:'100%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <label htmlFor="" className='title-intro' style={{marginTop:'5rem', marginBottom:'2rem'}} >Listado de Invitados</label>
                {listInvitados?.map((item, index) => (
                    <ul key={`${index}`} style={{marginTop:'2rem'}}> 
                                <p className='title-input'>Nombre: {item.nombres}</p> <br />
                                <p className='title-input'>Nro deInvitados: {item.numInvitados}</p> <br />
                                <p className='title-input'>Codigo: {item.codigoVerificacion}</p> <br />
                                <br /><br />
                    </ul>
                ))}
          </div>  
        )
      }
       
        
    </>
  )
}

export default ListaInvitados;

