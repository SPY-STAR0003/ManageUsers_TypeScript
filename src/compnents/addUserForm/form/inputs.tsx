// react
import React from "react";

// next UI Design
import { Input, Grid } from "@nextui-org/react";

const FormInputs : React.FC = () => {

    const inputsLabel = [
        "name","role","team","age","email"
    ]

    return (
        <>
            {
                inputsLabel.map((item : string) => (
                    <Grid key={item}>
                        <Input 
                            labelPlaceholder={item}
                            color="secondary" 
                        />
                    </Grid>
                ))
            }
        </>
    )
}

export default FormInputs;