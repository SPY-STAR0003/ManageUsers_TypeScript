// react
import { createContext } from "react";

// types
import { ContextType } from "../types";

const UsersContext = createContext<ContextType>({
    users : [],
    showForm : false,
    setShowForm : () => {}
})

export default UsersContext;