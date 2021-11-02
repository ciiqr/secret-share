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
        // TODO: input
    });
}

// TODO:
// input, textarea {
//     border: 1px solid rgba(0,0,0,0.12);
//     border-radius: 4px;
//     padding: 8px 16px;
//     color: rgba(0,0,0,0.8);
//     line-height: 1.5;
// }
// input[readonly],
// textarea[readonly] {
//     border-color: #ffffff1f;
//     color: #c7c9d5;
// }
// input[type="text"]:focus,
// textarea:focus {
//     border-color: #e4ddd8;
// }
