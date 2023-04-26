import styled from "styled-components";

export const FormMat = styled.form`

.formulario{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 64, 170);
        width: 525px;
        gap: 1vh;
        height: 300px;
        border-radius: 20px;
        border: solid whitesmoke 2px;
    }

    input, select{
        width: 400px;
        text-align: center;
        border-radius: 5px;
        border: solid whitesmoke 2px;
        font-size: .9em;
        font-weight: 500;
    }

    label{
        font-size: 1em;
        font-weight: 900;
    }

    button{
        margin-top: 20px;
        background: linear-gradient(to bottom right, #e0e, #f05);
        color: whitesmoke;
        cursor: pointer;
        border-radius: 10px;
        border: solid whitesmoke 3px;
        width: 200px;
        height: 40px;
        font-size: 1em;
        font-weight: 900;

    }

    @media screen and (max-width: 480px){
    .formulario{
        width: 350px;
        height: 300px;
    }

    input, select{
        width: 300px;
        font-size: .8em;
    }

    label{
        font-size: 1em;
    }
    }

`

