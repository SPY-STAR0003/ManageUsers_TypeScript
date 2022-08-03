// react
import React, { useEffect, useState } from "react";

// types
import { UserType } from "./../types";

// services
import { getUsersFromApi } from "../services/users";

// components
import UsersTable from "./usersTable";
import Form from "./addUserForm";

const App : React.FC = () => {

  const [ users , setUsers ] = useState<UserType[]>([])

  // ! get UsersData from API
  const getData = async () => {
    setUsers(await getUsersFromApi())
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <UsersTable users={users} />
      <Form />
    </>
  );
}


export default App;