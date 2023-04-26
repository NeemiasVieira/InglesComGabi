import React from "react";
import { BackGroundPink } from "../Home/HomeStyle";
import { Nav } from "../../componentes/nav/Nav";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoInscricao } from "./InscricaoStyle";
import { FormMatricula } from "../../componentes/formMatricula/FormMatricula";

const Inscricao = () => {
    return(
        <BackGroundPink>
            <Nav/>
            <SecaoInscricao>
                <h1>Inscrição</h1>
                <FormMatricula/>
                <a href="/#/matricula">Voltar para matrícula</a>
            </SecaoInscricao>
            <Footer/>
        </BackGroundPink>
    )
}

export default Inscricao;