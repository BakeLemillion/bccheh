import React from 'react'
import check from "../../../assets/imgs/check.svg"
import "./index.scss"


export function StepperItem({name, pregresses}) {
    return (
        <div className='stepper-item'>
            <div className={pregresses}>
                {pregresses === "stepper-circle done" && <img src={check} alt='check' style={{zIndex: 100}} />}
            </div>
            <div className='stepper-content'>{name} </div>
        </div>
    )
}