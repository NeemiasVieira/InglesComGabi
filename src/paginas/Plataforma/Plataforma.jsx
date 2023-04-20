import React from "react";
import { Nav } from "../../componentes/nav/Nav";
import { BackGroundPink } from "../Home/HomeStyle";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoPlataforma } from "./PlataformaStyle";

const Plataforma = () => {
    return(
        <BackGroundPink>
            <Nav/>
            <SecaoPlataforma>
                <p>Oi essa é a página Plataforma</p>
            </SecaoPlataforma>
            <Footer/>
        </BackGroundPink>
    )
}

export default Plataforma;