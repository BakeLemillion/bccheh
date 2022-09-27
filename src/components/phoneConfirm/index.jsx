import React from "react"
import {TitlePage} from "../titlePage"
import { TextInput, ButtomGreen } from "../organisms/index.js" 

export const PhoneConfirm = ({confirm, onSendCode}) => {
    return (
        <div className="flex flex-col items-start justify-start w-560px h-442px bg-white rounded-xl p-12">
            <TitlePage title={'Введите код из SMS'} />
            <div className="mb-8"></div>
            <TextInput title={'Мы отправили код на номер +7 708 777 77 77 '} placeholder={'Введите код потверждения'}/>
            <span className="mb-3"></span>
            <p className="text-base ">Запросить повторно через 00:59</p>
            <span className="mb-6"></span>
            <ButtomGreen 
            label={'Отправить'} 
            styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-16 rounded-lg'} 
            onClick={() => onSendCode()}
            />
        </div>
    )
}