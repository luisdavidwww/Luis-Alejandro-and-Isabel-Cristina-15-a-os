import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvitadoValido = ({ Invitado }) => {

    const navigate = useNavigate();

    const abrirInvitacion = () => {
        console.log('Invitado:', Invitado); // Verifica aquí
        navigate('/invitacion', { state: { invitado: Invitado } });
      };
      

  return (
    <div className='header-container-two'>
        
            <h2 className='title-Invitado'>{Invitado.nombres}</h2>
            <p className='text-Invitado'>¡ESPERAMOS QUE PUEDAN COMPARTIR ESTA FIESTA JUNTO A NOSOTROS!</p>

            <p className='text-Invitado' style={{marginTop:'1.5rem'}}>Número de invitados: 
            </p>
            <p className='title-numInvitado'> {Invitado.numInvitados}
            </p>

            <div className='containerbtn-two'>
                <button className='btn-outline-two' type='button' onClick={abrirInvitacion} >ABRIR INVITACIÓN</button>
            </div>

      
    </div>
  );
};

export default InvitadoValido;