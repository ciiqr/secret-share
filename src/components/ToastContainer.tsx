import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "styled-components";

export function ToastContainer() {
    const { toast } = useContext(ThemeContext);

    return (
        // TODO: some options I may want to set outside of the theme
        <Toaster toastOptions={toast} />
    );
}
