import React from 'react'
import {HeadOfCompany, TextInput, ButtomGreen, CheckBox} from "../index"

export function TooInfoItems({agree, onChangeCheckbox, correct, handleCorrect}) {
    return (
        <div>
            <p className="text-xl font-bold mb-3">Управление:</p>
            <HeadOfCompany name={'Иванов Иван Иванович'}/>
            <TextInput title={"Должность"}  value="Директор" />
            <div className="mb-4"></div>
            <TextInput title={"Срок полномочий"}  value="5 лет" />
            <div className="mb-6"></div>
                <p className="text-xl font-bold mb-3">Участники:</p>
                <div className="max-w-md mb-4">
                    <TextInput title={"ФИО участника"}  value="Иванов Иван Иванович" />
                </div>
                <div className="max-w-md mb-6">
                    <TextInput title={"Доля участия"}  value="100%" />
                </div>
            <div className="flex flex-col items-start justify-start mb-6">
                <p className="text-base mb-4">Получали лицензию на ведение бизнеса?</p>
                <div className="flex flex-row items-start justify-start">
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
                </div>
            </div>
            <div className="flex flex-row items-start justify-start mb-6">
                <CheckBox label="" 
                checked={agree} onChange={()=>onChangeCheckbox()}/>
                <p className="text-xs ml-1">Я гражданин РК, не являюсь налоговым резидентом другой  
                страны и иностранным <br/> публичным должностным  лицом/членом его семьи или близким родственником</p>
            </div>
        </div>
    )
}