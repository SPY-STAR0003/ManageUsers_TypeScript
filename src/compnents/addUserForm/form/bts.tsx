// react
import React from "react";

// next UI Design
import { Grid, Button } from "@nextui-org/react";

const Btns : React.FC = () => {
    return (
        <Grid css={{ display : "flex", justifyContent : "center", width : "100%" }}>
            <Button shadow color="success" auto css={{ml : "2rem"}}>
                Submit User
            </Button>
            <Button shadow color="error" auto css={{ml : "2rem"}}>
                Close Form
            </Button>
        </Grid>
    )
}

export default Btns;