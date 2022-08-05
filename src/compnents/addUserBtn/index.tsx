// react
import React, { useContext } from "react";

// next design
import { Button } from "@nextui-org/react";
import { UserIcon } from "../../icons/userIcon";

// context
import UsersContext from "../../context";

const AddUserBtn : React.FC = () => {

    const context = useContext(UsersContext)

    return (
        <Button
            className="addUserBtn"
            auto
            rounded
            color="primary"
            icon={<UserIcon />}
            onPress={() => context.setShowForm()}
        />
    )
}

export default AddUserBtn;