// * Modules * //
import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade';

// * Exports * //
import { Container } from '../../styles/acessBar.style'
import { PopupContext } from '../../context/PopupContext';
 
 
// * Components * //
export function AcessSite(props) {
    const { requestPopup, setRequestPopup } = useContext(PopupContext);

 return (
    <Container>
            <div className='case'>
                <div className='black-shadow'>
                        <div className='text'>
                <Fade bottom >
                                <h4 className="title-model">
                                    {acessEcommerceSection.title}
                                </h4>
                                <p className="textModel">
                                    {acessEcommerceSection.text}
                                </p>
                </Fade>
                <Fade bottom >  
                        <a onClick={() => { setRequestPopup(true)}}>
                                    <div className='modelButton'>
                                    {acessEcommerceSection.button.text}
                                    </div>
                                </a>
                </Fade>

                        </div>

                </div>
            </div>

    </Container>
 )
}