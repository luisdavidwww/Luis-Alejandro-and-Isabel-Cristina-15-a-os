import React, { useRef } from 'react';
import png1 from '../../images/PNG 1.png';
import '../Style.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// 1. Importamos el plugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 2. Registramos el plugin (obligatorio)
gsap.registerPlugin(ScrollTrigger);

const Primero = () => {
  const imagenRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imagenRef.current, 
      { 
        y: 100, // Empieza 100px abajo
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        // 3. Añadimos la magia del Scroll
        scrollTrigger: {
          trigger: imagenRef.current, // El elemento que dispara la animación
          start: "top 80%", // Cuando el tope de la imagen llega al 80% de la pantalla
          toggleActions: "restart none restart reset"  // Solo se reproduce al entrar
          // Si quieres que se repita CADA VEZ que subes y bajas:
          // toggleActions: "restart none none none" 
        }
      }
    );
  }, []);

  return (
    <div className='header-container-main'>
      <img 
        src={png1} 
        alt='Imagen central' 
        className='imagen-centrada'
        ref={imagenRef} 
      />
    </div>
  );
}

export default Primero;