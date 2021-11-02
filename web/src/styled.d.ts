import 'styled-components';
// TODO: figure out stricter typing...
// import { CSSProperties } from 'react';

declare module 'styled-components' {
    export interface DefaultTheme {
        spacing?: {
            default?: number|string,
        },
        backgroundColor?: string
        common?: {
            focus?: {
                boxShadow?: string
            }
        }
        button?: {
            backgroundColor?: string
            borderColor?: string
            color?: string
        },
    }
}
