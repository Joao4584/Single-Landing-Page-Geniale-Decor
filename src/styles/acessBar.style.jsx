// * Modules * //
import styled, { css } from 'styled-components'; 
import image from '../assets/deskModel.png';
import imageMobile from '../assets/mobileModel.png';

// * Styles * //
export const Container = styled.div`
    

    .case{
        width: 90%;
        max-width: 890px;
        background-image: url(${image});
        background-position: center;
        background-size: cover;
        height: 250px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 9px;
        margin-top: 150px;
        margin-bottom: 0px;

           .black-shadow{
            width: 100%;
            height: 100%;
            position: relative;
                    .text{
                        max-width: 400px;
                        width: 90%;
                        position: relative;
                        top: 20%;
                        left: 70%;
                        transform: translateX(-50%);

                        h4{
                            color: #782828;
                            font-size: 1.4rem;
                            margin: 0px;
                        }

                        p{
                            color: #795454;
                            margin-top: 17px;
                        }

                        .modelButton{
                            padding: 10px;
                            border-radius: 6px;
                            border: solid 1px #744444 ;
                            width: 120px;
                            color: #794b4b;
                            text-align: center;
                            background-color: transparent;
                        }

                    }

                }
    }

    @media (max-width: 884px){
         .case{
            width: 99%;
            max-width: 890px;
            background-image: url(${image});
            background-position: center;
            background-size: cover;
            backdrop-filter: blur(10%);
            height: 250px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 9px;
            margin-top: 150px;
            margin-bottom: 110px;
            
            .black-shadow{
            width: 100%;
            height: 100%;
            position: relative;
            background-color: #41414135;
            border-radius: .7rem;

                    .text{
                        max-width: 400px;
                        width: 90%;
                        position: relative;
                        top: 20%;
                        left: 50%;
                        transform: translateX(-50%);

                        h4{
                            color: #ffffff;
                            font-size: 1.4rem;
                            margin: 0px;
                        }

                        p{
                            color: #ebebeb;
                            margin-top: 17px;
                        }

                        .modelButton{
                            padding: 10px;
                            border-radius: 6px;
                            border: solid 1px #ffffff ;
                            width: 120px;
                            font-weight: bold;
                            color: #ffffff;
                            text-align: center;
                            background-color: #bfbfbf80;
                        }

                    }
        }
    }


    }


    
    @media (max-width: 584px){
         .case{
        width: 85%;
        max-width: 890px;
        background-image: url(${imageMobile});
        background-position: center;
        height: 250px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 9px;
        margin-top: 0px;
        margin-bottom: 0px;
        .black-shadow{
            width: 100%;
            height: 100%;
            position: relative;
                .text{
                    max-width: 400px;
                    width: 90%;
                    position: relative;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;

                    h4{
                        color: #f6f6f6;
                        font-size: 1.3rem;
                        margin: 0px;
                    }

                    p{
                        color: #e3e3e3;
                        margin-top: 17px;
                        font-size: .8rem;
                    }

                    .modelButton{
                        padding: 10px;
                        border-radius: 6px;
                        border: solid 1px #ffffff ;
                        width: 120px;
                        font-size: .8rem;
                        color: white;
                        text-align: center;
                        background-color: #cbcbcb6b;
                        position: relative;
                        left: 50%;
                        top: .6rem;
                        transform: translateX(-50%);
                    }

                }
            }
}

    
    }

 

`;