// react
import React from "react";

// nextUI design
import {  Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "../../icons/styledBadge";
import { IconButton } from "../../icons/iconBtn";
import { EditIcon } from "../../icons/editIcon";
import { DeleteIcon } from "../../icons/deleteIcon";

const RenderCells : React.FC = (props: any, columnKey: React.Key) => {
    
    const { item : user, deleteHandler, editHandler } = props;

    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={"https://i.pravatar.cc/150?u=a042581f4e29026024d"} name={cellValue} css={{ p: 0 }}>
            {user?.email}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user?.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user?.status}>{cellValue}</StyledBadge>;
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => editHandler(user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => deleteHandler(user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  export default RenderCells;