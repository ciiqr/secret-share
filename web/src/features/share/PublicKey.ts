import Encryption from 'features/share/Encryption';

export default class PublicKey {
    public static async import(publicKeyJwk: JsonWebKey) {
        const key = await window.crypto.subtle.importKey(
            Encryption.KEY_FORMAT,
            publicKeyJwk,
            Encryption.ALGORITHM,
            false,
            ['encrypt']
        );

        return new this(key);
    }

    private readonly key: CryptoKey;

    private constructor(key: CryptoKey) {
        this.key = key;
    }

    public async encrypt(message: string): Promise<ArrayBuffer> {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        const encrypted = await window.crypto.subtle.encrypt(
            Encryption.ALGORITHM,
            this.key,
            data.buffer
        );

        return encrypted;
    }
}
