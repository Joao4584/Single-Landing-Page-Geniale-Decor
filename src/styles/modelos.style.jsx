// * Modules * //
import styled, { css } from 'styled-components'; 


// * Styles * //
export const Container = styled.div`
    margin-top: 95px;




    .text-model{
            width: 600px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
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
            }
            p{
                color: #696969;
            }
        }

        .model-items{
            width: 100%;
            height: 500px;
        }
        .swiper {
        width: 100%;
        height: 100%;
        }

        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        }

        .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        }

        .swiper {
        margin-left: auto;
        margin-right: auto;
        }


`;