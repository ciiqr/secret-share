import "styled-components";
import "react-hot-toast";
// TODO: figure out stricter typing...
// import { CSSProperties } from 'react';

declare module "styled-components" {
    export interface DefaultTheme {
        spacing?: {
            default?: number | string;
        };
        backgroundColor?: string;
        common?: {
            focus?: {
                boxShadow?: string;
            };
        };
        button?: {
            backgroundColor?: string;
            borderColor?: string;
            color?: string;
        };
        input?: {
            borderColor?: string;
            color?: string;
            readonly?: {
                color?: string;
            };
            focus?: {
                borderColor?: string;
            };
            hover?: {
                backgroundColor?: string;
            };
        };
        toast?: DefaultToastOptions;
    }
}
