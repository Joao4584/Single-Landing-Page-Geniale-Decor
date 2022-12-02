// * Modules * //
import styled, { css } from 'styled-components'; 
import svg from '../assets/ffflurry.svg';

// * Styles * //
export const Container = styled.div`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: #4646465b;
    backdrop-filter: blur(3px);
 


    .box{
        width: 99%;
        height: 70%;
        max-width: 910px;
        height: 500px;
        background-color: #f6f6f6;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: .6rem;


        .exitModel{
            position: absolute;
            margin: 0.6rem;
            cursor: pointer;

            svg{
                width: 30px;
                height: 30px;
            }
        }

        .content{
            display: flex;
            width: 100%;
            height: 100%;
            position: relative;


            .text{
                width: 60%;
                position: relative;

                .content-text{
                    width: 70%;
                    z-index: 1;
                    position: absolute;
                    left: 50%;
                    top: 35%;
                    transform: translate(-50%, -50%);

                    h4{
                        font-size: 1.4rem;
                        color: #575757;
                    }


                   .ant-btn-primary{
                    background-color: #824040ac;
                   }
                }
            }
            .content-image{
                border-radius: 0rem .6rem .6rem 0rem;
                background-color: #e8e7e7a5;
                background-repeat: no-repeat;
                background-size: cover;
                width: 40%;
                height: 100%;
                position: relative;

                img{
                    width: 500px;
                    position: absolute;
                    top: 50%;
                    transform: translate(-22%, -50%);
                }
            }

        }
    }


    @media (max-width: 660px) {
        .box{
        width: 99%;
        min-height: 400px;

        max-height: 1000px;
        max-width: 910px;
        padding-bottom: 45px;

        background-color: #f6f6f6;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: .6rem;


        .exitModel{
            position: absolute;
            margin: 0.6rem;
            cursor: pointer;

            svg{
                width: 30px;
                height: 30px;
            }
        }

        .content{
            display: block;
            width: 100%;
            height: 100%;
            position: relative;


            .text{
                width: 100%;
                position: relative;

                .content-text{
                    width: 70%;
                    z-index: 1;
                    position: relative;
                    top: 90px;
                    left: 50%;
                    transform: translateX(-50%);

                    h4{
                        font-size: 1.4rem;
                        color: #575757;
                    }


                   .ant-btn-primary{
                    background-color: #824040ac;
                   }
                }
            }
            .content-image{
                border-radius: 0rem .6rem .6rem 0rem;
                background-color: transparent;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 190px;
                position: relative;

                img{
                    width: 250px;
                    position: relative;
                    
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

        }
    }
    }
`;