import React, {createContext} from 'react';
const SearchContext= createContext();
const SearchContextProvider=({children})=>{
    const [search,setsearch]= React.useState("");
    return(
        <SearchContext.Provider value={{search,setsearch}}>
            {children}
        </SearchContext.Provider>
    )
}
export{
    SearchContext,
    SearchContextProvider,
}