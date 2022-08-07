import { toast } from "react-toastify";

class Toast {
    public static toastMessage(message : string) {
        toast(message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }
}

export default Toast.toastMessage;