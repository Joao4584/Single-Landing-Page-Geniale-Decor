// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Component = styled.div`

 .navegate-card{
    position: fixed;
    width: 100%;
    max-width: 900px;
    display: flex ;
    background: #ffffff;
    box-shadow:  0px 10px 18px #4f4f4f50;
    border-radius: 0.6rem;
    z-index: 1000;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 11px 20px;
    animation: s321lide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    .text-cookie{
        width: 90%;
        h2{
            text-align: left;
            font-size: 1.1rem;
            color: #474747;
            margin: 0;
            margin-bottom: 5px;
        }

        p{
            text-align: left;
            font-size: .8rem;
            color: #929292;
            margin: 0;


            a{
                color: #9a5757;
                font-weight: 600;
                text-decoration: underline;
            }
        }
    }

    .button{
        width: 10%;
            .button-accept{
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                padding: .8rem;
                text-align: center;
                color: white;
                border-radius: .5rem;
                background-color: #2d2d2d;
                cursor: pointer;
            }
    }

    transition-duration: .5s;
 }
    .remove-term{
        bottom: -100px;
        transition-duration: .5s;
    }

    @keyframes s321lide-top {
    0% {
                transform: translate(-50%, 100px);
    }
    100% {
                transform: translate(-50% , 0px);
    }
    }





 @media (max-width: 810px){
    .navegate-card{
        
    .button{
        width: 10%;
            .button-accept{
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                padding: .5rem 0rem;
                font-size: 0.8rem;
                text-align: center;
                color: white;
                border-radius: .5rem;
                background-color: #2d2d2d;
                cursor: pointer;
            }
    }
        
    }
 }
 
 @media (max-width: 610px){
    .navegate-card{
        bottom: 0px;
        border-radius: 10px 10px 0px 0px;
       
        .text-cookie{
            width: 90%;
            h2{
                text-align: left;
                font-size: 1rem;
                color: #474747;
                margin: 0;
                margin-bottom: 5px;
            }

            p{
                text-align: left;
                font-size: .7rem;
                color: #929292;
                margin: 0;


                a{
                    color: #9a5757;
                    font-weight: 600;
                    text-decoration: underline;
                }
            }
        }

        .button{
            width: 30%;
                .button-accept{
                    position: relative;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    padding: .8rem;
                    text-align: center;
                    color: white;
                    border-radius: .5rem;
                    background-color: #2d2d2d;
                    cursor: pointer;
                }
        }
    }

    
 }


`;