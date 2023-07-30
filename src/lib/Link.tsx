import { ReactNode } from 'react'

export const Link = ({ href, children, ...props }: { href: string, children: ReactNode, [key: string]: any }) => {
    return (
        <a
            className="underline text-blue-700 hover:text-blue-500 dark:text-sky-300 hover:dark:text-blue-400 transition-colors"
            href={href}
            {...props}
        >
            {children}
        </a>
    )
}
