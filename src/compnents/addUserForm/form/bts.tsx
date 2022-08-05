// react
import React, { useContext } from "react";

// next UI Design
import { Grid, Button } from "@nextui-org/react";

// components
import UsersContext from "../../../context"

const Btns : React.FC = () => {

    const context = useContext(UsersContext)

    return (
        <Grid css={{ display : "flex", justifyContent : "center", width : "100%" }}>
            <Button shadow color="success" auto css={{ml : "2rem"}}>
                Submit User
            </Button>
            <Button shadow color="error" auto css={{ml : "2rem"}} onPress={() => context.setShowForm()}>
                Close Form
            </Button>
        </Grid>
    )
}

export default Btns;