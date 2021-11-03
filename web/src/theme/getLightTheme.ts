import { DefaultTheme } from "styled-components";
import getBaseTheme from "./getBaseTheme";
import mergeThemes from "./mergeThemes";

export default function getLightTheme(): DefaultTheme {
    return mergeThemes(getBaseTheme(), {
        // primaryColor: '',
        backgroundColor: 'white',
        common: {
            focus: {
                boxShadow: '0 0 0 0.2rem #007bff40',
            },
        },
        button: {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            color: 'white',
        },
        input: {
            borderColor: 'rgba(0,0,0,0.12)',
            color: 'rgba(0,0,0,0.8)',
            focus: {
                borderColor: '#7fbdff',
            },
            readonly: {
                borderColor: 'rgba(0,0,0,0.12)',
                color: 'rgba(0,0,0,0.54)',
            },
            hover: {
                backgroundColor: '#F7F7F7',
            }
        },
        toast: {
            style: {
                backgroundColor: '#36454f',
                color: '#c7c9d5',
            },
            success: {
                iconTheme: {
                    primary: '#61d345',
                    secondary: 'white',
                },
                style: {
                    borderWidth: 2,
                    borderColor: '#61d345',
                    borderStyle: 'solid',
                }
            },
        },
    });
}
