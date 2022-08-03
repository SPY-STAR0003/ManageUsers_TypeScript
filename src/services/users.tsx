
export const getUsersFromApi = async () => {
    let res : Response = await fetch("https://628cca310432524c58e5e052.endapi.io/typeUsers")
    let data : any = await res.json()
    return data.data
}