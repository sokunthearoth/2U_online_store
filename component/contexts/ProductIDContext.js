import React, {createContext} from 'react';
const ProductIDContext= createContext();
const ProductIDContextProvider=({children})=>{
    const [productID,setProductID]=React.useState("");
    return(
        <ProductIDContext.Provider value={[
            productID,setProductID,
        ]}>
            {children}
        </ProductIDContext.Provider>
    )
}
export{
    ProductIDContext,
    ProductIDContextProvider,
}