import React from "react";
import { Nav } from "../../componentes/nav/Nav";
import { Footer } from "../../componentes/Footer/Footer";
import { BackGroundPink } from "../Home/HomeStyle";
import { SecaoFAQ } from "./FaqStyle";

const Faq = () => {
    return(
        <>
            <BackGroundPink>
                <Nav/>
                <SecaoFAQ>
                    <p>Página Faq</p>
                </SecaoFAQ>
            </BackGroundPink>
            <Footer/>
        </>
    )
}


export default Faq;