import React, { useState, useEffect } from 'react';
import moment from 'moment';

//Estilos diseño 
import './Style.css';
import './CuentaRegresiva.css';

const CuentaRegresiva = () => {


    // Establecer la fecha objetivo al 1ro de marzo del año actual a las 8:00 PM
    const targetDate = moment(`${moment().year()}-11-08 20:00:00`, 'YYYY-MM-DD HH:mm:ss');

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
    <>
        <div className='CuentaRegresiva-container'>

          <div className='containerInfo-Contador'>
            <div className='flex-container-main-Conutdown'>
            {Object.keys(timeLeft).length > 0 ? (
              <>
                <div className='time-block'>
                  <span className='time-value'>{timeLeft.days}
                    <span className='time-label-point'>:</span>
                  </span>
                  <span className='time-label dia' >DÍAS</span>
                </div>
                <div className='time-block'>
                  <span className='time-value'>{timeLeft.hours}
                    <span className='time-label-point'>:</span>
                  </span>
                  <span className='time-label'>HORAS</span>
                </div>
                <div className='time-block'>
                  <span className='time-value'>{timeLeft.minutes}
                    <span className='time-label-point'>:</span>
                  </span>
                  <span className='time-label'>MINUTOS</span>
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

        <div className='containerbtn__ConteoRegrisivo'>
          <a className='btn-outline-NEW' type='button' href='https://maps.app.goo.gl/L2EkCiZ1CKHypdTMA'>VER UBICACIÓN AQUÍ</a>
        </div>

        </div>  
    </>
  )
}

export default CuentaRegresiva;