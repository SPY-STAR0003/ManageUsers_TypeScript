// react
import React from "react";

// next UI Design
import { Grid } from "@nextui-org/react";

// components
import Btns from "./bts";
import FormDropDown from "./dropdown";
import FormInputs from "./inputs";

const Form : React.FC = () => {
    return (
        <form>
            <Grid.Container gap={4} style={{alignItems : "center"}}>
                <FormInputs />
                <FormDropDown />
                <Btns />
            </Grid.Container>
        </form>
    )
}

export default Form;