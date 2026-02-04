import React, { useRef } from 'react';
import png2 from '../../images/PNG 2.png';
import png3 from '../../images/PNG 3.png';
import png4 from '../../images/PNG 4.png';
import '../Style.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// 1. Importamos el plugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 2. Registramos el plugin (obligatorio)
gsap.registerPlugin(ScrollTrigger);

const Segundo = () => {
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
    <div className='header-container-main-2'>
      <img 
          src={png2} 
          ref={imagenRef2}
          style={{maxWidth:'60%', marginTop:'45px'}}
          className='imagen-top' 
          alt="Decoración Arriba"
        />
        
        <img 
          src={png3} 
          ref={imagenRef3}
          className='imagen-center' 
          alt="Decoración Abajo"
        />

        <img 
          src={png4} 
          ref={imagenRef4}
          className='imagen-bottom' 
          alt="Decoración Abajo"
        />
    </div>
  );
}

export default Segundo;