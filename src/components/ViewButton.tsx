import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

type ViewButtonProps = {
    visible: boolean;
    onClick: (a: object) => void;
};

export default function ViewButton({ visible, onClick }: ViewButtonProps) {
    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon fixedWidth icon={visible ? faEyeSlash : faEye} />
        </Button>
    );
}
