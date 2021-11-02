import React, { PropsWithChildren } from 'react';
import useColorScheme from 'hooks/useColorScheme';
import { ThemeProvider } from 'styled-components';
import getDarkTheme from 'theme/getDarkTheme';
import getLightTheme from 'theme/getLightTheme';

export default function Theme({ children }: PropsWithChildren<{}>) {
    const { colorScheme } = useColorScheme();

    const theme = colorScheme === 'dark' ? getDarkTheme() : getLightTheme();

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
