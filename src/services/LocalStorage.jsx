import React from 'react'

const setData = (objName, objValue) => {
    window.localStorage.setItem(objName + '=' + objValue + ';')    
}

const getData = (objName) =>{
    const name = objName + '='
    const userJSON = decodeURIComponent(window.localStorage.getItem(objName));
    let ca = userJSON.split(';');
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export default setLocalStorage;