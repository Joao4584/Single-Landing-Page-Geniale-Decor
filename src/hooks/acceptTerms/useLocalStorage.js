import React, { useCallback, useState } from 'react';


export function useLocalStorage(key, initialValue = ''){
    

    let INIT = initialValue;

    if(INIT == ''){
        const verify = localStorage.getItem(key);
        if(verify != null || verify != undefined){
            INIT = JSON.parse(verify);
        } 
    }

    const [state, setState] = useState(
        () => {
            try {

                const storedValue = localStorage.getItem(key);
                return storedValue ? JSON.parse(storedValue) : INIT;

            } catch {
                return INIT
            }
        });

    const setValue = useCallback((value) => {
        try{
            if(value != ''){
                setState(value);
                localStorage.setItem(key, JSON.stringify(value));

            }
        } catch (error){
            console.log(error);
        }
    }, [key]);

    return [state, setValue];
 
}
