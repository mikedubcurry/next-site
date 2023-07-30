import { ReactNode } from "react"

export const Heading = ({ children, level, ...props }: {
    children: ReactNode,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    [key: string]: any
}) => {
    const sizeMap = {
        1: `text-4xl`,
        2: `text-3xl`,
        3: `text-2xl`,
        4: `text-xl`,
        5: `text-lg`,
        6: `text-base`,
    }
    const className = `${sizeMap[level]} font-bold`

    switch (level) {
        case 1:
            return <h1 className={className} {...props}>{children}</h1>
        case 2:
            return <h2 className={className} {...props}>{children}</h2>
        case 3:
            return <h3 className={className} {...props}>{children}</h3>
        case 4:
            return <h4 className={className} {...props}>{children}</h4>
        case 5:
            return <h5 className={className} {...props}>{children}</h5>
        case 6:
            return <h6 className={className} {...props}>{children}</h6>
    }
}
