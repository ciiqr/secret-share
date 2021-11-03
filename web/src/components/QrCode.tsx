import styled from 'styled-components';
import QRCode from 'qrcode.react';

const QrCode = styled(QRCode).attrs(props => ({
    level: props.level || 'H',
    renderAs: 'svg',
}))({
    borderRadius: 4,
    width: '100%',
    height: '100%',
});

export default QrCode;
