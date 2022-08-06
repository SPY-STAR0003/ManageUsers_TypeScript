import { toast } from "react-toastify"

export const getUsersFromApi = async () => {
    let res : Response = await fetch("https://628cca310432524c58e5e052.endapi.io/typeUsers")
    if(res.ok) {
        toast('Your List has updated !', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    } else {
        toast("I Failed ! I couldn't update the list !", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }
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
