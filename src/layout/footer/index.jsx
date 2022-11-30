// * Modules * //
import React, {  } from 'react'
import { Container } from '../../styles/footer.style'
import parse from 'html-react-parser';
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

// * Exports * //
 
 
// * Components * //
export function Footer(props) {

 return (
    <Container>
        <div className="waves-model"></div>
        <div className="class-content">
            <div className="mod-div">
                <div className="imagem">
                <img src={footerDefault.logo} alt="" className="logo" />
                <hr width="200"></hr>  
                </div>
                          
                <ul className="icons-rede">
                    <a href="http://"><li className="icon"><BsInstagram/></li></a>
                    <a href="http://"><li className="icon"><FaFacebookSquare/> </li></a>
                    
                </ul>
            </div>
            <div className="mod-div">
            <p>{parse(footerDefault.text)}</p>
            <div className='email-model'>
                <div className="icon-mail">
                    <BiMailSend />
                </div>
                <p className="text-mail">atendimento@genialedecor.com.br</p>
            </div>
            </div>
            
        </div>
   

    </Container>
 )
}