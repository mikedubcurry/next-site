import { ReactNode } from "react"

export const Section = ({children}: {children: ReactNode}) => {
    return (
        <section className="flex flex-col justify-center gap-4">
            {children}
        </section>
    )
}
