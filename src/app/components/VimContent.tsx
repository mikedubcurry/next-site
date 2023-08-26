'use client'

import { useState } from "react"

export default function VimContent() {
    const [cursorPosition, setCursorPosition] = useState<Position>([1,1])
    return <div
        className="border border-white bg-black"
        style={{ width: '80ch', height: '24ch', display: 'grid', gridTemplateColumns: 'repeat(30, 1fr)', gridTemplateRows: 'repeat(24, 1fr)' }}>
    <span className="bg-green-500" style={{ height: 'calc(24ch / 8)', width: '2ch' }}></span>
    </div>
}

type Position = [number, number]
