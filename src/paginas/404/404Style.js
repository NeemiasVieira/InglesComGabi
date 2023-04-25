import styled from "styled-components";
import "@fontsource/montserrat";

export const BackGroundWhite = styled.main`

    font-family: Montserrat;
    max-width: 100vw;
    min-height: 83.95vh;
    background-image: whitesmoke;
    overflow-x: hidden;

`

export const Main404 = styled.section `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;


    h1{
        font-size: 4em;
        margin: 0;
    }

    h2{
        margin: 0 0 3vh 0;
        color: #222;
    }

    span{
        color: rgb(255, 64, 170);
        font-size: 10em;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: whitesmoke;
        font-size: 1.2em;
        font-weight: 900;
        width: 250px;
        height: 40px;
        background: rgb(255, 64, 170);
        border-radius: 7px;
        transition: all 300ms;

        :hover {
            transform: scale(1.2);
        }
      
    }


    @media screen and (max-width: 480px){
        h1, h2, span, a{
            transform: scale(.9);
        }

        a:hover{
            transform: scale(.9)
        }

    }




`