import { Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import Home from "../../paginas/Home/Home";
import Sobre from "../../paginas/Sobre/Sobre";
import Plataforma from "../../paginas/Plataforma/Plataforma";
import Matricula from "../../paginas/Matricula/Matricula";
import Page404 from "../../paginas/404/404";
import Faq from "../../paginas/FAQ/Faq";
import Precos from "../../paginas/precos/Precos";
import Inscricao from "../../paginas/Inscricao/Inscricao";

export function Router() {
    return(
        <HashRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path = "/sobre" element={<Sobre/>}></Route>
                <Route path = "/plataforma" element={<Plataforma/>}></Route>
                <Route path = "/matricula" element={<Matricula/>}></Route>
                <Route path = "*" element={<Page404/>}></Route>
                <Route path = "/faq" element={<Faq/>}></Route>
                <Route path = "/matricula/inscricao" element={<Inscricao/>}></Route>
                <Route path = "/matricula/precos" element={<Precos/>}></Route>
            </Routes>
        </HashRouter>
    )
}


// Para re-leitura: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing