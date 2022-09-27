import React from 'react'
import {TitlePage, TextInput, PhoneInput, 
    CheckBox, ButtomGreen, ModalWindow, 
    PhoneConfirm, AlertCard, CompanyInfoCard} from "../components"

import {CONTACT_DATA_TITLE} from "../constant"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import {nextStep} from "../store/reducers/routes"

export function TempContactData() {

    const [agree, setAgree] = React.useState(false)
    const [modal, setModal] = React.useState(false)
    const [phoneCode, setPhoneCode] = React.useState(true)
    const [alert, setAlert] = React.useState(false)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const onChangeCheckbox = () => {
        setAgree(!agree)
    }

    const sendPhoneCode = () => {
        setModal(true)
        setPhoneCode(true)
    }

    const confirmPhoneCode = (e) => {
        setPhoneCode(false)
        setAlert(true)
    }

    const agreeAlert = () => {
        setAlert(false)
        setModal(false)
    }

    const goNext = () => {
        navigate("/company_information")
        dispatch(nextStep())
    }

    return (
        <div className='w-100 h-100' >
            <TitlePage title={CONTACT_DATA_TITLE} />
            <p className='text-base text-text mb-8'>Укажите номер телефона руководителя</p>
            <PhoneInput title={'Номер телефона'} placeholder={"+7 (777) 777 77 77"} />
            <div className="flex flex-row items-center my-12">
                <CheckBox label="Я соглашаюсь на" labelSize="ml-1 text-xs" checked={agree} onChange={()=>onChangeCheckbox()}/> 
                <a href='http://egov.kz/cms/kk' className='text-xs ml-1 underline text-green'>сбор и обработку персональных данных</a>
            </div>
            {
                phoneCode && <ButtomGreen label="Открыть счёт" 
                styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-4 rounded-lg'} 
                onClick={() =>sendPhoneCode()}
                />
            }
            
            {
               !phoneCode && <div>
                    <TextInput title={"ИИН/БИН компании"} helper={"БИН только для ТОО"}/>
                    <div className="mb-6"></div>
                    <CompanyInfoCard tooTile={'ТОО «Ромашка»'}/>
                    <div className="mb-6"></div>
                    <ButtomGreen label="Продолжить" 
                    styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-4 rounded-lg'} 
                    onClick={() =>goNext()}
                    />
                </div>
            }
                            
            {modal ?  <ModalWindow openModal={modal}>
                {
                    phoneCode ? <PhoneConfirm confirm={phoneCode} onSendCode={() => confirmPhoneCode()}/> : alert ? <AlertCard onAgree={() => agreeAlert()}/> : ""
                }
                
            </ModalWindow> : ""}
        </div>
    )
} 