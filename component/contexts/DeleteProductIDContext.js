import React, {createContext} from 'react';
const DeleteProductIDContext= createContext();
const DeleteProductIDContextProvider=({children})=>{
    const [deleteProductID,setDeleteProductID]=React.useState("");
    return(
        <DeleteProductIDContext.Provider value={[
            deleteProductID,setDeleteProductID,
        ]}>
            {children}
        </DeleteProductIDContext.Provider>
    )
}
export{
    DeleteProductIDContext,
    DeleteProductIDContextProvider,
}