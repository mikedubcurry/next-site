'use client'

import { useThemeContext } from "@/lib/ThemeContext"

export default function ThemePicker() {
    const { themes, activeTheme, setActiveTheme } = useThemeContext()

    return (
        <p className="text-xl">
            {themes.map((theme, index) => (
                <span key={index}>
                    <span
                        className="text-blue-400 hover:text-blue-600 transition-colors py-8"
                    >
                        <button
                            onClick={() => setActiveTheme(index)}
                            className={`transition-colors ${activeTheme === index ? 'text-orange-500' : ''}`}
                        >
                            {theme}
                       </button>
                    </span>
                    <span >{index < themes.length - 1 ? ' | ' : ''}</span>
                </span>
            ))}
        </p>

    )
}
