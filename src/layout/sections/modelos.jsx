// * Modules * //
import React, {  } from 'react'
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser';

// * Exports * //
import { Container } from '../../styles/modelos.style';

// * Components * //
export function Modelos(props) {

 return (
    <Container>
            <Fade bottom>
                <div>

                <div className='text-model' id="modeloID">
                        
                        <h6 className='sub-tittle'>
                        {modelSection.subTitle} 
                        </h6>
                        <h4>
                            {parse(modelSection.title)} 
                        </h4>
                        <p>
                        {parse(modelSection.text)} 
                        </p>

                </div>
                </div>
            </Fade>
            
            <div className='model-items'>
            <div className="box-item">
                <Fade bottom cascade>
                    <div className="image">
                        <div className='svg-background'></div>
                        <img src={modelSection.primeiroIMG} width="300px" alt="" />
                    </div>
                    <div className="text">
                        <h4 className="box-title">
                            {parse(modelSection.primeitoTitulo)}
                        </h4>
                        <p className="text-p">
                            {parse(modelSection.primeiroTexto)}
                        </p>
                    </div>
                </Fade>
                </div>
                <div className="box-item">
                    <Fade bottom cascade>
                        <div className="text">
                            <h4 className="box-title">
                            {parse(modelSection.segundoTitulo)}
                            </h4>
                            <p className="text-p">
                            {parse(modelSection.segundoTexto)} 
                            </p>
                        </div>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="image">
                            <div className='svg-background'></div>
                            <img src={modelSection.segundoIMG} width="350px" alt="" />
                        </div>
                    </Fade>
                </div>

                

                <div className="box-item">
                <Fade bottom cascade>
                <div className="image prateleira">
                        <div className='svg-background'></div>
                        <img src={modelSection.terceiroIMG} width="430px" alt="" />
                    </div>
                    <div className="text">
                        <h4 className="box-title">
                            {parse(modelSection.terceiroTitulo)}
                        </h4>
                        <p className="text-p">
                        {parse(modelSection.terceiroTexto)}
                        </p>
                    </div>
                </Fade>
                </div>

                <div className="box-item">
                <Fade bottom cascade>
                   
                    <div className="text">
                        <h4 className="box-title">
                        {parse(modelSection.quartoTitulo)}
                        </h4>
                        <p className="text-p">
                        {parse(modelSection.quartoTexto)}
                        </p>
                    </div>
                    <div className="image">
                        <div className='svg-background'></div>
                        <img src={modelSection.quartoIMG} width="370px" alt="" />
                    </div>
                </Fade>
                </div>
                
            </div>
    </Container>
 )
}