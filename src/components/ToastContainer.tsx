import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "styled-components";

export default function ToastContainer() {
    const theme = useContext(ThemeContext);

    return (
        // TODO: some options I may want to set outside of the theme
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <Toaster toastOptions={theme.toast} />
    )
}
