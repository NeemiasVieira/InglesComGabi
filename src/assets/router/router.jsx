import { Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import Home from "../../paginas/Home/Home";
import Sobre from "../../paginas/Sobre/Sobre";
import Plataforma from "../../paginas/Plataforma/Plataforma";
import Contato from "../../paginas/Contato/Contato";

export function Router() {
    return(
        <HashRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path = "/sobre" element={<Sobre/>}></Route>
                <Route path = "/plataforma" element={<Plataforma/>}></Route>
                <Route path = "/contato" element={<Contato/>}></Route>
            </Routes>
        </HashRouter>
    )
}


