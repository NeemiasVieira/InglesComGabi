import React from "react";
import { BackGroundPink } from "../Home/HomeStyle";
import { Nav } from "../../componentes/nav/Nav";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoContato } from "./MatriculaStyle";


const Matricula = () => {
    return(
        <BackGroundPink>
            <Nav/>
            <SecaoContato>
                <h1>Matricule-se</h1>
                <h2>Não existe momento certo para começar seus estudos em outro idioma, aproveite nossos valores exclusivos.</h2>
                <div className="BotoesPrincipais">
                    <a href="./#/matricula/precos">Visualizar Valores</a>
                    <a href="./#/matricula/inscricao">Realizar Matricula</a>
                </div>

                
            </SecaoContato>
            <Footer/>
        </BackGroundPink>
    )
}

export default Matricula;