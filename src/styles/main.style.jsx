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
        background-color: ${props => props.mainColors.backgroundDark}99;
    }

    .centerModel{
            width: 100%;
            max-width: 1300px;
            position: relative;
            top: 250px;
            left: 50%;
            transform: translateX(-50%);

    }

    .text-section{
        padding: 15px;
        position: relative;
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
            background-color: ${props => props.mainColors.mainRed};
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
        bottom: 0;
        background-image: url(${wave});
        background-size: cover;
        background-position: bottom;
       
    }

 

`;