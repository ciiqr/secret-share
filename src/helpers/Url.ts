export default class UrlHelper {
    static absolute(url: string): string {
        const base = document.baseURI.replace(/\/$/, "");

        if (!url) {
            return base;
        }

        const firstCharacter = url.charAt(0);
        if (firstCharacter !== "/") {
            return `${base}/${url}`;
        }

        return `${base}${url}`;
    }
}
