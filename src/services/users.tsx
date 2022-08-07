// types
import { UserType } from "../types";

// modules
import ToastMassage from "../modules/toast";

export const getUsersFromApi = async () => {
    let res : Response = await fetch("https://628cca310432524c58e5e052.endapi.io/typeUsers")
    let data : any = await res.json()
    return data.data
}

export const sendUsersToApi = async (data : UserType) => {
    await fetch("https://628cca310432524c58e5e052.endapi.io/typeUsers" , {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(data)
    }).catch(err => {
        ToastMassage("Are you sure you have a good internet connection ?")
    }).then(mess => {
        ToastMassage(`${data.name} added to list successfuly !`)
    })
}

export const deleteUserFromApi = async (id : number) => {
    let res : Response = await fetch(`https://628cca310432524c58e5e052.endapi.io/typeUsers/${id}`, {
        method: "DELETE",
    })
    let data : any = await res.json()
    return data.data
}

export const editUserOnApi = async (user : UserType) => {
    await fetch(`https://628cca310432524c58e5e052.endapi.io/typeUsers/${user.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).catch(err => {
        ToastMassage("Are you sure you have a good internet connection ?")
    }).then(mess => {
        ToastMassage(`${user.name} edited successfuly !`)
    })

}

export const getOneUserFromApi = async (id : number) => {
    let res : Response = await fetch(`https://628cca310432524c58e5e052.endapi.io/typeUsers/${id}`);
    let data = await res.json();
    return data.data
}