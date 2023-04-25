import styled from "styled-components";

export const FooterWhite = styled.footer`
    overflow: hidden;
    position: relative;
    background: #ccc;
    height: 150px;
    width: 100vw;
    border-top: solid #aaa 3px;
    z-index: 2;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    p{
        text-align: center;
        width: 100vw;
        font-weight: 700;
    }

    a{
        display: inline-block;
        color: whitesmoke;
        text-decoration: none;
        font-size: 2.5em;
        background-image: linear-gradient(to right bottom, rgb(255, 170, 255), rgb(255, 68, 101));
        width: 50px;
        height: auto;
        text-align: center;
        border-radius: 30px;
        padding: 5px;
        border: solid #ccc 3px;
        transition: all 250ms;
    }

    a:hover{
        border: solid rgb(255, 64, 170) 3px;
        transform: scale(1.2);
    }

    div{
        display: flex;
        flex-flow: row nowrap;
        gap: 40px;
    }

    @media screen and (max-width: 480px){

        a{
            margin-top: 1vh;
        }

        p{
            font-size: .9em;
        }
    }
    
`