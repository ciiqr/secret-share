import qrcode from "qrcode.react";
import styled from "styled-components";

const QrCode = styled(qrcode).attrs((props) => ({
    level: props.level ?? "H",
    renderAs: "svg",
}))({
    borderRadius: 4,
    width: "100%",
    height: "100%",
});

export default QrCode;
