import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//componentes
import Primero from "../components/pages/Primero";
import CuentaRegresiva from "../components/CuentaRegresiva";
import ThirdC from "../components/ThirdC";
import Forth from "../components/Forth";
import Quina from "../components/Quina";
import Loader from "../components/Loader/Loader";

import '../components/Style.css'


const Invitacion = ({}) => {

    const [loanding, setLoanding] = useState(false);


      const audioRef = useRef(null);
      const [showModal, setShowModal] = useState(true); // Mostrar modal al inicio
    
      const handleStart = () => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => console.log("Click manual requerido"));
        }
        setShowModal(false); // Oculta la ventana
      };


  
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
          <>
            {/* Modal de bienvenida */}
            <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0,0,0,0.85)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  letterSpacing:'1.5px',
                  zIndex: 9999,
                  color: "#fff",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "0px"
                }}
              >
                <h1 style={{ marginBottom: "20px", fontSize: "2.52rem", fontFamily: 'Butler_Medium', }}>¡Bienvenido!</h1>
                <a
                  href='/invitacion'
                  className='btn-outline-NEW'
                >
                  VER INVITACIÓN
                </a>
            </div>
          </>
          )
        }
        </>
      
    );
  };
export default Invitacion;