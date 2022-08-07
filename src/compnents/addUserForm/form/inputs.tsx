// react
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";

// next UI Design
import { Input, Grid } from "@nextui-org/react";

// context
import { ContextType, UserType } from "../../../types";
import UsersContext from "../../../context";

interface PropsType {
    handler : (value : string, id : string) => void;
    user : UserType,
    setUser : Dispatch<SetStateAction<UserType>>
}

const FormInputs : React.FC<PropsType> = ({handler, user, setUser}) => {

    const context = useContext<ContextType>(UsersContext)

    useEffect(() => {
        setUser({...context?.editingUser})
    }, [context?.editingUser, setUser])

    const inputsValue = [
        { name : "name", initialValue : user?.name},
        { name : "role", initialValue : user?.role},
        { name : "team", initialValue : user?.team},
        { name : "age", initialValue : user?.age},
        { name : "email", initialValue : user?.email},
    ]

    return (
        <>
            {
                
                inputsValue.map((item : { name: string; initialValue: string | undefined; }) => (
                    <Grid key={item.name}>
                        <Input
                            id={item.name} 
                            labelPlaceholder={item.name}
                            color="secondary"
                            onChange={e => handler(e.target.value, e.target.id)}
                            value={item?.initialValue}
                        />
                    </Grid>
                ))
            }
        </>
    )
}

export default FormInputs;