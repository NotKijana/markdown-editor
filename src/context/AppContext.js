import { createContext } from "react";

// States will be shared via this context across all files that 'useContext'
const AppContext = createContext('');

export default AppContext;