import { DefaultTheme } from "styled-components";
import getBaseTheme from "./getBaseTheme";
import mergeThemes from "./mergeThemes";

export default function getDarkTheme(): DefaultTheme {
    return mergeThemes(getBaseTheme(), {
        // primaryColor: '',
        backgroundColor: '#36454f',
        common: {
            focus: {
                boxShadow: '0 0 0 0.2rem #c9bab040',
            },
        },
        button: {
            backgroundColor: '#c9bab0',
            borderColor: '#c9bab0',
            color: '#434343',
        },
        input: {
            borderColor: '#ffffff1f',
            color: 'rgba(0,0,0,0.8)',
            readonly: {
                color: '#c7c9d5',
            },
            focus: {
                borderColor: '#e4ddd8',
            },
            hover: {
                backgroundColor: '#303e47',
            }
        },
        toast: { // TODO: change (currently same as light)
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
