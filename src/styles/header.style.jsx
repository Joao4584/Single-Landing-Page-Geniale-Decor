// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Container = styled.div`
    background: transparent;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    min-height: 110px;
    color: ${props =>props.mainColors.titleWhite};
    display: flex;
    align-items: center;




    .content-header{
        width: 99%;
        max-width: 1300px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
            margin-left: 10px;
            img{
                width: 230px;

            }
        }

        .section-ul{
            width: 400px;
            display: flex;
            justify-content: space-around;
            gap: 10px;
            align-items: center;

            .btn{
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                transition-duration: .5s;
                text-align: center;
                padding: 8px;
                border-radius: 8px;


                :hover{
                    transition-duration: .5s;
                    background-color: #8989897e;
                }
            }

            .btn-red{
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                transition-duration: .5s;
                text-align: center;
                padding: 10px;
                background-color: ${props => props.mainColors.mainRed};
                padding: 12px;
                border-radius: 8px;
            }
        }

    }
 
    
    
`;