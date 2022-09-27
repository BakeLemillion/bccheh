import React from "react"
import { TitlePage, TextInput, CompanyInfoCard, CheckBox, 
    ProgressInfo, ButtomGreen, HeadOfCompany, TooInfoItems } from "../components"
import {INFORMATION_DATA} from "../constant"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import {nextStep} from "../store/reducers/routes"

export const TempInfoPage = () => {

    const [correct, setCorrect] = React.useState(true)
    const [agree, setAgree] = React.useState(false)

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const handleCorrect = (value) => {
        setCorrect(value)
    }

    const goNext = () => {
        navigate("/company_accandtransfers")
        dispatch(nextStep())
    }

    const onChangeCheckbox = () => {
        setAgree(!agree)
    }

    return (
        <div className='w-100 h-100'>
            <TitlePage title={INFORMATION_DATA} />
            <div>
                <TooInfoItems checked={agree} onChangeCheckbox={onChangeCheckbox} correct={correct} handleCorrect={handleCorrect} />
            </div>
            
            <ButtomGreen
                label={'Продолжить'} 
                styleClass={'bg-green hover:bg-green text-white font-medium py-3 px-16 rounded-lg'} 
                onClick={() => goNext()}
                />
        </div>
    )
}  