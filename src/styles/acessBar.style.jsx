// * Modules * //
import styled, { css } from 'styled-components'; 
import image from '../assets/11test.png'

// * Styles * //
export const Container = styled.div`
    

    .case{
        width: 90%;
        max-width: 890px;
        background-image: url(${image});
        background-position: center;
        height: 250px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 9px;
        margin-top: 150px;
        margin-bottom: 110px;

        .text{
            max-width: 400px;
            width: 90%;
            position: relative;
            top: 20%;
            left: 70%;
            transform: translateX(-50%);

            h4{
                color: #f6f6f6;
                font-size: 1.4rem;
                margin: 0px;
            }

            p{
                color: #e3e3e3;
                margin-top: 17px;
            }

            .modelButton{
                padding: 10px;
                border-radius: 6px;
                border: solid 1px #ffffff ;
                width: 120px;
                color: white;
                text-align: center;
                background-color: #cbcbcb6b;
            }

        }
    }

    @media (max-width: 884px){
         .case{
        width: 99%;
        max-width: 890px;
        background-image: url(${image});
        background-position: center;
        height: 250px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 9px;
        margin-top: 150px;
        margin-bottom: 110px;

        .text{
            max-width: 400px;
            width: 90%;
            position: relative;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);

            h4{
                color: #f6f6f6;
                font-size: 1.4rem;
                margin: 0px;
            }

            p{
                color: #e3e3e3;
                margin-top: 17px;
            }

            .modelButton{
                padding: 10px;
                border-radius: 6px;
                border: solid 1px #ffffff ;
                width: 120px;
                color: white;
                text-align: center;
                background-color: #cbcbcb6b;
            }

        }
    }
    }

 

`;