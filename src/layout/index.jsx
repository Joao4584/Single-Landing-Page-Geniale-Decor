// * Modules * //
import React, { useContext, useEffect, useState } from 'react'

// * Exports * //
import { PopupContext } from '../context/PopupContext';
import * as Styled from '../styles/Global';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { PopUpComponent } from './popup';
import { AcessSite } from './sections/acesseSite';
import { Modelos } from './sections/modelos';
 
// * Components * //
export default function App(props) {
    const { requestPopup, setRequestPopup } = useContext(PopupContext);
    const [ popUp, setPopUp] = useState(<></>);
  
    useEffect(() => {
        if(requestPopup == true){
            setPopUp(<PopUpComponent />)
        }else{
            setPopUp(<></>)
        }

    }, [requestPopup]);
 return (
    <>
    <Styled.GlobalStyles  />
    <Styled.App>
        {popUp}
        <Header/>
        <Main/>
        <div className='center-radius center-relative'>
    
            <Modelos />
            <AcessSite />

        </div>
    
            <Footer />
    

    </Styled.App>
    </>
 )
}