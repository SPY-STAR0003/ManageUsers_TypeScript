// react
import React from "react";

// next UI Design
import { Dropdown } from "@nextui-org/react";

interface PropsType {
    handler : (value : string, id : string) => void
}

const FormDropDown : React.FC<PropsType> = ({handler}) => {

    const [selected, setSelected] = React.useState<string>("Choose User status");

    const dropdownHandler = (e : any) => {
        setSelected(e.currentKey)
        handler(e.currentKey , "status")
    }

    return (
        <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize", ml: "$9", mr : "$9"}}>
                {selected}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={(e : any) => dropdownHandler(e)}
            >
                <Dropdown.Item key="active">active</Dropdown.Item>
                <Dropdown.Item key="paused">paused</Dropdown.Item>
                <Dropdown.Item key="vacation">vacation</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FormDropDown;