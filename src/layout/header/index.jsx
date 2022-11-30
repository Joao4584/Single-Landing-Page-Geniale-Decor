// * Modules * //
import React, {  } from 'react'

// * Exports * //
import * as Styled from '../../styles/header.style'
 

// * Components * //
export function Header(props) {
   let buttonsArray = header.buttons

 return (
    <Styled.Container mainHeader={header} mainColors={defaultColors} >
      <div className='content-header center-relative'>
         <div className='logo'>
               <img src={header.logo} />
         </div>
         <ul className="section-ul">
            {buttonsArray.map(button => 
                  <a href={button.link}>
                     <li className="btn">{button.name}</li>
                  </a>
                  )}
   
            <a href={header.market.link}><li className="btn-red">{header.market.title}
            
            </li></a>
         </ul>
      </div>
    </Styled.Container>
 )
}