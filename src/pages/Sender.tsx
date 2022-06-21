import { useState, useEffect } from "react";
import rntoast from "react-hot-toast";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Bugout from "bugout";
import {
    TextArea,
    CopyableField,
    SendButton,
    Layout,
    Content,
} from "components";

const StyledTextArea = styled(TextArea)({
    height: 200,
    resize: "none",
});

// TODO: refactor
function useBugoutClient(serverAddress: string) {
    const [ready, setReady] = useState(false);
    const [bugout] = useState<Bugout>(
        () =>
            new Bugout(serverAddress, {
                announce: [
                    "wss://tracker.openwebtorrent.com",
                    "wss://tracker.btorrent.xyz",
                ],
            }),
    );

    const address = bugout.address();

    useEffect(() => {
        // handle events
        bugout.on("server", () => {
            setReady(true);

            // TODO: maybe show in some better way...
            rntoast.success("Connected!");
        });

        return () => {
            bugout.destroy();
        };
    }, [bugout, setReady]);

    return {
        bugout,
        ready,
        address,
    };
}

function sendSecret(bugout: Bugout, secret: string) {
    // @ts-expect-error TODO: fix bugout types...
    bugout.rpc("shareSecret", { secret }, (result: unknown) => {
        // TODO: if server responds positively (result.success), disconnect
        // TODO: check result.error too?
        if ((result as { success?: boolean }).success) bugout.destroy();
    });

    // TODO: toast conditional on result
    rntoast.success("Secret shared!");
}

// TODO: add a loading indicator for sending
// TODO: add an indicator for whether we're connected
export default function SenderPage() {
    const { address } = useParams();
    const [secret, setSecret] = useState("");
    const { bugout, ready } = useBugoutClient(address ?? "");

    return (
        <Layout>
            <Content>
                <CopyableField value={window.location.href} />
                {/* TODO: would be nice if text area could be hidden while typing... */}
                <StyledTextArea
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                />
                <SendButton
                    disabled={!ready}
                    onClick={() => sendSecret(bugout, secret)}
                />
            </Content>
        </Layout>
    );
}
