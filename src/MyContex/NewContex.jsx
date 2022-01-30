import React, { useState } from 'react';

export const newContex = React.createContext();


function StateFunction(props){
    const[firstName,setFirstName] = useState({});
    return(
        <newContex.Provider value={{firstName,setFirstName}}>
            {props.children}
        </newContex.Provider>
    )
}

export default StateFunction;

//adding a component that return a contex and the value that i provie in the
//contex is  a *useState* (hook) and display it in another component.
//in the end what i did is a variable that given to several components,
//and change the value of the variables from one place (at all component),
//at once
// 