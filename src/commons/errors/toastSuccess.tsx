import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccess = (msg: string) => {
  toast.success(msg);
};
