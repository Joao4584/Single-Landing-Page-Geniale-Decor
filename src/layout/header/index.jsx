// * Modules * //
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
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
      <Link to={`/`}>
         
         <div className='logo'>
               <img crossorigin src={header.logo} />
         </div>

      </Link>
         <ul className="section-ul">
            {buttonsArray.map(button => 
                  <a href={button.link}>
                     <li className="btn">{button.name}</li>
                  </a>
                  )}
   
            <a href="https://loja.genialedecor.com.br"><li className="btn-red">{header.market.title}
            
            </li></a>
         </ul>
      </div>
    </Styled.Container>
 )
}