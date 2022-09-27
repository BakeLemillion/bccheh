import React, {useState, useEffect, useRef, useCallback} from "react"
import { DropDown } from "./dropdown"

export const OrganSelect = ({label, data, value, name, onChange, error, defaultOptionLabel}) => {

    const [selectedValue, setSelectedValue] = useState(value)
    const [selectedIndex, setSelectedIndex] = useState(value !== "" ? data.indexOf(value) : null)
    const [search, setSearch] = useState("")
    const [options, setOptions] = useState(data)
    const [showDropdown, setShowDropdown] = useState(false)
    const dropDownElem = useRef()

    const handleClickOutside = useCallback((e) => {
        if(showDropdown && e.target.closest(".dropdown") !== dropDownElem.current) {
            setShowDropdown(false)
            setSearch('')
            setOptions(data)
        }
    }, [showDropdown, setShowDropdown, dropDownElem, data])

    useEffect(()=> {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

    }, [handleClickOutside])

    const changeSelectedHandle = (item, name, index) => {
        setSelectedValue(item)
        setSelectedIndex(index)
        setShowDropdown(false)
        onChange(item, name)
    }

    const searchChangeHandler = (e) => {
        setSearch(e.target.value);
        const filteredOptions = data.filter(opt => {
            return opt.toLowerCase().includes(e.target.value.trim().toLowerCase())
        })
        setOptions(filteredOptions)
    }

    return (
        <div className="form__group">
            <label>{label}</label>
            <div className="dropdown" ref={dropDownElem}>
                <input type={hidden} name={name} value={value} onChange={(e) => onChange(value, name)} />
                <div className="dropdown__selected" onClick={()=> setShowDropdown(!showDropdown)}>
                    {selectedValue ? selectedValue : defaultOptionLabel ? defaultOptionLabel : "Please select one option"}
                </div>
                {showDropdown && <div></div>}
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    )
}