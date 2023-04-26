import React from "react";
import { FooterWhite } from "./FooterStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return(
        <>
            <FooterWhite>
                <div>
                    <a href="https://www.facebook.com/inglescomgabii" target="_Blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href="https://www.instagram.com/gabiihmolina/" target="_Blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://wa.me/5492236968771?text=Olá,%20tenho%20interesse%20nas%20aulas%20de%20inglês,%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20curso" target="_Blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
                </div>
                <p>Ingles com Gabi © 2023 - Todos os direitos reservados</p>
            </FooterWhite>
        </>
    )
}