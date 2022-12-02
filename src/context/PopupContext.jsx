// * Modules * //
import React, { createContext, useEffect, useState, useRef, useReducer } from "react";

// * Exports * //
 

const PopupContext = createContext();
 
// * Components * //
function PopupProvider({ children }) {

    const [requestPopup, setRequestPopup] = useState(false);

 const exports = {
    requestPopup, setRequestPopup
 }
 return (
    <PopupContext.Provider value={exports}>
        {children}
    </PopupContext.Provider>
 )
}

export { PopupContext, PopupProvider }