import React , {createContext} from 'react';

const FormContext = createContext();
const FormContextProvider = ({children}) => {
    const [form, setForm] = React.useState({})
    return (
        <FormContext.Provider value={{form, setForm}}>
            {children}
        </FormContext.Provider>
    )
}
export{
    FormContext,
    FormContextProvider,
}