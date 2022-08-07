import { Dispatch, SetStateAction } from "react";

export type UserType = {
    id?: string | number,
    name?: string,
    email?: string,
    role?: string,
    team?: string,
    status?: "active" | "paused" | "vacation",
    age?: string,
    avatar?: string,
};

export interface ContextType {
    users : UserType[],
    showForm : boolean,
    editForm : boolean,
    editingUser ?: UserType,
    setState : Dispatch<SetStateAction<StateType>>
    setShowForm : () => void,
}

export interface StateType {
    users : UserType[]
    showForm : boolean
    editForm : boolean
}
  