import React, { useRef, useEffect, useState } from 'react';
import moment from 'moment';

import '../Style.css';
import '../CuentaRegresiva.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// 1. Importamos el plugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 2. Registramos el plugin (obligatorio)
gsap.registerPlugin(ScrollTrigger);

const Tercero = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current, 
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
          trigger: contentRef.current, // El elemento que dispara la animación
          start: "top 80%", // Cuando el tope de la imagen llega al 80% de la pantalla
          toggleActions: "restart none restart reset",  // Solo se reproduce al entrar
          // Si quieres que se repita CADA VEZ que subes y bajas:
          // toggleActions: "restart none none none" 
        }
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(titleRef.current, 
      { 
        scale: 0,      // Empieza siendo un punto invisible
        opacity: 0     // Totalmente transparente
      }, 
      { 
        scale: 1,      // Llega a su tamaño real (100%)
        opacity: 1,    // Totalmente visible
        duration: 1.2, // Un poco más rápido para que se sienta dinámico
        ease: 'back.out(1.7)', // Un efecto de "rebote" al final (opcional pero queda pro)
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%", 
          toggleActions: "restart none restart reset",
        }
      }
    );
  }, []);


      // Establecer la fecha objetivo al 1ro de marzo del año actual a las 8:00 PM
      const targetDate = moment(`${moment().year()}-03-14 19:20:00`, 'YYYY-MM-DD HH:mm:ss');
  
      const calculateTimeLeft = () => {
        const now = moment();
        const difference = moment.duration(targetDate.diff(now));
        let timeLeft = {};
    
        if (difference.asMilliseconds() > 0) {
          timeLeft = {
            days: Math.floor(difference.asDays()),
            hours: difference.hours(),
            minutes: difference.minutes(),
            seconds: difference.seconds(),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [targetDate]);
  

  return (
    <div className='header-container-main-3'>
      <div className='containerInfo-Contador'>
        <h1 className='title-Conutdown' ref={titleRef}> Contemos juntos <br /> para el día de la celebración </h1>
            <div className='flex-container-main-Conutdown' ref={contentRef}>
            {Object.keys(timeLeft).length > 0 ? (
              <>
                <div className='time-block'>
                  <span className='time-value'>{timeLeft.days}
                  </span>
                  <span className='time-label dia' >DÍAS</span>
                </div>
                <div className='time-block-top'>
                  <span className='time-label-point'>:</span>
                </div>
                
                <div className='time-block'>
                  <span className='time-value'>{timeLeft.hours}
                  </span>
                  <span className='time-label'>HORAS</span>
                </div>
                <div className='time-block-top'>
                  <span className='time-label-point'>:</span>
                </div>

                <div className='time-block'>
                  <span className='time-value'>{timeLeft.minutes}
                  </span>
                  <span className='time-label'>MINUTOS</span>
                </div>
                <div className='time-block-top'>
                  <span className='time-label-point'>:</span>
                </div>

                <div className='time-block'>
                  <span className='time-value'>{timeLeft.seconds}</span>
                  <span className='time-label'>SEGUNDOS</span>
                </div>
              </>
            ) : (
              <span>¡El tiempo se ha agotado!</span>
            )}
            </div>
      </div>
    </div>
  );
}

export default Tercero;