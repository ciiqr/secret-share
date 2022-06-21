import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MouseEventHandler } from "react";
import Button from "./Button";

interface SendButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export default function SendButton({ onClick, disabled }: SendButtonProps) {
    return (
        <Button disabled={disabled} onClick={onClick}>
            <FontAwesomeIcon fixedWidth icon={faPaperPlane} />
        </Button>
    );
}
