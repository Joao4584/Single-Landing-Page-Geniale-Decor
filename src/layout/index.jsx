// * Modules * //
import React, {  } from 'react'

// * Exports * //
import * as Styled from '../styles/Global';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { AcessSite } from './sections/acesseSite';
import { Modelos } from './sections/modelos';
import { SobreNos } from './sections/sobreNos';
 
// * Components * //
export default function App(props) {

 return (
    <>
    <Styled.GlobalStyles  />
    <Styled.App>
        <Header/>
        <Main/>
        <div className='center-radius center-relative'>
            <SobreNos />
            <Modelos />
            <AcessSite />

        </div>
    
            <Footer />
    

    </Styled.App>
    </>
 )
}