import React from "react"
import logo from "../../assets/imgs/Logo bcc.kz.svg"
import { APPLICATION_OPENING_ACCOUNT, IF_U_HAVE_QUESTIONS, LICENSE } from "../../constant"
import { WhatsAppLogo } from "../../assets/imgs/whatsappLogo"
import { Stepper } from "../stepper"
import { useSelector, useDispatch } from "react-redux"
import { matchRoutes, useLocation } from "react-router-dom"
import { actionActivePage } from "../../store/reducers/routes"
import "./index.scss"

export function NavBar({children}) {

    const location = useLocation()
    
    console.log("location", location)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="sideBar">
                <div className="flex-col items-start justify-start">
                    <div className="flex  max-h-8 max-w-31 mb-11">
                        <img src={logo} alt="logo-bcc"/>
                    </div>
                    <h5 className="font-bold text-xl mb-4">{APPLICATION_OPENING_ACCOUNT}</h5>
                    <div className="sideBar-steps">
                        <Stepper />
                    </div> 
                </div>
                <div className="flex-col items-start justify-start">
                    <p className="text-xs font-normal color-text mb-3">{IF_U_HAVE_QUESTIONS}</p>
                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-green focus:ring-4 focus:outline-none focus:ring-gray-100 py-1 px-3 rounded-lg text-xs leading-normal text-center text-green inline-flex items-center">
                    <WhatsAppLogo />
                    Написать в поддержку
                    </button>
                    <p className="text-xs font-normal text-text_gray mt-4">{LICENSE}</p>

                </div>  
            </div>
                <div className="navbar-container">
                    <div className="content-container">
                        {children}
                    </div>
                </div>

        </div>
    )
}