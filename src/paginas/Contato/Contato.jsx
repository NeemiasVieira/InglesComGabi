import React from "react";
import { BackGroundPink } from "../Home/HomeStyle";
import { Nav } from "../../componentes/nav/Nav";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoContato } from "./ContatoStyle";

const Contato = () => {
    return(
        <BackGroundPink>
            <Nav/>
            <SecaoContato>
                <p>Oi essa é a página contato</p>
            </SecaoContato>
            <Footer/>
        </BackGroundPink>
    )
}

export default Contato;