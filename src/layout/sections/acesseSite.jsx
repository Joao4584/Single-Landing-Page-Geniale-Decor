// * Modules * //
import React, {  } from 'react'

// * Exports * //
import { Container } from '../../styles/acessBar.style'
 
 
// * Components * //
export function AcessSite(props) {

 return (
    <Container>
        <div className='case'>
            <div className='text'>
                    <h4 className="title-model">
                        {acessEcommerceSection.title}
                    </h4>
                    <p className="textModel">
                        {acessEcommerceSection.text}
                    </p>
                    <a href={acessEcommerceSection.button.link}>
                        <div className='modelButton'>
                        {acessEcommerceSection.button.text}
                        </div>
                    </a>

            </div>
        </div>
    </Container>
 )
}