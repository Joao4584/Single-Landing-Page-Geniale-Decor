// * Modules * //
import React, { useContext, useEffect, useState } from 'react'
import LogRocket from 'logrocket';

// * Exports * //
import { PopupContext } from '../context/PopupContext';
import * as Styled from '../styles/Global';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { PopUpComponent } from './popup';
import { AcessSite } from './sections/acesseSite';
import { Modelos } from './sections/modelos';
import { AcceptTerms } from '../hooks/acceptTerms';
import { Rotas } from '../routes/pages.routes';



// * Components * //
export default function App(props) {

    LogRocket.init('6evfm2/teste-geniale-decor');
  
   
 return (
    <>
    <Styled.GlobalStyles  />
    <Rotas/>
    </>
 )
}