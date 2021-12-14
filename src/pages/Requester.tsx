import {
    QrCode,
    CopyableField,
    SecretInput,
    Layout,
    Content,
} from 'components';
import UrlHelper from 'helpers/Url';
import { useState, useEffect } from 'react';
import Bugout from 'bugout';
import toast from 'react-hot-toast';

// TODO: cleanup
type OnSecretReceived = (secret: string) => boolean;
function useBugoutServer({
    onSecretReceived,
}: {
    onSecretReceived: OnSecretReceived;
}) {
    // const [ready, setReady] = useState(false);
    const [bugout] = useState<Bugout>(
        () =>
            new Bugout({
                announce: [
                    'wss://tracker.openwebtorrent.com',
                    'wss://tracker.btorrent.xyz',
                ],
            }),
    );

    const address = bugout.address();

    useEffect(() => {
        // register rpc calls clients can use
        bugout.register('shareSecret', (address, args, cb) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { secret } = args;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const success = onSecretReceived(secret);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            cb({ success });
        });

        // TODO: connections are weird, probs just not worth relying on for this
        // handle events
        // bugout.on("seen", (peerAddress) => {
        //     toast.success('Connected!');
        // });
        // bugout.on("connections", (c) => {
        //     // if (c === 0) {
        //     //     setReady(true);
        //     // }

        //     // TODO: maybe show in some better way...
        //     // if (c === 1) {
        //     //     toast.success('Connected!');
        //     // }
        // });

        // TODO: figure out why this causes issues
        return () => {
            try {
                bugout.destroy();
            } catch (err) {
                // TODO: not sure why this throws sometimes
            }
        };
    }, [bugout, onSecretReceived]);

    return {
        bugout,
        address,
    };
}

// TODO: consider some sort of loading/ready indicator
export default function RequesterPage() {
    const [secret, setSecret] = useState('');
    const { address } = useBugoutServer({
        onSecretReceived: (newSecret) => {
            setSecret(newSecret);

            toast.success('Secret received!');
            // TODO: disconnect
            return true;
        },
    });
    const url = UrlHelper.absolute(`/${address}`);

    return (
        <Layout>
            <Content>
                <QrCode value={url} />
                <CopyableField value={url} message="Copied url!" />
                <SecretInput value={secret} />
            </Content>
        </Layout>
    );
}
