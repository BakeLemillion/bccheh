import React from "react"
import "./index.scss"

export function TextInput({title, helper, placeholder, errorText, typeInput="phone", value=""}) {

    return(
        <div className="w-full">
            <div className="w-full">
                <label htmlFor="first_name" className="block text-sm font-medium text-text mb-1">{title}</label>

                    <input type="text" value={value} className="bg-gray border border-gray text-text text-sm rounded-lg 
                    focus:gray focus:border-gray active:border-gray block w-full px-4 py-3.5 outline-0" 
                    placeholder={placeholder} required />
                
                <p className="mt-2 text-xs text-helper">{helper}</p>
            </div>
        </div>
    )
}