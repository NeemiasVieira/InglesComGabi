import styled from "styled-components";

export const SecaoPrecos = styled.section`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    min-height: 83.9vh;
    margin-left: 135px;

    h1{
        font-size: 2.5em;
        margin-bottom: 0;
        text-align: center;
        color: whitesmoke;
        text-shadow: 
               -1px -1px 0px #000, 
               -1px 1px 0px #000,                    
                1px -1px 0px #000,                  
                1px 0px 0px #000;
    }

    h2{
        margin: 0 0 3vh 0;
        color: whitesmoke;
        font-size: 1.7em;
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

    h1{
        font-size: 2em;
    }

    h2{
        margin: 0 0 3vh 0;
        color: whitesmoke;
        font-size: 1.3em;
        text-shadow: 
               -1px -1px 0px #000, 
               -1px 1px 0px #000,                    
                1px -1px 0px #000,                  
                1px 0px 0px #000;
    }

    a{    
        :hover{
            transform: scale(1);
            color: black;
            }
        }
    }

`