import React from "react"
import { ButtomGreen } from "../organisms"
import "./index.scss"

export const CompanyInfoCard = ({tooTile}) => {
    return (
        <div className="flex flex-col items-start justify-start p-4 bg-gray rounded-xl">
            <p className="text-base mb-4">Наименование компании совпадает?</p>
            <h4 className="font-bold text-xl mb-3">{tooTile}</h4>
            
            {/* <div className="flex flex-row">
                <ButtomGreen 
                label="Да" 
                styleClass={correct ? "py-1 px-3 bg-green rounded-3xl text-white mr-1" : 
                "py-1 px-3 bg-white rounded-3xl border border-gray_border mr-1" } 
                onClick={() => handleCorrect(true)} />
                <ButtomGreen 
                label="Нет" 
                styleClass={!correct ? "py-1 px-3 bg-green rounded-3xl text-white " : 
                "py-1 px-3 bg-white rounded-3xl border border-gray_border" } 
                onClick={() => handleCorrect(false)} />
            </div> */}
        </div>
    )
}