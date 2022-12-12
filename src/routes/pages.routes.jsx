import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'

import React, { useContext, useEffect, useState } from 'react'

import { AcessSite } from '../layout/sections/acesseSite';
import { Modelos } from '../layout/sections/modelos';
import { PopupContext } from '../context/PopupContext';
import * as Styled from '../styles/Global';
import { Footer } from '../layout/footer';
import { Header } from '../layout/header';
import { Main } from '../layout/main';
import { PopUpComponent } from '../layout/popup';
import { AcceptTerms } from '../hooks/acceptTerms';
import { TermosCookie } from '../layout/terms';

export function Rotas() {

    const routings = createBrowserRouter([
        {
            path : "/",
            element: <Home/>,
            errorElement: <Home/>
        }, 
        {
            path: "termos",
            element: <Terms/>
    
        }
    ]);


    return(<>
             <RouterProvider router={routings} />
    </>);
}

function Home(){
    const { requestPopup, setRequestPopup } = useContext(PopupContext);
    const [ popUp, setPopUp] = useState(<></>);

    useEffect(() => {
        if(requestPopup == true){
            setPopUp(<PopUpComponent />)
        }else{
            setPopUp(<></>)
        }

    }, [requestPopup]);

    return(
        <Styled.App>
            {popUp}
            <Header/>
            <Main pageModel="main"/>
            <div className='center-radius center-relative'>
                <Modelos/>
                <AcessSite />
            </div>
            <Footer />
        <AcceptTerms />
        

        </Styled.App>
    )
}
function Terms(){
    const { requestPopup, setRequestPopup } = useContext(PopupContext);
    const [ popUp, setPopUp] = useState(<></>);

    useEffect(() => {
        if(requestPopup == true){
            setPopUp(<PopUpComponent />)
        }else{
            setPopUp(<></>)
        }

    }, [requestPopup]);

    return(
        <Styled.App>
            {popUp}
            <Header/>
            <Main pageModel="terms"/>
            <div className='center-radius center-relative'>
               <TermosCookie/>
            </div>
            <Footer />
        <AcceptTerms />
        

        </Styled.App>
    )
}

// <Modelos />
// <AcessSite />
