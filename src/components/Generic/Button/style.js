import styled from 'styled-components';

const getType = ({ type }) => {
    switch (type) {
        case "dark":
            return {
                background: "transparent",
                border: "1px solid #FFFFFF",
                color: "white"
            };
        case "light":
            return {
                background: "#FFFFFF",
                border: "1px solid #E6E9EC",
                color: "#0D263B"
            };
        case "primary":
            return {
                background: "#0061DF",
                border: "1px solid #0061DF",
                color: "white"
            };
        case "bLight":
            return {
                background: "FFFFFF",
                border: "1px solid rgba(13, 38, 59, 1)",

            }
        default:
            return {
                background: "#0061DF",
                border: "none",
                color: "#FFFFFF"
            };
    };
};

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    min-width: 120px;

    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
    height: ${({ height }) => (height ? `${height}px` : "44px")};
    width: ${({ width }) => (width ? `${width}px` : "130px")};
    gap: ${({ gap }) => (gap && `${gap}px`)};
    margin: ${({ margin })=>(margin && `${margin}px`)};

    @media screen and (max-width: 600px) {
        display: ${({ login }) => login ? 'none' : ' '};
    }

    cursor: pointer;
    ${getType}
    opacity: 0.83;
    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: 1;
    }
`;