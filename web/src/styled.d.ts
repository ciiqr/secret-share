import 'styled-components';
import 'react-hot-toast';
// TODO: figure out stricter typing...
// import { CSSProperties } from 'react';

declare module 'styled-components' {
    export interface DefaultTheme {
        spacing?: {
            default?: number|string
        }
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
        }
        input?: {
            borderColor?: string
            color?: string
            focus?: {
                borderColor?: string
            }
            readonly?: {
                borderColor?: string
                color?: string
            }
            hover?: {
                backgroundColor?: string
            }
        }
        toast?: DefaultToastOptions
    }
}
