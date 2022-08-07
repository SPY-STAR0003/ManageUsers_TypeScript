import { toast } from "react-toastify"
import { UserType } from "../types";

export const getUsersFromApi = async () => {
    let res : Response = await fetch("https://628cca310432524c58e5e052.endapi.io/typeUsers")
    let data : any = await res.json()
    return data.data
}

export const sendUsersToApi = async (data : {}) => {
    await fetch("https://628cca310432524c58e5e052.endapi.io/typeUsers" , {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(data)
    }).catch(err => {
        toast('Have an internet Connection ?', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }).then(mess => {
        toast('New User added to list !', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
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
        toast('Have an internet Connection ?', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }).then(mess => {
        toast(`We edited ${user.name} successfuly !!!`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    })

}

export const getOneUserFromApi = async (id : number) => {
    let res : Response = await fetch(`https://628cca310432524c58e5e052.endapi.io/typeUsers/${id}`);
    let data = await res.json();
    return data.data
}