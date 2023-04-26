import styled from "styled-components";

export const SecaoFAQ = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin-left: 130px;
    margin-top: 100px;

    h1{
        font-size: 2em;
        margin-bottom: 5vh;
        text-align: center;
        color: whitesmoke;
        text-shadow: 
               -1px -1px 0px #000, 
               -1px 1px 0px #000,                    
                1px -1px 0px #000,                  
                1px 0px 0px #000;
    }


    @media screen and (max-width: 480px){
        margin-left: 0;
    }

`