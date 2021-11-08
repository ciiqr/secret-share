import Encryption from 'features/share/Encryption';

export default class PrivateKey {
    public static async generate() {
        const keyPair = await window.crypto.subtle.generateKey(
            Encryption.ALGORITHM,
            false,
            ['encrypt', 'decrypt']
        );

        return new this(keyPair);
    }

    private readonly keyPair: CryptoKeyPair;

    private constructor(keyPair: CryptoKeyPair) {
        this.keyPair = keyPair;
    }

    public async getPublicKeyJwk(): Promise<object> { // TODO: why no JSONWebKey
        return await window.crypto.subtle.exportKey(
            Encryption.KEY_FORMAT,
            this.keyPair.publicKey!,
        );
    }

    public async decrypt(encrypted: ArrayBuffer): Promise<string> {
        const decrypted = await window.crypto.subtle.decrypt(
            Encryption.ALGORITHM,
            this.keyPair.privateKey!,
            encrypted
        );
        const decoder = new TextDecoder();
        const message = decoder.decode(decrypted);

        return message;
    }
}
