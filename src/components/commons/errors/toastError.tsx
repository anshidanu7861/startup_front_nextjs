import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastError = (err: string) => {
  toast.error(err);
};
