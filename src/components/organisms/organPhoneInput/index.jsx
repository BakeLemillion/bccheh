import React from "react"
import "./index.scss"

export function PhoneInput({title, placeholder, errorText, typeInput="phone"}) {

    const [phone, setPhone] = React.useState("")

    const handlePhone = (e) => {
        let item = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        let phoneValue = !item[2] ? item[1] : '(' + item[1] + ') ' + item[2] + (item[3] ? '-' + item[3] : '');
        setPhone(phoneValue)
    }

    return(
        <div className="w-full">
            <div className="w-full">
                <label htmlFor="first_name" className="block text-sm font-medium text-text mb-1">{title}</label>
    
                    <input type="text"
                    value={`${phone}`}
                    onChange={(e)=> handlePhone(e)}
                    className="bg-gray border border-gray text-text text-sm rounded-lg 
                    focus:gray focus:border-gray active:border-gray block w-full px-4 py-3.5 outline-0" 
                    placeholder={placeholder} required />             
                
                <p className="mt-2 text-sm text-green-600"></p>
            </div>
            
        </div>
    )
}