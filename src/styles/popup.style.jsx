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
        -webkit-animation:slide-top1 .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-top1 .5s cubic-bezier(.25,.46,.45,.94) both;

        @keyframes slide-top1{
        0%{-webkit-transform:translate(-50%, 0%);transform:translate(-50%, 0%); opacity: 0;}
        100%{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}
    }



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

            .content-text{
              

                h3{
                    font-size: 1.4rem;
                    color: #575757;
                    padding: 0;
                    text-align: center;

                    #clock-component{
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        display: flex;
                        width: 280px;
                        justify-content: space-around;
                        text-align: center;
                        color: #ffffff;
                        font-size: 2rem;
                        .text-timer{
                            font-size: 0.7rem;
                            color: #ececec;
                          
                        }

                        .clocks{
                            background-color: #535353;
                            width: 53px;
                            height: 60px;
                            padding-top: 2px;
                            border-radius: .3rem;
                        }
                    }
                }
                .font-bottom{
                
                    margin-top: 10px !important;
                    top: 0;
                    padding: 0;
                    font-size: .8rem !important;
                }
            }

            .text{
                width: 60%;
                position: relative;

                .content-text{
                    width: 75%;
                    z-index: 1;
                    position: absolute;
                    left: 50%;
                    top: 38%;
                    transform: translate(-50%, -50%);

                    h4{
                        font-size: 1rem;
                        color: #575757;
                     text-align: center;
                     margin-top: 11%;
                    }


                   .ant-btn-primary{
                    background-color: #535353;
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
            .content-text{
              

              h3{
                  font-size: 1.2rem;
                  color: #575757;
                  padding: 0;
                  text-align: center;

                  #clock-component{
                      position: relative;
                      left: 50%;
                      transform: translateX(-50%);
                      display: flex;
                      width: 280px;
                      justify-content: space-around;
                      text-align: center;
                      color: #ffffff;
                      font-size: 1.4rem;
                      .text-timer{
                          font-size: 0.7rem;
                          color: #ececec;
                        
                      }

                      .clocks{
                          background-color: #535353;
                          width: 53px;
                          height: 50px;
                          padding-top: 2px;
                          border-radius: .3rem;
                      }
                  }
              }
            
          }
          

            .text{
                width: 100%;
                position: relative;

                .content-text{
                    width: 93%;
                    z-index: 1;
                    position: relative;
                    top: 40px;
                    left: 50%;
                    transform: translateX(-50%);

                    h4{
                        font-size: 1.2rem;
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
                    width: 160px;
                    position: relative;
                    top: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }

        }
    }
    }
`;