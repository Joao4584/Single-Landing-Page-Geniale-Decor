// * Modules * //
import React, { } from 'react'
import { Container } from '../../styles/footer.style'
import parse from 'html-react-parser';
import { CiMail } from 'react-icons/ci'

import Media from 'react-media';

import { FaInstagram, FaFacebookF } from 'react-icons/fa'
// * Exports * //


// * Components * //
export function Footer(props) {

    return (
        <Container>
            <div className='banner-image'>

                <div className="class-grid">
                    <div className="sobre-model">
                        <h3>Sobre nós</h3>
                        <p>
                            {parse(footerLayout.textSobre)}                            
                        </p>
                    </div>
                 
                    <div className="contacts">
                                    <div className="model-case">
                                        <div className="icon"><CiMail /></div>
                                        <div className="text">

                                            <p>{footerLayout.mail}</p>
                                        </div>
                                    </div>
                                    <a href="https://www.instagram.com/genialedecor/">
                                        <div className="model-case">
                                            <div className="icon"><FaInstagram /></div>
                                            <div className="text">
                                                <p>@genialedecor</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://pt-br.facebook.com/genialedecor/">
                                        <div className="model-case">
                                            <div className="icon"><FaFacebookF /></div>
                                            <div className="text">
                                                <p>@Geniale Decor</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                </div>
            <div className='colums-footer'>
                <span className="direitos">
                {footerLayout.barPrivacy}
                </span>
            </div>
            </div>



        </Container>
    )
}