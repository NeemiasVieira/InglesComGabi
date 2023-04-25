import React from "react";
import logo from '../../assets/img/inglesLogo.png'
import { HeaderNav } from "./NavStyle";

export function Nav(){
    return(
        <HeaderNav>
            <nav>            
                <img src={logo} alt="Logo de Ingles Com Gabi" />
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./#/sobre">Sobre</a></li>
                    <li><a href="./#/plataforma">Plataforma</a></li>
                    <li><a href="./#/contato">Contato</a></li>
                </ul>                
            </nav>
        </HeaderNav>
    )
}