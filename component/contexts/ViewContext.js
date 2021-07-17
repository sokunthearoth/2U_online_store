import React, {createContext} from 'react';
const ViewContext= createContext();
const ViewContextProvider=({children})=>{
    const [view,setView]= React.useState([]);
    return(
        <ViewContext.Provider value={{view,setView}}>
            {children}
        </ViewContext.Provider>
    )
}
export{
    ViewContext,
    ViewContextProvider,
}