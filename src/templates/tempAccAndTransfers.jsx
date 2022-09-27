import React  from "react";
import { TitlePage, TextInput, CompanyInfoCard, CheckBox, 
    ProgressInfo, ButtomGreen, HeadOfCompany } from "../components"
import {ACC_AND_TRANSFERS} from "../constant"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import {nextStep} from "../store/reducers/routes"
 
export function TempAccAndTransfers() {

    const [agree, setAgree] = React.useState(false)

    const onChangeCheckbox = () => {
        setAgree(!agree)
    }

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const goNext = () => {
        navigate("/company_signing")
        dispatch(nextStep())
    }

    return (
        <div className='w-100 h-100'>
            <TitlePage title={ACC_AND_TRANSFERS} />
            <div className="flex flex-row">
                <div className="flex flex-col items-start justify-between w-60 mr-6">
                    <div>
                        <h5 className="text-xl font-bold mb-1">Основной счёт</h5>
                        <p className="text-base">Открывается автоматически</p>
                    </div>
                    <div className="mb-4"></div>
                    <div className="border-solid border-2 border-gray_border rounded-lg py-3 px-4">
                        Казахстанский тенге
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <div>
                        <h5 className="text-xl font-bold mb-1">Дополнительный счёт</h5>
                        <p className="text-base">До 10 дополнительных бесплатных счетов</p>
                    </div>
                    <div className="mb-4"></div>
                    <div className="flex flex-row items-center justify-start pt-3">
                        <div className="flex flex-row items-center justify-start mr-3">
                            <CheckBox checked={agree} onChange={()=>onChangeCheckbox()}/>
                            <label className="ml-1">KZT</label>
                        </div>
                        <div className="flex flex-row items-center justify-start mr-3">
                            <CheckBox checked={agree} onChange={()=>onChangeCheckbox()}/>
                            <label className="ml-1">USD</label>
                        </div>
                        <div className="flex flex-row items-center justify-start mr-3">
                            <CheckBox checked={agree} onChange={()=>onChangeCheckbox()}/>
                            <label className="ml-1">RUB</label>
                        </div>
                        <div className="flex flex-row items-center justify-start mr-3">
                            <CheckBox checked={agree} onChange={()=>onChangeCheckbox()}/>
                            <label className="ml-1">EUR</label>
                        </div>
                        <div className="flex flex-row items-center justify-start mr-3">
                            <CheckBox checked={agree} onChange={()=>onChangeCheckbox()}/>
                            <label className="ml-1">CNY</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6"></div>
            
            <h5 className="text-xl font-bold mb-1">Бизнес карта</h5>
            <p className="text-base">Скоро появится</p>

            <div className="flex flex-row items-center my-6">
                <CheckBox label="Я ознакомлен согласен с" labelSize="ml-1 text-xs" checked={agree} onChange={()=>onChangeCheckbox()}/> 
                <a href='http://egov.kz/cms/kk' className='text-xs ml-1 underline text-green'>условиями банковского обслуживания</a>
            </div>

            <ButtomGreen
                label={'Продолжить'} 
                styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-16 rounded-lg'} 
                onClick={() => goNext()}
                />
        </div>
    )
} 