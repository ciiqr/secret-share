import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

type SendButtonProps = {
    onClick: (e: object) => void;
    disabled?: boolean;
};

export default function SendButton({ onClick, disabled }: SendButtonProps) {
    return (
        <Button disabled={disabled} onClick={onClick}>
            <FontAwesomeIcon fixedWidth icon={faPaperPlane} />
        </Button>
    );
}
