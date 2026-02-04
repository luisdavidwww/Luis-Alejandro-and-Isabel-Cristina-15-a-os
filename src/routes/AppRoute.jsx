import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas
import Home from "../pages/Home";
import Invitacion from "../pages/Invitacion";
import ListaInvitados from "../components/ListaInvitados";

const AppRoutes = () => {
  return (
    <Router>
            <div style={{ display: 'block' }}>
                <Routes>
                   {/* <Route path="/aaa" element={<Home />} />*/}
                    <Route path="/" element={<Invitacion />} />
                   {/* <Route path="/ListaInvitados" element={<ListaInvitados />} />*/}
                </Routes>
            </div>
        </Router>
  )
}

export default AppRoutes;