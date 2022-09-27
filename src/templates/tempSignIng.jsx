import React from 'react'
import {TitlePage, TextInput, PhoneInput, 
    CheckBox, ButtomGreen, ModalWindow, 
    PhoneConfirm, AlertCard, Dot} from "../components"

import { APPLICATION_SIGNING } from "../constant"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { nextStep } from "../store/reducers/routes"

import fileIcon from "../assets/imgs/fileImg.svg"
import nsaLayerIcon from "../assets/imgs/nsaLayer.svg"
import egovIcon from "../assets/imgs/egovIcon.svg"

export function TempSignIng() {

    const [agree, setAgree] = React.useState(false)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const goNext = () => {
        navigate("/company_success")
        dispatch(nextStep())
    }

    return (
        <div className='w-100 h-100' >
            <TitlePage title={APPLICATION_SIGNING} />
            <p className='text-text mb-4'>Скачайте и ознакомьтесь:</p>

            <div className='flex flex-row items-center justify-start mb-6'>
                <img src={fileIcon} alt="file"/>
                <p className='text-base underline ml-1'>Заявление на открытие счёта</p>
            </div>

            <h5 className="text-xl font-bold mb-4">Подпишите с помощью ЭЦП:</h5>

            <div className='flex flex-col items-start justify-start mb-6'>
                <div className='flex flex-row items-center justify-start mb-3'>
                    <Dot />
                    <p className="text-base">Откройте программу NCALayer у себя на компьютере</p>
                </div>
                <div className='flex flex-row items-center justify-start mb-3 ml-5'>
                    <img src={nsaLayerIcon} />
                    <a href="https://egov.kz/cms/ru/services/pass_onlineecp" className="text-base text-green mr-2 underline ml-3">У меня нет программы NCALayer</a>
                </div>

                <div className='flex flex-row items-center justify-start mb-3'>
                    <Dot />
                    <p className="text-base">Выберите ЭЦП Алиева А.В., название сертификата начинается с букв «GOST» </p>
                </div>
                <div className='flex flex-row items-center justify-start mb-3 ml-5'>
                    <img src={egovIcon} />
                    <a href="https://egov.kz/cms/ru/services/pass_onlineecp" className="text-base text-green mr-2 underline ml-3">Получить ЭЦП онлайн</a>
                </div>

                <div className='flex flex-row items-center justify-start mb-3'>
                    <Dot />
                    <p className="text-base">Введите пароль от сертификата и нажмите «Открыть» </p>
                </div>
                <div className='flex flex-row items-center justify-start mb-3 ml-5'>
                    <img src={egovIcon} />
                    <a href="https://egov.kz/cms/ru/services/pass_onlineecp" className="text-base text-green mr-2 underline ml-3">Я не помню пароль</a>
                </div>
                <div className='flex flex-row items-center justify-start mb-3'>
                    <Dot />
                    <p className="text-base">Нажмите «Подписать» и дождитесь окончания процесса</p>
                </div>
            </div>

            <ButtomGreen
                label={'Продолжить'} 
                styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-16 rounded-lg'} 
                onClick={() => goNext()}
                />
        </div>
    )
} 