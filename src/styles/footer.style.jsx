// * Modules * //
import styled, { css } from 'styled-components'; 
import wave from '../assets/wavesFooter.svg';
import banner from '../assets/model2.png';
import bannerMobile from '../assets/mobilebanner.png';


// * Styles * //
export const Container = styled.div`
    width: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
    min-height: 470px;
    background-color: #d7d4d0;


    .banner-image{
        background-image: url(${banner});
        position: absolute;
        width: 100%;
        top: 0px;
        height: 100vh;
        min-height: 470px;
        z-index: 10;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        background-size: 100%;   
           background-position: top ;
        background-repeat: no-repeat;


        
            .class-grid{
                position: absolute;
                width: 90%;
                height: 150px;
                left: 50%;
                transform: translateX(-50%);
                bottom: 80px;
                display: flex;
                justify-content: center;
                gap: 24%;
                align-items: center;

                .sobre-model{
                    width: 400px;
                    padding-right: 1rem;
                    border-right: solid 1px red;

                    h3{
                        color: #b81818;
                        font-weight: 500;
                        font-size: 1.2rem;
                        margin: 0;
                        margin-bottom: 7px;
                        
                    }

                    p{
                        color: #5f5f5f;
                        margin: 0;
                    }

                }

                .contacts{
                    width: 300px;

                    .model-case{
                        display: flex;
                        align-items: center;
                        margin-top: 15px;
                        position: relative;
                        .icon{
                            width: 35px;
                            height: 35px;
                            background-color: #343538df;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            svg{
                                fill: white;
                            }

                        }

                        .text{
                            margin-left: 0.6rem;
                            margin-top: 0.2rem;
                            .name-s{
                                font-size: 0.8rem;
                                color: #868686;
                                font-weight: bold;
                               
                                margin-bottom: 4px;
                                padding: 0;
                            }
                            p{
                                font-size: 0.8rem;
                                color: #777777;
                                margin: 0;
                                padding: 0;
                            }
                        }
                    }
                }
            }


        
    }
    .colums-footer{
        padding-top: 45vh;
        width: 100%;
        height: 10px;
        bottom: 0px;
        position: absolute;
        .direitos{
            color: gray;
            position: absolute;
            bottom: 10px;
            right: 20px;
            font-size: 0.7rem;
        }
    }

    @media (max-width: 1250px){
        width: 100%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        height: 80vh;
        min-height: 470px;
        background-color: #d7d4d0;


        .banner-image{
            background-image: url(${banner});
            position: absolute;
            width: 100%;
            top: 0px;
            height: 80vh;
            min-height: 470px;
            z-index: 10;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
            background-size: 100%;   
            background-position: top ;
            background-repeat: no-repeat;


        }
    }

    @media (max-width: 720px){
        height: 80vh;
        min-height: 400px;
        .banner-image{
            background-image: url(${banner});
            position: absolute;
            width: 100%;
            top: -120px;
            height: 55vh;
            z-index: 10;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
            background-size: 100%;
            background-position: center center;
            background-repeat: no-repeat;


            
                .class-grid{
                    position: absolute;
                    width: 90%;
                    height: 150px;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 0px;
                    display: block;
                    justify-content: center;
                    gap: 24%;
                    align-items: center;
                    text-align: center;

                    .sobre-model{
                        width: 100%;
                        padding-right: 1rem;
                        border-right: none;

                        h3{
                            color: #b81818;
                            font-weight: 500;
                            font-size: 1.2rem;
                            margin: 0;
                            margin-bottom: 7px;
                            
                        }

                        p{
                            color: #5f5f5f;
                            margin: 0;
                        }

                    }

                    .contacts{
                        width: 300px;
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 30px;

                        .model-case{
                            display: block;
                            flex-wrap: wrap;
                            align-items: center;
                            margin-top: 15px;
                            position: relative;
                            .icon{
                                width: 35px;
                                height: 35px;
                                background-color: #343538df;
                                border-radius: 50%;
                                position: relative;
                                left: 50%;
                                transform: translateX(-50%);
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                svg{
                                    fill: white;
                                }

                            }

                            .text{
                                margin-left: 0.6rem;
                                margin-top: 0.4rem;
                                .name-s{
                                    font-size: 0.8rem;
                                    color: #868686;
                                    font-weight: bold;
                                    text-align: center;
                                    margin-bottom: 4px;
                                    padding: 0;
                                }
                                p{
                                    margin-top: 4px;
                                    font-size: 0.8rem;
                                    color: #777777;
                                    margin: 0;
                                    padding: 0;
                                    text-align: center;
                                
                                }
                            }
                        }

                        .flex-redes{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-top: 2rem;
                            gap: 20%;
                        }

                    }
                }


            
        }
        .colums-footer{
            padding-top: 85vh;
            width: 100%;
            height: 30px;
            position: relative;
            .direitos{
                color: gray;
                position: absolute;
                bottom: 0px;
                right: 20px;
                font-size: 0.7rem;
            }
        }
    }

    
    @media (max-width: 590px){
        height: 100vh;
        min-height: 400px;
        .banner-image{
            background-image: url(${bannerMobile});
            position: absolute;
            width: 100%;
            top: 0px;
            height: 80vh;
            z-index: 10;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
            background-size: 100%;
            background-position: top ;
            background-repeat: no-repeat;


            
                .class-grid{
                    position: absolute;
                    width: 90%;
                    height: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom:230px;
                    display: block;
                    justify-content: center;
                    gap: 24%;
                    align-items: center;
                    text-align: center;

                    .sobre-model{
                        width: 100%;
                        padding-right: 1rem;
                        border-right: none;

                        h3{
                            color: #b81818;
                            font-weight: 500;
                            font-size: 1.2rem;
                            margin: 0;
                            margin-bottom: 7px;
                            
                        }

                        p{
                            color: #5f5f5f;
                            margin: 0;
                            padding-bottom: 30px;
                            border-bottom: solid 1px red;
                        }

                    }

                    .contacts{
                        width: 300px;
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 30px;

                        .model-case{
                            display: block;
                            flex-wrap: wrap;
                            align-items: center;
                            margin-top: 15px;
                            position: relative;
                            .icon{
                                width: 35px;
                                height: 35px;
                                background-color: #343538df;
                                border-radius: 50%;
                                position: relative;
                                left: 50%;
                                transform: translateX(-50%);
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                svg{
                                    fill: white;
                                }

                            }

                            .text{
                                margin-left: 0.6rem;
                                margin-top: 0.4rem;
                                .name-s{
                                    font-size: 0.8rem;
                                    color: #868686;
                                    font-weight: bold;
                                    text-align: center;
                                    margin-bottom: 4px;
                                    padding: 0;
                                }
                                p{
                                    margin-top: 4px;
                                    font-size: 0.8rem;
                                    color: #777777;
                                    margin: 0;
                                    padding: 0;
                                    text-align: center;
                                
                                }
                            }
                        }
                    }
                }


            
        }
        .colums-footer{
            padding-top: 85vh;
            width: 100%;
            height: 70px;
            position: relative;
            .direitos{
                color: gray;
                position: absolute;
                bottom: 10px;
                right: 0px;
                left: 0px;
                width: 100%;
                text-align: center;
                font-size: 0.7rem;
            }
        }
        }

    @media (max-width: 420px){
   
        .banner-image{
            background-image: url(${bannerMobile});
            position: absolute;
            width: 100%;
            top: 0px;
            height: 65vh;
            z-index: 10;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
            background-size: 100%;
            background-position: top ;
            background-repeat: no-repeat;


            
                .class-grid{
                    position: absolute;
                    width: 90%;
                    height: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: 20vh;
                    display: block;
                    justify-content: center;
                    gap: 24%;
                    align-items: center;
                    text-align: center;

                    .sobre-model{
                        width: 100%;
                        padding-right: 1rem;
                        border-right: none;
                        
                        h3{
                            color: #b81818;
                            font-weight: 500;
                            font-size: 1.2rem;
                            margin: 0;
                            margin-bottom: 7px;
                            
                        }
                        
                        p{
                            color: #5f5f5f;
                            margin: 0;
                            padding-bottom: 30px;
                            border-bottom: solid 1px red;
                        }

                    }

                    .contacts{
                        width: 300px;
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 30px;

                        .model-case{
                            display: block;
                            flex-wrap: wrap;
                            align-items: center;
                            margin-top: 15px;
                            position: relative;
                            .icon{
                                width: 35px;
                                height: 35px;
                                background-color: #343538df;
                                border-radius: 50%;
                                position: relative;
                                left: 50%;
                                transform: translateX(-50%);
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                svg{
                                    fill: white;
                                }

                            }

                            .text{
                                margin-left: 0.6rem;
                                margin-top: 0.4rem;
                                .name-s{
                                    font-size: 0.8rem;
                                    color: #868686;
                                    font-weight: bold;
                                    text-align: center;
                                    margin-bottom: 4px;
                                    padding: 0;
                                }
                                p{
                                    margin-top: 4px;
                                    font-size: 0.8rem;
                                    color: #777777;
                                    margin: 0;
                                    padding: 0;
                                    text-align: center;
                                
                                }
                            }
                        }
                    }
                }


            
        }
        .colums-footer{
            padding-top: 85vh;
            width: 100%;
            height: 70px;
            position: relative;
            .direitos{
                color: gray;
                position: absolute;
                bottom: 10px;
                right: 0px;
                left: 0px;
                width: 100%;
                text-align: center;
                font-size: 0.7rem;
            }
        }
    }


`;