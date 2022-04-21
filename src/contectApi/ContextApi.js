//context api for both functional based and class based
import { createContext, useState } from 'react'

export let AuthContext = createContext();
//create provider and set value
let AuthProvider = ({ children }) => {
    let [state, setState] = useState([
      {
        username: "manu",
        salary: 20000,
        company: "tyss",
      },
      {
        username: "shashi",
        salary: 20000,
        company: "jspider",
      },
      {
        username: "dixit",
        salary: 20000,
        company: "qspider",
        },
      
    ]);
    return <AuthContext.Provider value={state}>{ children}</AuthContext.Provider>
}

export default AuthProvider;



