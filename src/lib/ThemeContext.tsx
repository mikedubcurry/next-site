'use client'
import { ReactNode, createContext, useContext, useState } from "react";

const themes = [
    'Software Developer',
    'Musician',
    'Vim user'
]

export const themeContext = createContext({
    themes,
    activeTheme: 0,
    setActiveTheme: (theme: number) => { }
})

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [activeTheme, setActiveTheme] = useState(0)

    return (
        <themeContext.Provider value={{ themes, activeTheme, setActiveTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(themeContext)
}
