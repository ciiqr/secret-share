import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'components';

export default function ShareCopyButton({ value }: { value: string }) {
    return (
        <Button onClick={() => navigator.clipboard.writeText(value)}>
            <FontAwesomeIcon fixedWidth icon={faCopy} />
        </Button>
    );
}
