import React, { useState, useEffect } from 'react';
import Button from "../Generic/Button";
import { ModalInp, InpCont1, InpH1, InpCont2, Input } from './style';
import Select from "react-select";

function Modal({ toggleAdvanced, onSubmit, initialData }) {

    const [formData, setFormData] = useState({
        city: '',
        country: '',
        state: '',
        zip: '',
        rooms: '',
        size: '',
        type: '',
        minPrice: '',
        maxPrice: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData, toggleAdvanced]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submit = () => {
        onSubmit(formData);
        toggleAdvanced();
        console.log(formData);
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#fff",
            borderRadius: "8px",
            border: state.isFocused ? "2px solid #0061DF" : "1px solid #ccc",
            boxShadow: state.isFocused ? "0 0 5px rgba(49, 103, 250, 0.5)" : "none",
            padding: "0px", // 🔥 BO'SH JOYNI OLIB TASHLASH
            minHeight: "40px", // 🔥 Minimal balandlik berish
            display: "flex", // 🔥 Matnni siqilishini oldini olish
            alignItems: "center", // 🔥 Matnni markazga olish
            transition: "all 0.3s ease",
            "&:hover": {
                borderColor: "#0061DF",
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }),
        option: (provided, state) => ({
            ...provided,
            borderRadius: "2px",
            backgroundColor: state.isFocused ? "#0061DF" : "white",
            color: state.isFocused ? "white" : "black",
            cursor: "pointer",
            padding: "5px 3px",
            margin: "0px",
            transition: "all 0.2s ease-in-out",
            "&:active": {
                backgroundColor: "#0061DF",
                color: "white",
            },
        }),
    };


    const options = [
        { value: "apartment", label: "Apartment" },
        { value: "house", label: "House" },
        { value: "townhouse", label: "Townhouse" },
        { value: "villa", label: "Villa" },
        { value: "mansion", label: "Mansion" },
        { value: "condo", label: "Condo" },
    ];

    const handleSelect = (selectedOption) => {
        setFormData(prevState => ({
            ...prevState,
            type: selectedOption.value
        }))
    }

    return (
        <div>
            <ModalInp>
                <form onSubmit={submit}>
                    <InpCont1>
                        <InpH1>Address</InpH1>
                        <Input type='text' name='country' value={formData.country} onChange={handleChange} placeholder='Country' />
                        <Input type='text' name='state' value={formData.state} onChange={handleChange} placeholder='State' />
                        <Input type='text' name='city' value={formData.city} onChange={handleChange} placeholder='City' />
                        <Input type='number' name='zip' value={formData.zip} onChange={handleChange} placeholder='ZIP code' />
                        <InpH1>Apartment info</InpH1>
                        <Input type='number' name='rooms' value={formData.rooms} onChange={handleChange} placeholder='Rooms' />
                        <Input type='' name='size' value={formData.size} onChange={handleChange} placeholder='Size' />
                        <Select
                            type='text'
                            options={options}
                            styles={customStyles}
                            placeholder='Type'
                            onChange={handleSelect}
                        />
                        <InpH1>Price</InpH1>
                        <Input type='number' name='minPrice' value={formData.minPrice} onChange={handleChange} placeholder='Min Price' />
                        <Input type='number' name='maxPrice' value={formData.maxPrice} onChange={handleChange} placeholder='Max Price' />
                    </InpCont1>
                    <InpCont2>
                        <Button width='128' type="submit">Submit</Button>
                        <Button type="bLight" onClick={toggleAdvanced}>Cancel</Button>
                    </InpCont2>
                </form>
            </ModalInp>
        </div>
    )
}

export default Modal;


