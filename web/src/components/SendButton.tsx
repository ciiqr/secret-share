import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

type SendButtonProps = {
    onClick: (e: object) => void
};

const SendButton = ({ onClick }: SendButtonProps) => (
    <Button onClick={onClick}>
        <FontAwesomeIcon fixedWidth icon={faPaperPlane } />
    </Button>
);

export default SendButton;
