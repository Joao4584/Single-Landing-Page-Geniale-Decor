// * Modules * //
import React, { useContext } from 'react'
import { PopupContext } from '../../context/PopupContext';

// * Exports * //
import * as Styled from '../../styles/header.style'
 

// * Components * //
export function Header(props) {
   let buttonsArray = header.buttons
   const { requestPopup, setRequestPopup } = useContext(PopupContext);

   
 return (
    <Styled.Container mainHeader={header} mainColors={defaultColors} >
      <div className='content-header center-relative'>
         <div className='logo'>
               <img crossorigin src={header.logo} />
         </div>
         <ul className="section-ul">
            {buttonsArray.map(button => 
                  <a href={button.link}>
                     <li className="btn">{button.name}</li>
                  </a>
                  )}
   
            <a onClick={() => { setRequestPopup(true)}} ><li className="btn-red">{header.market.title}
            
            </li></a>
         </ul>
      </div>
    </Styled.Container>
 )
}