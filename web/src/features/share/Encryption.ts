export default class Encryption {
    static readonly keyFormat = 'jwk';
    static readonly algorithm = {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: {name: 'SHA-256'},
    };

    private constructor() {}
}
