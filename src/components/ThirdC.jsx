import React from 'react';

//componentes
import CarouselFuntion from "./CarouselFuntion";
//Estilos
import './Style.css';

const ThirdC = () => {
  return (
    <div className='Third-Container'>
      <div className='containerbtn-map'>
          <a className='btn-outline-map' type='button' href='https://maps.app.goo.gl/zzSDkv11gX2h7oY18' >VER UBICACIÓN </a>
      </div>
      <CarouselFuntion />
      <div className='containerbtn-song'>
          <a className='btn-outline-song' type='button'href='https://open.spotify.com/playlist/7ef6EvIZjeUgJ32pYvdKro?si=swbmxyG0RmCRnVH1ynCDGA&pi=8Vuk2wVsROOlI&pt=0a29be0e04e88e28914892604c87f3d5' >SUGERIR CANCIÓN </a> 
      </div>

    </div>
  )
}

export default ThirdC;