import styled from "styled-components";

export const SecaoContato = styled.section`
    margin-left: 65px;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    color: whitesmoke;

    h1{
        text-align: center;
        width: 100vw;
        font-size: 2em;
    }

    h2{
        text-align: center;
        width: 70vw;
        font-size: 1.4em;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        text-decoration: none;
        color: black;
        font-weight: 900;
        width: 175px;
        height: 50px;
        border-radius: 10px;
        font-size: 1em;
        transition: all 300ms;

        :hover{
            transform: scale(1.1);
            color: rgb(255, 64, 170);
            }
        }
  
    .BotoesPrincipais{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 3vw;
        background-color: rgb(255, 64, 170);
        border-radius: 20px;
        width: 500px;
        height: 125px;
        margin: 5vh 0;

    }

    @media screen and (max-width: 480px){
        margin-left: 0;

        h1{
            font-size: 1.8em;
        }

        h2{
            font-size: 1.2em;
            width: 90vw;
        }

        .BotoesPrincipais{
        gap: 5vw;
        width: 350px;
        height: 130px;
        margin: 5vh 0;

        }

        a{
        width: 140px;
        height: 50px;
        border-radius: 10px;
        font-size: .9em;

        :hover{
            transform: scale(1);
            color: black
            }
        }
    }

`