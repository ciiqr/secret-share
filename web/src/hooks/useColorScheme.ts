import { useEffect, useState } from 'react';

type ColorScheme = 'light' | 'dark';

type Return = {
  colorScheme: ColorScheme,
};

export default function useColorScheme(): Return {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // TODO: support/persist manual toggle...
    const [colorScheme, setColorScheme] = useState<ColorScheme>(
        mediaQuery.matches ? 'dark' : 'light'
    );

    useEffect(() => {
        // TODO: don't need to listen if the user has set their preference
        const listener = (e: MediaQueryListEvent) => {
            setColorScheme(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', listener);

        return () => {
            mediaQuery.removeEventListener('change', listener);
        };
    });

    return {
        colorScheme,
    };
}
