import React, {useState, useEffect} from 'react'
import "./index.scss"
import { useSelector, useDispatch } from "react-redux"
import { StepperItem } from './stepperItems'
import {nextStep, makeActive} from "../../store/reducers/routes"
  

export function Stepper() {

    const activeStore = useSelector(state => state.routesItems.active)
    const heightStore = useSelector(state => state.routesItems.height)
    const itemsStore = useSelector(state => state.routesItems.routes)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(makeActive())
    }, [activeStore, dispatch])
    
    return (
        <div className='stepper-container'>
            <div className='stepper-content'>
            <style dangerouslySetInnerHTML={{
            __html: [
                '.stepper-progress::before {',
                `  height: ${heightStore+"%"}`,
                '}'
                ].join('\n')
            }}>
            </style>
            
            <div className='stepper-progressbar' >
            <div className='stepper-progress'  ></div>
                {itemsStore && itemsStore.map((item) => <StepperItem name={item.name} 
                pregresses={`stepper-circle ${item.pregress}`} 
                key={item.id}/>)}
            </div>
            </div>
        </div>
    )
}