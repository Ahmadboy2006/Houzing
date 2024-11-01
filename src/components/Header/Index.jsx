import React, { useRef, useState, useEffect } from 'react';
import { Wrapper, Section, SearchInput, Filter, Search, SearchModal } from './style';
import Button from "../Generic/Button";
import { getData } from '../Data/data';
import Modal from '../Modal';

function Header({ none, width, onSearch }) {
    const search = useRef();
    const [searchData, setSearchData] = useState('');
    const [sortData, setSortData] = useState('');
    const [initialData, setInitialData] = useState([])
    const [houseData, setHouseData] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        const data = getData();
        setHouseData(data);
        setInitialData(data);
    }, [])

    useEffect(() => {
        if (searchData) {
            const filteredData = initialData.filter((house) => {
                const location = house.location[0] || {};
                return (
                    (location.city.toString().toLowerCase().includes(searchData.toLowerCase())) ||
                    (location.country.toString().toLowerCase().includes(searchData.toLowerCase())) ||
                    (house.description.toString().toLowerCase().includes(searchData.toLowerCase()))
                );
            });
            setHouseData(filteredData);
        }
    }, [searchData, initialData]);

    const onchange = () => {
        const value = search.current.value;
        setSearchData(value);
    };

    const toggleAdvanced = () => {
        setState(!state);
    };

    const handleSubmit = (data) => {
        setSortData(data)
    }

    const handleSearch = () => {
        onSearch(sortData);
    }

    const onView = (value) =>{
        localStorage.removeItem('viewData');
        localStorage.setItem('viewData', JSON.stringify(value));
        window.location.href = '/productview';
    }

    return (
        <Wrapper width={width} none={none}>
            <Section search>
                <SearchInput
                    onChange={onchange}
                    ref={search}
                    height="44"
                    placeholder={'Enter an address, neighborhood, city, or ZIP code'}
                />
                {searchData.length > 0 &&
                    <SearchModal>
                        {houseData.map((value, index) => (
                            <SearchModal.Item onClick={()=>onView(value)} key={index}>{value.location[0].city}, {value.location[0].country}, {value.description}</SearchModal.Item>
                        ))}
                    </SearchModal>}
            </Section>
            <Section>
                <Button onClick={toggleAdvanced} gap="8" type="light">
                    <Filter /> Advanced
                </Button>
                <Button onClick={handleSearch} width="180" height="44" type="primary" gap="8">
                    <Search /> Search
                </Button>
            </Section>
            {state && <Modal initialData={sortData} onSubmit={handleSubmit} toggleAdvanced={toggleAdvanced} />}
        </Wrapper>
    )
}

export default Header;
