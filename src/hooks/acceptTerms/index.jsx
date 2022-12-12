// * Modules * //
import React, { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom';
import { Component } from './style'

// * Exports * //
import { useLocalStorage } from "./useLocalStorage";
 
// * Components * //
export function AcceptTerms(props) {
   
   const [storageSource, setStorageSource] = useLocalStorage('cookie-terms1fk2_29dynamic___1');
   const [terms, setTerms] = useState(<></>);

   const acceptTermsButton = () => {
      document.getElementById('cardNavTerms').classList.add('remove-term');
      setStorageSource("confirmed")
      setInterval(() => {
         setTerms(<></>);
      }, 3000);
   }

    

   const layoutTerms = () => {
      return (
         <div className='navegate-card' id="cardNavTerms">
               <div className="text-cookie">
                  <h2>Política de Cookies</h2>
                  <p>Utilizamos cookies para melhorar a experiência. Ao navegar no site você concorda com nossa <Link to={`/termos`}><a href="#">política de privacidade</a></Link>.</p>
               </div>
               <div className="button">
                  <div className="button-accept" onClick={acceptTermsButton}>
                     Aceitar
                  </div>

               </div>
         </div>
      )
   }


   useEffect(() => {
      setTimeout(() => {
         if(storageSource != "confirmed"){
            setTerms(layoutTerms);
         }
      }, 3000);
   }, []);


 return (
    <Component>
      {terms}
    </Component>
 )
}