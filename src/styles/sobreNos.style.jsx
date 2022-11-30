// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Container = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    min-height: 500px;
    margin-top: 50px;
    display: flex;
    align-items: center;

    .item-img{
        width: 55%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 90%;
        }
    }

    .item-text{
        width: 45%;
        height: 100%;
        display: flex;
        align-items: center;

        .text{
            width: 100%;

            h6{
                margin: 0;
                margin-bottom: 10px;
                font-weight: 700;
            }
            h4{          
                font-weight: 679;
                font-size: 29px;
                padding: 0;
                margin: 0;
                margin-bottom: 20px;
                color: #363636;
                max-width: 560px;
            }
            p{
                color: #696969;
                max-width: 560px;
            }
        }
    }

`;