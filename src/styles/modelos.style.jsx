// * Modules * //
import styled, { css } from 'styled-components'; 
import WavesBack from '../assets/sss.svg';
import WavesTwo from '../assets/WavesTwo.svg'

// * Styles * //
export const Container = styled.div`
    margin-top: 95px;




    .text-model{
            width: 600px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            h6{
                margin: 0;
                margin-bottom: 10px;
                font-weight: 700;
            }
            h4{          
                font-weight: 679;
                font-size:2rem;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
            }
            p{
                color: #696969;
            }
        }

    .model-items{
        width: 75%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 120px;
    
        
        .box-item{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4%;
            margin-bottom: 120px;
            .text{
                width: 50%;

                .box-title::after{
                    width: 1rem;
                    height: 30px;
                    content: ' ─';
                    position: relative;
                    left: 1%;
                    color: #86282878;
                }

                h4{          
                font-weight: 679;
                font-size: 1.9rem;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
            }
            p{
                color: #696969;
            }
            }
            .image{
                width: 50%;
               text-align: center;
               position: relative;
                .svg-background{
                    background-image: url(${WavesBack});
                    width: 400px;
                    height: 400px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 40px;
                    top: 0%;
                    
                }

             
            }
            .prateleira{
                width: 60%;


                .svg-background{
                    background-image: url(${WavesTwo});
                    top: 15%;
                    left: 10%;
                }
            }

            .luminary{
                width: 40%;
               text-align: center;
               position: relative;
                .svg-background{
                    width: 90%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 15%;
                    top: 0%;
                    
                }
                img{
                    width: 80%;
                
                }


             
            }
        }
    }

    @media (max-width: 884px){
        .text-model{
            width: 100%;
            position: relative;
            text-align: center;
            h6{
                margin: 0;
                margin-bottom: 10px;
                font-weight: 700;
            }
            h4{          
                font-weight: 679;
                font-size:1.6rem;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
            }
            p{
                color: #696969;
                width: 80%;
                position: relative;
                text-align: center;
                left: 50%;
                font-size: .9rem;
                transform: translateX(-50%) !important; 
            }
        }

    .model-items{
        width: 100%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 120px;
    
        .box-item{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1%;
            margin-bottom: 120px;
            .text{
                width: 50%;
                h4{          
                font-weight: 679;
                font-size: 1.3rem;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
            }
            p{
                color: #696969;
                font-size: .9rem;
            }
            }
            .image{
                width: 40%;
               text-align: center;
               position: relative;
                .svg-background{
                    background-image: url(${WavesBack});
                    width: 90%;
                    height: 130%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 40px;
                    top: 0%;
                    
                }
                img{
                    width: 80%;
                
                }


             
            }
            .prateleira{
                width: 50%;
                

                .svg-background{
                    background-image: url(${WavesTwo});
                    top: 15%;
                    left: 10%;
                    width: 60%;
                    height: 90%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 20%;
                      
                    top: 10%;
                }  

                img{
                    width: 100%;
                }


            }

            .multifotos-i{
                width: 40%;
               text-align: center;
               position: relative;
                .svg-background{
                    background-image: url(${WavesBack});
                    width: 90%;
                    height: 130%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 20px;
                    top: 0%;
                    
                }
                img{
                    width: 80%;
                
                }


             
            }
            .luminary{
                .svg-background{
                    background-image: url(${WavesBack});
                    width: 90%;
                    height: 130%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 20px;
                    top: 0%;
                    
                }
            }

            
        }
    }

    }

    @media (max-width: 440px){
        .text-model{
            width: 100%;
            position: relative;
            text-align: center;
            h6{
                margin: 0;
                margin-bottom: 10px;
                font-weight: 700;
            }
            h4{          
                font-weight: 679;
                font-size:1.6rem;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
            }
            p{
                color: #696969;
                width: 80%;
                position: relative;
                text-align: center;
                left: 50%;
                font-size: .8rem;
                transform: translateX(-50%) !important; 
            }
        }

    .model-items{
        width: 95%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 120px;
    
        .box-item{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0%;
            margin-bottom: 120px;
            .text{
                width: 50%;
                h4{          
                font-weight: 679;
                font-size: 1.1rem;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
            }
            p{
                color: #696969;
                font-size: .8rem;
            }
            }
            .image{
                width: 40%;
               text-align: center;
               position: relative;
                .svg-background{
                    background-image: url(${WavesBack});
                    width: 90%;
                    height: 130%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 0;
                    top: 0%;
                    
                }
                img{
                    width: 90%;
                
                }


             
            }
            .prateleira{
                width: 50%;
                

                .svg-background{
                    background-image: url(${WavesTwo});
                    top: 15%;
                    left: 90%;
                    width: 90%;
                    height: 60%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 10%;
                      
                    top: 30%;
                }  

                img{
                    width: 120%;
                }


            }
            .luminary{
                width: 40%;
               text-align: center;
               position: relative;
                .svg-background{
                    background-image: url(${WavesBack});
                    width: 90%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    position: absolute;
                    left: 15%;
                    top: 0%;
                    
                }
                img{
                    width: 100%;
                
                }


             
            }
        }
    }

    }


`;