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
//     border-color: rgba(0,0,0,0.12);
//     color: rgba(0,0,0,0.54);
// }
// input[type="text"]:focus,
// textarea:focus {
//     border-color: #7fbdff;
// }
