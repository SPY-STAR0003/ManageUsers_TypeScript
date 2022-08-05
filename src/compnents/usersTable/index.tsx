// react
import { useContext } from "react";

// nextUI design
import { Table } from "@nextui-org/react";

// components
import RenderCells from "./renderCells";
import UsersContext from "../../context"; // context

// schemas
import { columns } from "../../schemas/table";

// types
import { UserType, ContextType } from "../../types";

const UsersTable : React.FC = () => {

    const context = useContext<ContextType>(UsersContext)

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
        <Table.Body items={context.users}>
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