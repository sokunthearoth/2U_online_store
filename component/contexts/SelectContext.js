import React, {createContext} from 'react';
const SelectContext= createContext();
const SelectContextProvider=({children})=>{
    const [select,setselect]= React.useState('men_shirt');
    return(
        <SelectContext.Provider value={{select,setselect}}>
            {children}
        </SelectContext.Provider>
    )
}
export{
    SelectContext,
    SelectContextProvider,
}