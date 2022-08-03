// react
import React from "react";

// next UI Design
import { Dropdown } from "@nextui-org/react";

const FormDropDown : React.FC = () => {

    const [selected, setSelected] = React.useState<Set<string>>(new Set(["Choose User status"]));

    const selectedValue : string = React.useMemo<string>(
      () => Array.from(selected).join(", ").replaceAll("_", " "),
      [selected]
    );

    return (
        <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize", ml: "$9", mr : "$9"}}>
                {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
            >
                <Dropdown.Item key="active">active</Dropdown.Item>
                <Dropdown.Item key="paused">paused</Dropdown.Item>
                <Dropdown.Item key="vacation">vacation</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default FormDropDown;