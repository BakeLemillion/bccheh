import React from "react"
import "./index.scss"

export const ProgressInfo = ({width}) => {
    return (
        <div className="info-progress">
            <div className='info-progressbar' style={{width: `${50 * width}%`}}></div>
        </div>
    )
}