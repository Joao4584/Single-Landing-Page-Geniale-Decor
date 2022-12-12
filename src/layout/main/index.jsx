// * Modules * //
import React, { useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser';

// * Exports * //
import * as Styled from '../../styles/main.style';

// * Components * //
export function Main(props) {
    const [mainProp, setMainProp] = useState(<></>);

    useEffect(() => {
      switch (props.pageModel) {
        case "main":
            setMainProp(MainProps);
            break;
        case "terms":
            setMainProp(TermsProps);
            break; 

        default:
            break;
      }
    }, [])
    


    return (
        <>{mainProp}</>
    )
}


function MainProps(){
        return (
            <Styled.Container mainPresets={topHome} mainColors={defaultColors}>
            <div className='darkBackground'>
                <div className='centerModel'>
                    <Fade bottom cascade>
                    <div className='text-section'>
                        <h2>{parse(topHome.title)}</h2>
                        <p className="textMain">{parse(topHome.text)}</p>
                            <a href={topHome.button.link}>
                        <Fade bottom cascade>
                                <div className="buttonMain">{parse(topHome.button.title)}</div>

                        </Fade>
                            </a>
                    </div>

                    </Fade>

                </div>
            </div>
            <div    className='waves-back' />



        </Styled.Container>
        )
}

function TermsProps(){
    return(
        <Styled.ContainerTerms mainPresets={topHome} mainColors={defaultColors}>
        <div className='darkBackground'>
            <div className='centerModel'>
                <Fade bottom cascade>
                <div className='text-section'>
                    <h2>Termos De Uso</h2>
                  
                </div>

                </Fade>

            </div>
        </div>
        <div    className='waves-back' />



    </Styled.ContainerTerms>
  
    )
}