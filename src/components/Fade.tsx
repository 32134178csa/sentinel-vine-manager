import React, { ReactNode } from "react"
import { CSSTransition } from "react-transition-group"

interface FadeProps {
    in: boolean
    children: ReactNode
    timeout?: number
    classNames?: string
}

export default function Fade({
    in: inProp,
    children,
    timeout = 300,
    classNames = "fade"
}: FadeProps) {
    return (
        <CSSTransition
            in={inProp}
            timeout={timeout}
            classNames={classNames}
            unmountOnExit
        >
            <div>
                {children}
            </div>
        </CSSTransition>
    )
    
}