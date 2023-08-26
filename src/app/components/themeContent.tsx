'use client'

import { useThemeContext } from "@/lib/ThemeContext"
import MusicContent from "./MusicContent";
import SWContent from "./SWContent";
import VimContent from "./VimContent";

export default function ThemeContent() {
    const { themes, activeTheme } = useThemeContext();

    switch (activeTheme) {
        case 0:
            return (
                <section className="flex flex-col gap-6 w-full justify-center items-center">
                    <SWContent />
                </section>
            )
        case 1:
            return (
                <section className="flex flex-col gap-6 w-full justify-center items-center">
                    <MusicContent />
                </section>
            )
        case 2:
            return (
                <section className="flex flex-col gap-6 w-full justify-center items-center">
                    <VimContent />
                </section>
            )
        default:
            return null;
    }
}
