// react
import React from "react";

// next UI Design
import { Text } from "@nextui-org/react";

const Header : React.FC= () => {
    return (
        <header>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    textAlign : "center"
                }}
                weight="bold"
            >
                Add Users Form
            </Text>
        </header>
    )
}

export default Header;