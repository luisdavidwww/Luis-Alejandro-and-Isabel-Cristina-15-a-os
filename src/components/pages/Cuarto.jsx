import React, { useRef } from 'react';
import png5 from '../../images/PNG 5.png';
import png6 from '../../images/PNG 6.png';

import '../Style.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// 1. Importamos el plugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 2. Registramos el plugin (obligatorio)
gsap.registerPlugin(ScrollTrigger);

const Cuarto = () => {
  const imagenRef2 = useRef(null);
  const imagenRef3 = useRef(null);
  const imagenRef4 = useRef(null);

 useGSAP(() => {
    gsap.fromTo(imagenRef2.current, 
      { 
        y: 100, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imagenRef2.current,
          start: "top 80%", 
          toggleActions: "restart none restart reset", 
        }
      }
    );
    gsap.fromTo(imagenRef3.current, 
      { 
        scale: 0,    
        opacity: 0     
      }, 
      { 
        scale: 1,      
        opacity: 1,    
        duration: 0.8, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: imagenRef3.current,
          start: "top 85%", 
          toggleActions: "restart none restart reset",
        }
      }
    );
    gsap.fromTo(imagenRef4.current, 
      { 
        y: 100, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imagenRef4.current,
          start: "top 80%", 
          toggleActions: "restart none restart reset", 
        }
      }
    );
  }, []);

  return (
    <div className='header-container-main-4'>
      <img 
          src={png5} 
          ref={imagenRef2}
          style={{maxWidth:'67%', marginTop:'60px'}}
          className='imagen-top cuarto' 
          alt="Decoración Arriba"
        />
        
        <div className='containerbtn__ConteoRegrisivo'>
          <a className='btn-outline-NEW' type='button' href='https://maps.app.goo.gl/wGhoDqmPdVUpSeto8'>VER UBICACIÓN AQUÍ</a>
        </div>

        <img 
          src={png6} 
          ref={imagenRef3}
          style={{maxWidth:'67%'}}
          className='imagen-bottom cuarto' 
          alt="Decoración Abajo"
        />

    </div>
  );
}

export default Cuarto;