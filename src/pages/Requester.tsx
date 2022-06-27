import { useState, useEffect, useMemo } from "react";
import rntoast from "react-hot-toast";
import Bugout from "bugout";
import {
    QrCode,
    CopyableField,
    SecretInput,
    Layout,
    Content,
} from "components";
import { absoluteUrl } from "helpers/Url";

// TODO: cleanup
type OnSecretReceived = (secret: string) => boolean;
function useBugoutServer({
    onSecretReceived,
}: {
    onSecretReceived: OnSecretReceived;
}) {
    // const [ready, setReady] = useState(false);
    const bugout = useMemo(
        () =>
            new Bugout({
                announce: [
                    "wss://tracker.openwebtorrent.com",
                    "wss://tracker.btorrent.xyz",
                ],
            }),
        [],
    );

    const address = bugout.address();

    useEffect(() => {
        // register rpc calls clients can use
        bugout.register(
            "shareSecret",
            (_address, args: Record<string, string>, cb) => {
                const { secret } = args;
                if (secret) {
                    const success = onSecretReceived(secret);
                    cb({ success });
                }
            },
        );

        // TODO: connections are weird, probs just not worth relying on for this
        // handle events
        // bugout.on("seen", (peerAddress) => {
        //     rntoast.success('Connected!');
        // });
        // bugout.on("connections", (c) => {
        //     // if (c === 0) {
        //     //     setReady(true);
        //     // }

        //     // TODO: maybe show in some better way...
        //     // if (c === 1) {
        //     //     rntoast.success('Connected!');
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
    const [secret, setSecret] = useState("");
    const { address } = useBugoutServer({
        onSecretReceived(newSecret) {
            setSecret(newSecret);

            rntoast.success("Secret received!");
            // TODO: disconnect
            return true;
        },
    });
    const url = absoluteUrl(`/${address}`);

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
