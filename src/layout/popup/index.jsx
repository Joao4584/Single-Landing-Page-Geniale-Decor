// * Modules * //
import React, { useContext, useRef, useState  } from 'react'
import {BiX} from 'react-icons/bi'
import { Toast } from 'primereact/toast';
import { Input } from 'antd';
const { Search } = Input;
import Countdown from 'react-countdown';

// * Exports * //
import { Container } from '../../styles/popup.style'
import { PopupContext } from '../../context/PopupContext';
import svgModel from '../../assets/9936433.svg'
import { ApiRequest } from '../../api';
import Clock from '../../hooks/clockTimer/clock';
import { useEffect } from 'react';

// * Components * //
export function PopUpComponent(props) {
    const { requestPopup, setRequestPopup } = useContext(PopupContext);
    const toast = useRef(null);
    // ? Mail Component
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Email Enviado', detail:'Email Enviado Com Sucesso!', life: 3000});
    }
    function execMail(email){
       if(email.length > 5){
        showSuccess()
        setTimeout(() => {
            setRequestPopup(false);
        }, 2000);
           ApiRequest.get('/mail', {
               params: {
                   email: email
               }
           }) .then((res) => {
             
           }).catch((error) => { console.log('Whoops! Houve um erro.', error.message || error); })

       }else{
        toast.current.show({severity: 'error', summary: 'Não Foi Possivel Enviar', detail: 'Email não tem o numero de caracteres suficiente, tente novamente!'});


       }
    }
    // ? Timer Component
    var deadline = dateTimer;
    
    
    
 return (
    <Container>
        <Toast ref={toast} />
        <div className="box">
            <div className="content">
               
                <div className="text">
            <div className="exitModel" onClick={setRequestPopup}><BiX/></div>
           
                    <div className="content-text">
                    <h3 className=''>Lançamento da loja </h3>
                        <h3><Clock id="clock-timer" deadline={deadline} /></h3>
                        <h4>Deixe seu email para te avisarmos sobre o lançamento! </h4>
                       <div className="button">
                        <Search placeholder="Coloque seu E-mail" enterButton="Enviar" size="large" onSearch={(e) => {execMail(e)  }} />
                        

                    </div>
                    
                        </div>
                </div>

                <div className="content-image">
                    <img crossorigin src={svgModel} alt="" />
                </div>
            </div>
        </div>
    </Container>
 )
}
