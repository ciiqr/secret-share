export default class Encryption {
    static readonly KEY_FORMAT = 'jwk';
    static readonly ALGORITHM = {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: {name: 'SHA-256'},
    };

    private constructor() {}
}
