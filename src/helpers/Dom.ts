export function getBasePath(): string {
    const baseUrl = new URL(document.baseURI);
    const pathname = baseUrl.pathname;

    return pathname.replace(/\/$/u, "");
}
