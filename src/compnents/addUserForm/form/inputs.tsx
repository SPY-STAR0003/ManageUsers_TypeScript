// react
import React from "react";

// next UI Design
import { Input, Grid } from "@nextui-org/react";

interface PropsType {
    handler : (value : string, id : string) => void
}

const FormInputs : React.FC<PropsType> = ({handler}) => {

    const inputsLabel = [
        "name","role","team","age","email"
    ]

    return (
        <>
            {
                
                inputsLabel.map((item : string) => (
                    <Grid key={item}>
                        <Input
                            id={item} 
                            labelPlaceholder={item}
                            color="secondary"
                            onChange={e => handler(e.target.value, e.target.id)}
                        />
                    </Grid>
                ))
            }
        </>
    )
}

export default FormInputs;