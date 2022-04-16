import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MouseEventHandler } from "react";
import Button from "./Button";

type ViewButtonProps = {
    visible: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function ViewButton({ visible, onClick }: ViewButtonProps) {
    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon fixedWidth icon={visible ? faEyeSlash : faEye} />
        </Button>
    );
}
