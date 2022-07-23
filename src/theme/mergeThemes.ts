import merge from "deepmerge";
import type { DefaultTheme } from "styled-components";

export function mergeThemes(
    baseTheme: DefaultTheme,
    theme: DefaultTheme,
): DefaultTheme {
    return merge(baseTheme, theme, {
        arrayMerge: (_, sourceArray) => sourceArray,
    });
}
