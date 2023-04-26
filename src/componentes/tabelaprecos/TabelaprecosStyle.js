import styled from "styled-components";

export const TabelaPrecosDiv = styled.div`

    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    table{
        width: 50vw;
        border: solid black 1px;
        text-align: center;
        color: black;
        font-weight: 900;
        background: #fff;
        padding: 10px;
        border-radius: 10px;
    }

    th{
        font-size: 1.2em;
        min-width: 120px;
        /* border: solid black 1px; */
    }
    td{
        border: solid black 1px;
        font-size: 1.2em;
    }

    p{
        color: whitesmoke;
        font-weight: 700;
    }

    @media screen and (max-width: 480px){

    table{
        padding: 3px;
    }

    td, th{
        font-size: .8em;
    }

    th{
        min-width: 75px;
    }

    p{
        color: whitesmoke;
        font-weight: 700;
        margin: 3vh 3vw;
    }

    }
        
    `