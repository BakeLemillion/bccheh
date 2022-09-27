import React from "react"
import "./index.scss"


export function CheckBox({checked, label, onChange, labelSize}) {
    return(
        <div className="flex flex-row items-center ">
            <div className="flex flex-row items-center relative">
                <input type="checkbox" onChange={onChange} checked={checked} id="checkbox" name="checkbox"
                className="bg-green hover:bg-green cursor-pointer 
                w-20px h-20px border-4 border-green rounded-lg checked-active" />
                {checked && 
                <div className="checkbox-item" onClick={onChange}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="4" fill="#00A755"/>
                    <path d="M8.2643 14.5833C8.0368 14.5833 7.81847 14.49 7.66097 14.3241L3.98014 10.4641C3.66264 10.1316 3.67514 9.60331 4.00847 9.28664C4.34097 8.96914 4.86847 8.98081 5.18597 9.31414L8.2643 12.5416L14.8135 5.67497C15.131 5.34164 15.6593 5.32914 15.991 5.64664C16.3243 5.96414 16.3376 6.49164 16.0193 6.82414L8.86764 14.3241C8.71014 14.49 8.4918 14.5833 8.2643 14.5833Z" fill="white"/>
                    </svg>
                </div>}
            </div>
            <label className={labelSize}>{label}</label>
        </div>
    )
}