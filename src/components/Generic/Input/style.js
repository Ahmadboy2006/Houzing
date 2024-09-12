import styled from 'styled-components';

export const Container = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    min-width: 120px;
    border: 1px solid rgba(230, 233, 236, 1);
    padding: 10px;

    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
    height: ${({ height }) => (height ? `${height}px` : "44px")};
    width: ${({ width }) => (width ? `${width}px` : "200px")};
    &:focus{
    &::placeholder{
        font-weight: 600;
        color: #0413FC;
    };
  };
`;