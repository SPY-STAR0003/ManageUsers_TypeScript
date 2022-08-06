// react
import React from "react";

// next UI Design
import { Grid } from "@nextui-org/react";

// components
import Btns from "./bts";
import FormDropDown from "./dropdown";
import FormInputs from "./inputs";

// types
import { ContextType, UserType } from "../../../types";

// services
import { getUsersFromApi, sendUsersToApi } from "../../../services/users";

// context
import UsersContext from "../../../context";

const Form : React.FC = () => {

    const context = React.useContext<ContextType>(UsersContext)
    const [userInfo , setuserInfo] = React.useState<{}>({})

    const inputHandler = (value : string, id : string) => {

        setuserInfo((prevState : UserType) => {
            return {
                ...prevState,
                [id] : value
            }
        })
    }

    const formHandler = async (e : React.FormEvent) => {
        e.preventDefault();
        await sendUsersToApi(userInfo)
        let newUsers = await getUsersFromApi()
        context.setState((...prevState : any) => {
            return {
                ...prevState,
                users : newUsers
            }
        })
    }

    return (
        <form onSubmit={ (e) => formHandler(e) }>
            <Grid.Container gap={4} style={{alignItems : "center"}}>
                <FormInputs handler={inputHandler} />
                <FormDropDown handler={inputHandler} />
                <Btns />
            </Grid.Container>
        </form>
    )
}

export default Form;