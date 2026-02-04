import React, { useRef } from 'react';
import png7 from '../../images/PNG 7.png';
import png8 from '../../images/PNG 8.png';

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
    <div className='header-container-main-5'>
      <img 
          src={png7} 
          ref={imagenRef2}
          style={{maxWidth:'65%', marginTop:'100px'}}
          className='imagen-top cuarto' 
          alt="Decoración Arriba"
        />
        
        <div className='containerbtn__Datos'>
          <a className='btn-outline-NEW' type='button' 
              href='https://drive.google.com/file/d/1XzAgJkGc1goCedaPQF8WNj3QQYns5PBw/view?usp=sharing'>DATOS AQUÍ</a>
        </div>

        <img 
          src={png8} 
          ref={imagenRef3}
          style={{maxWidth:'67%', marginBottom:'250px'}}
          className='imagen-bottom cuarto' 
          alt="Decoración Abajo"
        />

        <div className='containerbtn__Confirmacion'>
          <a className='btn-outline-NEW' type='button' href='https://wa.link/uw51qf'>AQUÍ</a>
        </div>

    </div>
  );
}

export default Cuarto;