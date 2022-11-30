import styled, { createGlobalStyle  } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    *{
        font-family: 'Inter', sans-serif;
    }

     body{
        margin: 0;
        padding: 0;
        background-color: #787775;
    }

    a{
        color: inherit;
        text-decoration: none;
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