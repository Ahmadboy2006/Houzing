import React from 'react';
import { Container, TextContainer, TitleContainer, AvatarContainer } from './style';

function TestCard({ dataTest = {} }) {

    const {
        text,
        title,
        job,
        avatar
    } = dataTest;
    

    return (
        <Container>
            <TextContainer>
                <TextContainer.Text txt={true}>{text}</TextContainer.Text>
            </TextContainer>
            <TitleContainer>
                <TitleContainer.Item>{title}</TitleContainer.Item>
                <TitleContainer.Title>{job}</TitleContainer.Title>
            </TitleContainer>
            <AvatarContainer>
                <AvatarContainer.Item src={avatar}></AvatarContainer.Item>
            </AvatarContainer>
        </Container>
    )
}

export default TestCard
