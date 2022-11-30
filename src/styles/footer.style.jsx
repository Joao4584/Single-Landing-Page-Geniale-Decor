// * Modules * //
import styled, { css } from 'styled-components'; 
import wave from '../assets/layered-waves.svg';

// * Styles * //
export const Container = styled.div`
    width: 100%;
    position: relative;
    min-height: 300px;
    background-color: #343434;
    padding-bottom: 90px;
    .waves-model{
        width: 100%;
        height: 350px;
        position: absolute;
        transform: rotate(180deg);
        top: -5px;
        background-image: url(${wave});
        background-size: cover;
        background-position: bottom;
       
    }

    .class-content{
        padding-top: 13vw;
        width: 100%;
        max-width: 900px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        display: flex;
        gap: 3%;
        justify-content: center;
        align-items: center;


        .mod-div{
            width: 50%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .imagem{
                width: 100%;
                margin-top: 0px;
            }


            .icons-rede{
                margin-top: 30px;
                display: flex;
                padding: 0;
                gap: 40px;
                justify-content: center;

                a{

                    .icon{
                        background-color: #aba8a84f;
                        padding: 6px;
                        border-radius: 4px;
                        margin: 0px;
                        
                        svg{
                            position: relative;
                            left: 50%;
                            top: 2px;
                            transform: translateX(-50%);
                            width: 20px;
                            height: 20px;
                            fill: white;
                        }
    
                    }
                }
            }

            .email-model{
                width: 290px;
                padding: 9px;
                margin-top: 20px;
                height: 15px;
                border-radius: 9px;
                display: flex;
                align-items: center;
                gap: 15px;
                background-color: #b5b5b52e;

                .icon-mail{
                   
                    padding: 6px;
                    margin: 0;
                    border-radius: 7px;

                    svg{
                        position: relative;
                        left: -4%;
                        top: 2px;
                        width: 20px;
                        fill: #efefef;
                        height: 20px;
                    }

                }



                .text-mail{
                    width: 100px;
                }
            }


        }
        .logo{
            width: 70%;
            margin-bottom: 1rem;
        }
        p{
            font-size: 0.9rem;
            color: #e2e2e2;
            width: 100%;
        }
    }


`;