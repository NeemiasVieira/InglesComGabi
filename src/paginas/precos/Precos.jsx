import React from "react";
import { BackGroundPink } from "../Home/HomeStyle";
import { Nav } from "../../componentes/nav/Nav";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoPrecos } from "./PrecosStyle";
import { TabelaPrecos } from "../../componentes/tabelaprecos/Tabelaprecos";

const Precos = () => {
    return(
        
        <BackGroundPink>
            <Nav/>
            <SecaoPrecos>
                <h1>Tabela de Valores</h1>
                <h2>(Atualizado 2023)</h2>
                <TabelaPrecos/>
                <a href="/#/matricula">Voltar para matricula</a>
            </SecaoPrecos>
            <Footer/>
        </BackGroundPink>
            
    )
}

export default Precos;