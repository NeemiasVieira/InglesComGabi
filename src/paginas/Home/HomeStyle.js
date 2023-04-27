import styled from "styled-components";
import "@fontsource/montserrat";

export const BackGroundPink = styled.main`
    font-family: Montserrat;
    max-width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(to bottom right, #ffaaff, #ff4465);
    overflow-x: hidden;
`
export const SecaoPrincipal = styled.section`
    height: auto;
    margin: 130px;
    color: whitesmoke;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    h1{
        font-size: 2em;
        margin: 0;
        color: whitesmoke;
    }

    h2{
        font-size: 1em;
        max-width: 80vw;
        margin-bottom: 7vh;
    }

    p{
        font-size: 1.1em;
        max-width: 450px;
        margin: 0 3vw;
        padding: 0;
    }

    img{
        background: #fff;
        border-radius: 75px;
    }

    .introducao{
        width: 80vw;
        display: flex;
        flex-flow: column wrap;
    }

    .beneficiosTitulo{
        font-size: 1.2em;
        font-weight: 900;
        max-width: 80vw;
    }

    .beneficios p{
        font-size: max(1em);
        max-width: 33.5vw;
    }

    .beneficios{
        display: flex;
        flex-flow: row wrap;
        gap: 3vh .5vw;
        margin-bottom: 5vh;
    }

    .inicioIntroducao{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 3vh;
    }


     @media screen and (max-width: 480px){
        margin-left: 0;
        margin-top: 12vh;

        h1{
        font-size: 1.6em;
        }

        h2{
            font-size: .9em;
            max-width: 85vw;
            margin-bottom: 7.5vh;
        }

        img{
            height: 200px;
            width: 200px;
            border-radius: 20px;
        }

        p{
            font-size: .9em;
            padding: 0 1vw;
            margin-top: 2vh;
        }

        .introducao{
            width: 100vw;
            margin: 0 2vw;
        }

        .inicioIntroducao{
            width: 100vw;
        }

        .beneficiosTitulo{
            font-size: 1em;
            max-width: 95vw;
        }

        .beneficios{
            flex-flow: column wrap;
        }

        .beneficios p{
            max-width: 95vw;
        }

    } 
 


`