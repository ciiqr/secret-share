export function absoluteUrl(url: string): string {
    const base = document.baseURI.replace(/\/$/u, "");

    if (!url) {
        return base;
    }

    const firstCharacter = url.charAt(0);
    if (firstCharacter !== "/") {
        return `${base}/${url}`;
    }

    return `${base}${url}`;
}
