import React, { useState, useEffect } from 'react';
import Button from "../Generic/Button";
import { ModalInp, InpCont1, InpH1, InpCont2, Input } from './style';

function Modal({ toggleAdvanced, onSubmit, initialData }) {

    const [formData, setFormData] = useState({
        city: '',
        country: '',
        description: '',
        zip: '',
        rooms: '',
        size: '',
        sort: '',
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

    return (
        <div>
            <ModalInp>
                <InpCont1>
                    <InpH1>Address</InpH1>
                    <Input name='country' value={formData.country} onChange={handleChange} placeholder='Country' />
                    <Input name='description' value={formData.description} onChange={handleChange} placeholder='State' />
                    <Input name='city' value={formData.city} onChange={handleChange} placeholder='City' />
                    <Input name='zip' value={formData.zip} onChange={handleChange} placeholder='ZIP code' />
                    <InpH1>Apartment info</InpH1>
                    <Input name='rooms' value={formData.rooms} onChange={handleChange} placeholder='Rooms' />
                    <Input name='size' value={formData.size} onChange={handleChange} placeholder='Size' />
                    <Input name='sort' value={formData.sort} onChange={handleChange} placeholder='Sort' />
                    <InpH1>Price</InpH1>
                    <Input name='minPrice' value={formData.minPrice} onChange={handleChange} placeholder='Min Price' />
                    <Input name='maxPrice' value={formData.maxPrice} onChange={handleChange} placeholder='Max Price' />
                </InpCont1>
                <InpCont2>
                    <Button width='128' type="primary" onClick={submit}>Submit</Button>
                    <Button type="bLight" onClick={toggleAdvanced}>Cancel</Button>
                </InpCont2>
            </ModalInp>
        </div>
    )
}

export default Modal;


