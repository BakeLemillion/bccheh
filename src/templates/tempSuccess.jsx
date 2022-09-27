import React, { useState, useEffect } from "react";
import {TitlePage, TextInput, PhoneInput, 
    CheckBox, ButtomGreen, ModalWindow, 
    PhoneConfirm, AlertCard, Dot} from "../components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import successIcon from "../assets/imgs/successIcon.svg"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import {nextStep} from "../store/reducers/routes"

export function TempSuccess() {

    const [success, setSuccess] = useState(false)
    const [percentage, setPercentage] = useState(0);

    const timerProps = {
        isPlaying: true,
        size: 100,
        strokeWidth: 4
      };

    const dispatch = useDispatch()



    useEffect(() => {
        setTimeout(() => {
      if (percentage < 90) {
        setPercentage(percentage + 1);
      }
    }, 100);
    setTimeout(() => {
        if (percentage >= 90 && percentage < 100) {
          setPercentage(percentage + 1);
        }

        if(percentage === 100) {
            setSuccess(true)
        }
      }, 1000);
        
    }, [percentage])

    return (
        <div className='flex flex-col items-center justify-center w-[calc(100vw-320px)]'>
            {!success ? <>
                <TitlePage title={'Заявка на открытие счёта'} />
            <p className="text-xl font-bold mb-3">Решение банка</p>
            <p className="text-base mb-6">Пожалуйста, подождите</p>
            <div className="w-28 h-28 flex items-center justify-center">
                <CircularProgressbar 
                {...timerProps}
                    value={percentage} 
                    text={`${percentage}%`} 
                    styles={{
                        text: {
                            fill: '#4D565F',
                            fontSize: '24px',
                          },
                        path: {
                            stroke: `#27AE60`,
                          },
                    }}
                    />
            </div></> : 
            <>
                <div className="h-28 w-28 mb-6">
                    <img src={successIcon} alt="" />
                </div>
                <TitlePage title={'Поздравляем, Ваш счёт открыт!'} />
                <p className="text-text mb-4">Чтобы получить реквизиты и начать пользоваться счётом</p>
                <a href="https://pki.gov.kz/ncalayer/" className="text-xl text-green font-bold underline">Войдите в интернет-банк</a>

            </>}
            
            
            
        </div>
    )
}