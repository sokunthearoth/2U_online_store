import React, {createContext} from 'react';
const DeleteShowContext= createContext();
const DeleteShowContextProvider=({children})=>{
    const [deleteShow,setDeleteShow]=React.useState(false);
    return(
        <DeleteShowContext.Provider value={[
            deleteShow,setDeleteShow,
        ]}>
            {children}
        </DeleteShowContext.Provider>
    )
}
export{
    DeleteShowContext,
    DeleteShowContextProvider,
}