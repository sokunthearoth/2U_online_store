import React, {createContext} from 'react';
const UpdateShowContext= createContext();
const UpdateShowContextProvider=({children})=>{
    const [show,setShow]=React.useState("");
    return(
        <UpdateShowContext.Provider value={[
            show,setShow,
        ]}>
            {children}
        </UpdateShowContext.Provider>
    )
}
export{
    UpdateShowContext,
    UpdateShowContextProvider,
}