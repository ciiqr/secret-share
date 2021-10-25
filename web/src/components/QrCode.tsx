import styled from 'styled-components';
import QRCode from 'qrcode.react';

const QrCode = styled(QRCode).attrs(props => ({
    level: props.level || 'H',
    size: props.size || 400,
    renderAs: 'svg',
}))({
    borderRadius: 4,
});

export default QrCode;
