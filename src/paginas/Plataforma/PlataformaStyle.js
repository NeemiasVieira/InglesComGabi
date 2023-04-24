import styled from "styled-components";

export const SecaoPlataforma = styled.section`
    margin-left: 65px;
    min-height: 100vh;
    width: 100vw;
    color: whitesmoke;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    h1, h2{
        text-align: center;
        margin-right: 65px;
    }

    h1{
        font-size: 2em;
        font-weight: 900;
    }

    h2{
        font-size: 1.4em;
        font-weight: 700;
        margin-bottom: 150px;
    }



    .flexge1{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 3vw;

        h3, p{
            max-width: 40vw;
        }
    }

    .flexgeImg1{
        display: flex;
        flex-flow: row nowrap;
        gap: 2vw;

        img{
            border-radius: 20px;
            border: solid black 1px;
        }

    }

    .flexge2{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 100px 0 100px 0;
        gap: 3.5vw;

        img{
            border-radius: 40px;
            border: solid black 1px;
        }

        h3, p{
            max-width: 35vw;
        }
    }

    .flexge3{
        display: flex;
        flex-flow: row nowrap;
        gap: 5vw;
        margin: 100px 0 100px 0;

        img{
            border: solid black 1px;
            border-radius: 25px;
            width: 500px;
            height: 350px;
        }

        h3,p{
            max-width: 40vw;
        }
    }
    
    .flexge4{

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        margin: 100px 0 100px 0;
        gap: 1vh;

        h2{
            margin-bottom: 50px;
            width: 100vw;
        }
        

        .topico{
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            gap: 2vw;

            div{
                display: column wrap;
            }

            p{
                width: 60vw;
            }

        }


        img{
            width: 75px;
            height: 75px;
        }
    }
`