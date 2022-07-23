import { useEffect, useState } from "react";

type ColorScheme = "dark" | "light";

interface Return {
    colorScheme: ColorScheme;
}

export function useColorScheme(): Return {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // TODO: support/persist manual toggle...
    const [colorScheme, setColorScheme] = useState<ColorScheme>(
        mediaQuery.matches ? "dark" : "light",
    );

    useEffect(() => {
        // TODO: don't need to listen if the user has set their preference
        function listener(e: MediaQueryListEvent) {
            setColorScheme(e.matches ? "dark" : "light");
        }

        mediaQuery.addEventListener("change", listener);

        return () => {
            mediaQuery.removeEventListener("change", listener);
        };
    });

    return {
        colorScheme,
    };
}
