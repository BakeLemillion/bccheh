import React from "react"

export const HeadOfCompany = ({name }) => {
    return (
        <div className="flex flex-col items-start justify-start">
            <p className="text-xl font-bold mb-4">{name}</p>
        </div>
    )
}