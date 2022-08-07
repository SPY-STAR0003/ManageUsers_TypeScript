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
import { editUserOnApi, getUsersFromApi, sendUsersToApi } from "../../../services/users";

// context
import UsersContext from "../../../context";

const Form : React.FC = () => {

    const context = React.useContext<ContextType>(UsersContext)
    const [userInfo , setuserInfo] = React.useState<UserType>({
        name: "", role: "", team: "", status: "", age: "", email: ""
    })

    const inputHandler = (value : string, id : string) => {

        setuserInfo((prevState : UserType) => {
            return {
                ...prevState,
                [id] : value
            }
        })
    }

    const submitForm = async (e : React.FormEvent) => {
        e.preventDefault();

        context.editForm
        ?   await editUserOnApi(userInfo)
        :   await sendUsersToApi(userInfo)

        let newUsers = await getUsersFromApi()
        context.setState((...prevState : any) => {
            return {
                ...prevState,
                users : newUsers
            }
        })
    }

    return (
        <form onSubmit={ (e) => submitForm(e) }>
            <Grid.Container gap={4} css={{alignItems : "center"}}>
                <FormInputs handler={inputHandler} user={userInfo} setUser={setuserInfo} />
                <FormDropDown handler={inputHandler} />
                <Btns />
            </Grid.Container>
        </form>
    )
}

export default Form;