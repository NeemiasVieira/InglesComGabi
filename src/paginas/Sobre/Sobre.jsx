import React from "react";
import { Nav } from "../../componentes/nav/Nav";
import { BackGroundPink } from "../Home/HomeStyle";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoSobre } from "./SobreStyle";

const Sobre = () => {
    return(
        <BackGroundPink>
            <Nav/>
            <SecaoSobre>            
                <p>Oi, essa é a página sobre</p>
            </SecaoSobre>
        <Footer/>
        </BackGroundPink>
        
    )
}

export default Sobre;