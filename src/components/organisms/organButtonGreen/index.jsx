import React from "react"
import "./index.scss"

export function ButtomGreen({label, styleClass, onClick}) {
    return(
        <button className={styleClass} onClick={onClick}>
            {label}
        </button>
    )
}