import { ToastContainer } from "react-toastify";
import { Toaster } from "./styles";

export const Toast: React.FC = () => {
  return (
    <Toaster>
      <ToastContainer />
    </Toaster>
  );
};
