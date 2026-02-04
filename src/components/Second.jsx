import React, { useState, useEffect } from 'react';
import moment from 'moment';

//Estilos
import './CuentaRegresiva.css';
import './Style.css';

const Second = () => {

  return (
    <div className='Second-Container'>
       <div className='containerbtn-ulti'>
          <a className='btn-outline-ulti' type='button' href='https://drive.google.com/file/d/1seJJ9R4321Z6rwb6mPhEcH66de-IyoFk/view?usp=sharing'> DATOS AQUI </a>
      </div>

      <div className='contenedor__ig'>
        <p className='contenedor__ig_p'>Diseñado por <a href="https://www.instagram.com/louisdetalles/" style={{textDecoration:'none', color:'white', fontWeight:'700'}}>@louisdetalles </a></p>
      </div>
    </div>
  )
}

export default Second;