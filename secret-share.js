const KEY_FORMAT = 'jwk';
const ALGORITHM = {
    name: 'RSA-OAEP',
    modulusLength: 4096,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: {name: 'SHA-256'}, //can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
};

function generateSvg(content) {
    const qrcode = new QRCode({
        content: content,
        padding: 0,
        ecl: 'H',
        join: true, // Crisp rendering and 4-5x reduced file size
        container: 'svg-viewbox',
    });

    return qrcode.svg();
}

function updateUrl(url) {
    // update link
    const urlElem = document.body.querySelector('#url');
    urlElem.value = url;

    // update qrcode
    const svg = generateSvg(url);
    const qrCodeElem = document.body.querySelector('#qrcode');
    qrCodeElem.innerHTML = svg;
}

async function init() {
    // TODO: REQUESTER only

    // generate an encryption key
    const keyPair = await window.crypto.subtle.generateKey(ALGORITHM, false, ['encrypt', 'decrypt']);
    const publicKeyJwk = await window.crypto.subtle.exportKey(KEY_FORMAT, keyPair.publicKey);

    // TODO: create secret request returning a url
    // - public key (jwt format)
    // TODO: generate actual url with a base36 encoded id for the url: statically 6 digits for now, go up to 10 if it ends up mattering: 60466176, 100000 # first 6 digit base36 number: 36^5...(36^6-1)
    // const url = 'https://google.com/search?q=' + publicKeyJwk.n;
    const url = 'https://secret.williamvilleneuve.ca/' + 'f38t29';
    // update url
    updateUrl(url);


    // TODO: SENDER only

    // import public key
    const publicKey = await window.crypto.subtle.importKey(KEY_FORMAT, publicKeyJwk, ALGORITHM, false, ['encrypt']);

    // encrypt message
    const encoder = new TextEncoder();
    const data = encoder.encode('okay of the string man');
    const encrypted = await window.crypto.subtle.encrypt(ALGORITHM, publicKey, data.buffer);

    // TODO: create secret response with encrypted data


    // TODO: REQUESTER only

    // TODO: wait for a response (ie. websockets, long polling, refreshing (and saving the key in local storage/etc))

    // decrypt
    const decrypted = await window.crypto.subtle.decrypt(ALGORITHM, keyPair.privateKey, encrypted);
    const decoder = new TextDecoder();
    const response = decoder.decode(decrypted);

    // update response
    // TODO: hide by default, button to show, button to copy
    const responseElem = document.body.querySelector('#response');
    responseElem.innerText = response;
}

init();

// TODO: Sender
// page for sender: show a textarea and a send button
