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
        flex-flow: column wrap;
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


    @media screen and (max-width: 480px){
        margin-top: 100px;
        margin-left: 0;        
        width: 100vw;
        color: whitesmoke;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;

        h1, h2{
            margin-right: 0;
        }

        h1{
            font-size: 1.7em;
        }

        h2{
            font-size: 1.1em;
            margin-bottom: 85px;
        }


        .flexge1{
            flex-flow: column-reverse;
            align-items: center;
            justify-content: center;
            gap: 2vh;


            h3, p{
                max-width: 90vw;
            }
        }

        .flexgeImg1{
            gap: 8vw;

            img{
                width: 40vw;
                border-radius: 20px;
                border: solid whitesmoke 2px;
            }
        }

        .flexge2{
            flex-flow: column;
            margin: 85px 0 0 0;
            gap: 2vh;

            img{
                border-radius: 40px;
                border: solid whitesmoke 2px;
                width: 90vw;
            }

            h3, p{
                max-width: 90vw;
            }
        }

        .flexge3{
            flex-flow: column-reverse;
            gap: 2vh;
            margin: 85px 0 0 0;

            img{
                border: solid white 2px;
                border-radius: 30px;
                width: 90vw;
            }

            h3,p{
                max-width: 90vw;
            }
        }

        .flexge4{
            margin: 85px 0 30px 0;
            gap: 1vh;

            h2{
                margin-bottom: 25px;
            }
            

            .topico{
                margin: 0 4vw;
                gap: 5vw;

                div{
                    display: column wrap;
                }

                p{
                    width: 70vw;
                }

            }

            img{
                width: 70px;
                height: 70px;
            }
        }
            
    }
`