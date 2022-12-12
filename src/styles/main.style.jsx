// * Modules * //
import styled, { css } from 'styled-components'; 
import wave from '../assets/layered-waves.svg';
// * Styles * //
export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 720px;
    background-image: url(${props => props.mainPresets.background});
    background-repeat: no-repeat;
    background-position: 10% 60%;
    background-size: cover;



    .darkBackground{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: ${props => props.mainColors.backgroundDark}69;
    }

    .centerModel{
        
            width: 100%;
            max-width: 1300px;
            position: absolute;
            top: 250px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;

    }

    .text-section{
        padding: 15px;
        position: absolute;
        width: 500px;
        

        h2{
            margin: 0;
            color: ${props => props.mainColors.titleWhite};
            font-size: 75px;
        }

        p{
            color: ${props => props.mainColors.textWhite};
            font-size: 19px;
            margin: 3px;
            margin-bottom: 25px;
        }

        .buttonMain{
            color: ${props => props.mainColors.textWhite};
            background-color:#2d2d2d;
            width: 140px;
            padding: 10px;
            border-radius: 10px;
            text-align: center;
            border-radius: 8px;
     
            
        }
    }

    .waves-back{
        width: 100%;
        height: 350px;
        position: absolute;
        z-index: 0;
        bottom: 0;
        background-image: url(${wave});
        background-size: cover;
        background-position: bottom;
       
    }



    @media (max-width: 600px){
        background-image: url(${props => props.mainPresets.backgroundMobile});    
        background-position: center;
        .text-section{
            padding: 15px;
            position: absolute;
            width: 80%;
            

            h2{
                margin: 0;
                color: ${props => props.mainColors.titleWhite};
                font-size: 2.1rem;
            }

            p{
                color: ${props => props.mainColors.textWhite};
                font-size: 0.9rem;
                margin: 3px;
                margin-bottom: 25px;
            }

            .buttonMain{
                color: ${props => props.mainColors.textWhite};
                width: 140px;
                padding: 10px;
                border-radius: 10px;
                text-align: center;
                border-radius: 8px;
        
                
            }
        }

        .waves-back{
            width: 100%;
            height: 350px;
            position: absolute;
            z-index: 0;
            bottom: 0;
            background-image: url(${wave});
            background-size: cover;
            background-position: bottom;
        
        }
    }

 

`;


export const ContainerTerms = styled.div`
    background-color: #7b7b7b;
    position: relative;
    width: 100%;
    height: 430px;
    background-repeat: no-repeat;
    background-position: 10% 60%;
    background-size: cover;



    .darkBackground{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: ${props => props.mainColors.backgroundDark}69;
    }

    .centerModel{
        
            width: 100%;
            max-width: 1300px;
            position: absolute;
            top: 180px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;

    }

    .text-section{
        padding: 15px;
        position: relative;
        width: 500px;
        left: 50%;
        transform: translateX(-50%);
        
        text-align: center;
        h2{
            margin: 0;
            color: ${props => props.mainColors.titleWhite};
            font-size: 3rem;
        }

      
    }

    .waves-back{
        width: 100%;
        height: 350px;
        position: absolute;
        z-index: 0;
        bottom: 0;
        background-image: url(${wave});
        background-size: cover;
        background-position: bottom;
       
    }



    @media (max-width: 600px){
        background-position: center;
        .text-section{
            padding: 15px;
            position: absolute;
            width: 80%;
            

            h2{
                margin: 0;
                color: ${props => props.mainColors.titleWhite};
                font-size: 2.1rem;
            }

            p{
                color: ${props => props.mainColors.textWhite};
                font-size: 0.9rem;
                margin: 3px;
                margin-bottom: 25px;
            }

            .buttonMain{
                color: ${props => props.mainColors.textWhite};
                width: 140px;
                padding: 10px;
                border-radius: 10px;
                text-align: center;
                border-radius: 8px;
        
                
            }
        }

        .waves-back{
            width: 100%;
            height: 350px;
            position: absolute;
            z-index: 0;
            bottom: 0;
            background-image: url(${wave});
            background-size: cover;
            background-position: bottom;
        
        }
    }

 

`;