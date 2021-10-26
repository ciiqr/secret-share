import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components';
import toast from 'react-hot-toast';

async function copyToClipboard(value: string, message: string) {
    // TODO: cleanup code...
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        await navigator.clipboard.writeText(value);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
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
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }

    // TODO: fix so it depends on status
    toast.success(message);
}

type ShareCopyButtonProps = {
    value: string
    message?: string
}

export default function ShareCopyButton({ value, message }: ShareCopyButtonProps) {
    const msg = message || 'Copied!';

    return (
        <Button onClick={() => copyToClipboard(value, msg)}>
            <FontAwesomeIcon fixedWidth icon={faCopy} />
        </Button>
    );
}
