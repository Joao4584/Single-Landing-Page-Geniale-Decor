// * Modules * //
import React, {  } from 'react'
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser'

// * Exports * //
import { Container } from '../../styles/sobreNos.style'
import bannerImg from '../../assets/logo.png'
 
// * Components * //
export function SobreNos(props) {

 return (
    <Container>
        <div className='item-img'>
        <Fade bottom cascade>
                <img src={bannerImg} />
        </Fade>
        </div>

       <div className='item-text'>
            <Fade bottom cascade>
            <div className='text'>
                <h6 className='sub-tittle'>
                   {firstSection.subTitle} 
                </h6>
                <h4>
                    {parse(firstSection.title)} 
                </h4>
                <p>
                {parse(firstSection.text)} 
                </p>

            </div>
            </Fade>
       </div>
    </Container>
 )
}