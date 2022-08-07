// react
import { useEffect, useState, lazy, Suspense, FC } from "react";

// types
import { StateType } from "./../types";

// services
import { getUsersFromApi } from "../services/users";

// components
import UsersTable from "./usersTable";
import UsersContext from "../context";
import AddUserBtn from "./addUserBtn";

// lazyLoad
const Form = lazy(() => import("./addUserForm"))

const App : FC = () => {

  const [ state , setState ] = useState<StateType>({
    showForm: false,
    editForm : false,
    users : []
  })

  const setShowForm = () : void => {
    setState((prevState : StateType) => {
      return {
        ...prevState,
        showForm : !prevState.showForm
      }
    })
  }

  // ! get UsersData from API
  const getData = async () => {
    let newUsers  = await getUsersFromApi();
    setState((prevState : StateType) => {
      return {
        ...prevState,
        users : newUsers
      }
    })
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <UsersContext.Provider value={{...state , setState, setShowForm}}>
      <UsersTable />
      <Suspense>
        {
          state.showForm && <Form />
        }
      </Suspense>
      <AddUserBtn />
    </UsersContext.Provider>
  );
}


export default App;