import styled from "styled-components";
import "@fontsource/montserrat";

export const HeaderNav = styled.header`
    position: fixed;
    font-family: "Montserrat";
    height: 100vh;
    width: 125px;
    background: #ff40aa;
    font-size: .9em;
    font-weight: 600;
    border-right: solid whitesmoke 3px;
    z-index: 1;
    overflow: hidden;
    
    nav{
        display: flex;
        flex-flow: column wrap;
        gap: 3vh;
        padding-top: 2vh;
        align-items: center;
    }


    img{
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }

    ul{
        display: flex;
        flex-flow: column wrap;
        margin: 0;
        padding: 0;
        width: 125px;
        
    }

    ul li{
        text-align: center;
        width: 125px;
        padding: 2vh 0;
        list-style: none;
        border-bottom: solid #fff 1px;
        border-radius: 1px;
        transition: all 100ms;
    }

    ul li:hover, ul li:hover a{
        background: #fff;
        color: #ff40aa;
        font-size: 1.2em;
    }

    ul li:hover{
        border-bottom: solid #ddd 2px;
        border-top: solid #ddd 2px;
        border-left: solid #ddd 2px;
    }


    ul li a{
        color: whitesmoke;
        text-decoration: none;
        text-align: center;
        padding: 2vh 0;
        list-style: none;
    }


    @media screen and (max-width: 480px){
    height: 7vh;
    width: 100vw;
    font-size: .8em;
    border-bottom: solid whitesmoke 3px;

    nav{
        flex-flow: row nowrap;
        gap: 0;
        padding-top: 0;
    }

    img{
        width: 55px;
        height: 55px;
        border-radius: 30px;
        margin-left: 20px;
    }

    ul{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        gap: 1vw;
        height: 7vh;
        width: 100vw;
        
    }

    ul li{
        width: auto;
        padding: 0 3vw;
        border-left: none;
        transition: none;
        display: flex;
        align-items: center;
    }

    ul li:hover, ul li:hover a{
        background: #ff40aa;
        color: whitesmoke;
        font-size: 1em;
    }

    ul li:hover{
        border-bottom: none;
        border-top: none;
        border-left: none;
    }

    }
    

    


`