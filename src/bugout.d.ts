export = Bugout;

type EventEmitter = events.EventEmitter;

/**
 * Multi-party data channels on WebTorrent extension.
 */
// declare function Bugout(identifier?: any, opts?: any): Bugout;
declare class Bugout extends EventEmitter {
    /**
     * Multi-party data channels on WebTorrent extension.
     */
    constructor(identifier?: any, opts?: any);
    announce: any;
    wt: any;
    nacl: any;
    seed: any;
    timeout: any;
    keyPair: any;
    keyPairEncrypt: any;
    pk: any;
    ek: any;
    identifier: any;
    peers: Record<string, unknown>;
    seen: Record<string, unknown>;
    lastwirecount: any;
    api: Record<string, unknown>;
    callbacks: Record<string, unknown>;
    serveraddress: any;
    heartbeattimer: NodeJS.Timer;
    torrent: any;
    torrentCreated: boolean;
    WebTorrent: any;
    _onTorrent(): void;
    encodeseed(material: any): any;
    encodeaddress(material: any): string;
    heartbeat(interval: any): void;
    destroy(cb?: any): void;
    close: any;
    connections(): any;
    address(pk?: any): string;
    ping(): void;
    send(address: any, message: any): void;
    register(call: any, fn: fn, docstring?: any): void;
    rpc(address: any, call: ((...any: any[]) => any) | any, args?: any, callback?: Callback): void;

    // TODO: why isn't this inherited from event emitter...
    on(event: string, listener: (...args: any[]) => any): this;
}

type Callback = (result: any) => any;
type fn = (any, any, Callback) => void;

declare namespace Bugout {
    function encodeseed(material: any): any;
    function encodeaddress(material: any): string;
    const address: any;
}
