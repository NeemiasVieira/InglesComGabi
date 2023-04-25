import React from "react";
import { Footer } from "../../componentes/Footer/Footer";
import { BackGroundWhite } from "./404Style";
import { Nav } from "../../componentes/nav/Nav";
import { Main404 } from "./404Style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Page404 = () => {
    return(
        <>
            <BackGroundWhite>
                <Nav/>
                <Main404>
                    <h1>Oops!</h1>
                    <span>
                        <FontAwesomeIcon icon={faTriangleExclamation} flip />
                    </span>
                    <h2>Erro 404 - Página não encontrada</h2>
                    <a href="./">Voltar para Home</a>
                </Main404>          
            </BackGroundWhite>    
            <Footer/> 
        </> 
    )
}

export default Page404;