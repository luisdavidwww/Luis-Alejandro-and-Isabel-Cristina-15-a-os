import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvitadoValidoModal.css';

const InvitadoValidoModal = ({ Invitado, onClose }) => {
  const navigate = useNavigate();

  const abrirInvitacion = () => {
    console.log('Invitado:', Invitado);
    navigate('/invitacion', { state: { invitado: Invitado } });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Botón de cerrar */}
        <button className="close-button" onClick={abrirInvitacion}>
          &times;
        </button>

        <h2 className="title-InvitadoW">{Invitado.nombres}</h2>
        <p className="text-InvitadoW">¡ESPERAMOS QUE PUEDAN COMPARTIR ESTA FIESTA JUNTO A NOSOTROS!</p>
        <p className="text-InvitadoW" style={{ marginTop: '1.5rem' }}>Número de invitados:</p>
        <p className="title-numInvitadoW">{Invitado.numInvitados}</p>
        <div style={{ display:'flex', justifyContent:'center'}}>
          <button className='btn-outline-two' type='button' onClick={abrirInvitacion} >ABRIR INVITACIÓN</button>
        </div>
      </div>
    </div>
  );
};

export default InvitadoValidoModal;

