// nextUI design
import { Table } from "@nextui-org/react";

// components
import RenderCells from "./renderCells";

// schemas
import { columns } from "../../schemas/table";

// types
import { UserType } from "../../types";

interface PropsType {
    users : UserType[];
}

const UsersTable : React.FC<PropsType> = ({users}) => {
    return (
        <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item: UserType) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{RenderCells(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    )
}

export default UsersTable;