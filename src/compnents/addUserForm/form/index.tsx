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
    const [userInfo , setuserInfo] = React.useState<UserType>({})

    const inputHandler = (value : string, id : string) => {

        setuserInfo((prevState : UserType) => {
            return {
                ...prevState,
                [id] : value
            }
        })
    }

    const formHandler = async () => {
        await sendUsersToApi(userInfo)
        let newUsers = await getUsersFromApi()
        context.setState((...prevState : any) => {
            return {
                ...prevState,
                users : newUsers
            }
        })
    }

    const editFormHandler = async () => {
        await editUserOnApi(userInfo)
        let newUsers = await getUsersFromApi()
        console.log(newUsers)
        context.setState((...prevState : any) => {
            return {
                ...prevState,
                users : newUsers
            }
        })
    }

    const submitForm = (e : React.FormEvent) => {

        e.preventDefault();

        context.editForm
        ?   editFormHandler()
        :   formHandler()
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