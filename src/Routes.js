import React from "react";
import { Routes, Route } from 'react-router-dom';

//importação das telas
import Home from './telas/Home';
import Formação from './telas/Formação';

const Rotas = () => {

    return(
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/formacao" element={<Formação />} />
        </Routes>
    );

}

export default Rotas;