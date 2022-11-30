// * Modules * //
import React, {  } from 'react'
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// * Exports * //
import { Container } from '../../styles/modelos.style'

 
// * Components * //
export function Modelos(props) {

 return (
    <Container>
            <Fade bottom cascade>
                <div className='text-model'>
                        
                        <h6 className='sub-tittle'>
                        {secondSection.subTitle} 
                        </h6>
                        <h4>
                            {parse(secondSection.title)} 
                        </h4>
                        <p>
                        {parse(secondSection.text)} 
                        </p>

                </div>
            </Fade>
            <div className='model-items'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
    </Container>
 )
}