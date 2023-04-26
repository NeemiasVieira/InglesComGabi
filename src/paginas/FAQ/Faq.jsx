import React from "react";
import { Nav } from "../../componentes/nav/Nav";
import { Footer } from "../../componentes/Footer/Footer";
import { BackGroundPink } from "../Home/HomeStyle";
import { SecaoFAQ } from "./FaqStyle";
import { PerguntaFAQ } from "../../componentes/PerguntaFAQ/PerguntaFAQ";

const Faq = () => {
    return(
        <>
            <BackGroundPink>
                <Nav/>
                <SecaoFAQ>
                    <h1>FAQ - Perguntas Frequentes</h1>
                    <PerguntaFAQ 
                    pergunta="Como serão as aulas remotas?"
                    resposta="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    />
                    <PerguntaFAQ 
                    pergunta="Se eu perder uma aula, vou poder remarcar?"
                    resposta="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    />
                </SecaoFAQ>
            </BackGroundPink>
            <Footer/>
        </>
    )
}


export default Faq;