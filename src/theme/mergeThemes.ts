import merge from "deepmerge";
import { DefaultTheme } from "styled-components";

export default function mergeThemes(
    baseTheme: DefaultTheme,
    theme: DefaultTheme,
): DefaultTheme {
    return merge(baseTheme, theme, {
        arrayMerge: (_, sourceArray) => sourceArray,
    });
}
