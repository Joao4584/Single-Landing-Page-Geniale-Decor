import styled, { createGlobalStyle  } from 'styled-components';
import font from '../assets/DelectaMedium.otf'

export const GlobalStyles = createGlobalStyle`

 
    *{
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
    }

     body{
        margin: 0;
        padding: 0;
        background: #ffffff;
     
    }

    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    ul{
        list-style: none
    }


    .center-relative{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .object-center-relative{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

`;

export const App = styled.div`

    .center-radius{
           
            width: 100%;
            max-width: 1350px;
            position: relative;
            min-height: 600px;
            padding-bottom: 100px;
            
        }

        .red-text-main{
            color: #861414;
            font-weight: bold;
        }
        .sub-tittle{
            color : #841B1B;
            font-size: 18px
        }
`;