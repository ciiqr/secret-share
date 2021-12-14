import merge from 'deepmerge';
import { DefaultTheme } from 'styled-components';

export default function mergeThemes(
    baseTheme: DefaultTheme,
    theme: DefaultTheme,
): DefaultTheme {
    return merge(baseTheme, theme, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        arrayMerge: (_, sourceArray) => sourceArray,
    });
}
