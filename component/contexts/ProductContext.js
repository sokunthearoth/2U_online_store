import React, {createContext} from 'react';
const ProductContext= createContext();
const ProductContextProvider=({children})=>{
    const [cart,setcart]= React.useState([]);
    return(
        <ProductContext.Provider value={{cart,setcart}}>
            {children}
        </ProductContext.Provider>
    )
}
export{
    ProductContext,
    ProductContextProvider,
}