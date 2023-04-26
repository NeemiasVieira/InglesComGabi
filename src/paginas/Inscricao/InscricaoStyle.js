import styled from "styled-components";

export const SecaoInscricao = styled.section`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    min-height: 83.9vh;
    margin-left: 135px;
    gap: 2vh;

    h1{
        font-size: 2em;
        color: whitesmoke;
        text-shadow: 
               -1px -1px 0px #000, 
               -1px 1px 0px #000,                    
                1px -1px 0px #000,                  
                1px 0px 0px #000;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        text-decoration: none;
        color: black;
        font-weight: 900;
        width: 200px;
        height: 60px;
        border-radius: 10px;
        font-size: 1em;
        transition: all 300ms;
        border: solid black 1px;

        :hover{
            transform: scale(1.1);
            color: rgb(255, 64, 170);
            }
        }

        @media screen and (max-width: 480px){
            margin-left: 0;
        }
`