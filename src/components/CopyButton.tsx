import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import rntoast from "react-hot-toast";
import { Button } from "components";

async function copyToClipboard(value: string, message: string) {
    // TODO: cleanup code...
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        await navigator.clipboard.writeText(value);
    } else {
        // text area method
        const textArea = document.createElement("textarea");
        textArea.value = value;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        await new Promise<void>((res, rej) => {
            // here the magic happens
            if (document.execCommand("copy")) {
                res();
            } else {
                rej(new Error("copyToClipboard exec copy failed"));
            }
            textArea.remove();
        });
    }

    // TODO: fix so it depends on status
    rntoast.success(message);
}

interface CopyButtonProps {
    value: string;
    message?: string;
}

export default function CopyButton({ value, message }: CopyButtonProps) {
    const msg = (message ?? "") || "Copied!";

    const onClickCopyToClipboard = useCallback(() => {
        void copyToClipboard(value, msg);
    }, [msg, value]);

    return (
        <Button onClick={onClickCopyToClipboard}>
            <FontAwesomeIcon fixedWidth icon={faCopy} />
        </Button>
    );
}
