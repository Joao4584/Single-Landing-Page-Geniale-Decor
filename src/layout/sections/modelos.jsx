// * Modules * //
import React, {  } from 'react'
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser';

// * Exports * //
import { Container } from '../../styles/modelos.style';
import multifoto from '../../assets/multiFotos.png';
import PortaRetratos from '../../assets/pr.png'; 
import luminariaImagem from '../../assets/gdr.png';
import prateleira from '../../assets/prateleira.png';

// * Components * //
export function Modelos(props) {

 return (
    <Container>
            <Fade bottom>
                <div>

                <div className='text-model' id="modeloID">
                        
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
                </div>
            </Fade>
            
            <div className='model-items'>
            <div className="box-item">
                <Fade bottom cascade>
                    <div className="image">
                        <div className='svg-background'></div>
                        <img src={PortaRetratos} width="300px" alt="" />
                    </div>
                    <div className="text">
                        <h4 className="box-title">
                            Linha Porta Retratos
                        </h4>
                        <p className="text-p">
                            Mais que uma lembrança, nunca se esqueça de seus melhores momentos com a linha multifotos. <br/> Crie e decore sua emoção em um super quadro.
                        </p>
                    </div>
                </Fade>
                </div>
                <div className="box-item">
                    <Fade bottom cascade>
                        <div className="text">
                            <h4 className="box-title">
                                Linha Multifotos
                            </h4>
                            <p className="text-p">
                                Mais que uma lembrança, nunca se esqueça de seus melhores momentos com a linha multifotos. <br/> Crie e decore sua emoção em um super quadro.
                            </p>
                        </div>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="image">
                            <div className='svg-background'></div>
                            <img src={multifoto} width="350px" alt="" />
                        </div>
                    </Fade>
                </div>

                

                <div className="box-item">
                <Fade bottom cascade>
                <div className="image prateleira">
                        <div className='svg-background'></div>
                        <img src={prateleira} width="430px" alt="" />
                    </div>
                    <div className="text">
                        <h4 className="box-title">
                        Linha Prateleira
                        </h4>
                        <p className="text-p">
                            Mais que uma lembrança, nunca se esqueça de seus melhores momentos com a linha multifotos. <br/> Crie e decore sua emoção em um super quadro.
                        </p>
                    </div>
                </Fade>
                </div>

                <div className="box-item">
                <Fade bottom cascade>
                   
                    <div className="text">
                        <h4 className="box-title">
                        Linha Luminária
                        </h4>
                        <p className="text-p">
                            Mais que uma lembrança, nunca se esqueça de seus melhores momentos com a linha multifotos. <br/> Crie e decore sua emoção em um super quadro.
                        </p>
                    </div>
                    <div className="image">
                        <div className='svg-background'></div>
                        <img src={luminariaImagem} width="370px" alt="" />
                    </div>
                </Fade>
                </div>
                
            </div>
    </Container>
 )
}