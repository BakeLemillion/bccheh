import React from "react"
import { TitlePage, TextInput, ButtomGreen } from "../index.js" 
import closeIcon from "../../assets/imgs/closeIcon.svg"
import "./index.scss"

export const AlertCard = ({confirm, onAgree}) => {
    return (
        <div className="flex flex-col items-start justify-between w-560px h-442px bg-white rounded-xl p-12 relative">
            <div className="flex flex-col justify-start items-start">
                <TitlePage title={'Обращаем Ваше внимание!'} />
                <p className="text-base mb-4">Для открытия счёта Вам нужно подтвердить личность при помощи ЭЦП:</p>
                <div className="flex flex-row items-center justify-start mb-4">
                    <div className="dot"></div>
                    <p className="text-base">ТОО подтверждает ЭЦП юридического лица, выданной на имя руководителя</p>
                </div>
                <div className="flex flex-row items-center justify-start">
                    <a href="https://egov.kz/cms/ru/services/pass_onlineecp" className="text-sm text-green mr-2 underline">Получить ЭЦП онлайн</a>
                    <a href="https://pki.gov.kz/ncalayer/" className="text-sm text-green underline">Установить программу NCALayer</a>
                </div>
            </div>
            <ButtomGreen 
            label={'Понятно'} 
            styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-16 rounded-lg'} 
            onClick={onAgree}/>
            <div className="absolute top-4 right-4 flex items-center content-center cursor-pointer" onClick={onAgree}>
                <img src={closeIcon} alt="close"/>
            </div>
        </div>
    )
}