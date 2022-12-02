// * Modules * //
import React, { useContext } from 'react'
import {BiX} from 'react-icons/bi'
import { Input } from 'antd';
const { Search } = Input;


// * Exports * //
import { Container } from '../../styles/popup.style'
import { PopupContext } from '../../context/PopupContext';
import svgModel from '../../assets/9936433.svg'
 
 
// * Components * //
export function PopUpComponent(props) {
    const { requestPopup, setRequestPopup } = useContext(PopupContext);

 return (
    <Container>
        <div className="box">
            <div className="content">
               
                <div className="text">
            <div className="exitModel" onClick={setRequestPopup}><BiX/></div>
                    <div className="content-text">

                        <h4>Site ainda em construção, se inscreva para receber as novidades</h4>
                        <div className="button">
                        <Search placeholder="Coloque seu E-mail" enterButton="Enviar" size="large" onSearch={(e) => { alert(e)}} />


                    </div>
                        </div>
                </div>

                <div className="content-image">
                    <img src={svgModel} alt="" />
                </div>
            </div>
        </div>
    </Container>
 )
}