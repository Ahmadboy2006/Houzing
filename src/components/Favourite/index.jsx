import React, { useState, useEffect } from 'react';
import { Containerr } from './style';
import { Container, Title, TitleMini } from '../Properties/style';
import Footer from '../Footer';
import HouseCard from '../HouseCard';

function Favourite() {

    const [state, setState] = useState([]);

    useEffect(() => {
        const allFavourites = Object.keys(localStorage)
          .filter(key => !isNaN(key))
          .map(key => JSON.parse(localStorage.getItem(key)));
        setState(allFavourites);
    }, []);
    

    return (
        <Containerr>
            <Title fav>Favourite</Title>
            <TitleMini fav>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</TitleMini>
            <Container mb>
                {state.length > 0  ? state.map((value)=>{
                    return <HouseCard key={value.id} data={value}></HouseCard>
                }) : <h1>No favourites added yet.</h1>}
            </Container>
            <Footer />
        </Containerr>
    );
}

export default Favourite;

