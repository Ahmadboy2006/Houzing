import Houses from "../../assets/icons/houses.svg";
import { styled } from "styled-components";
import { ReactComponent as FilterIcon } from '../../assets/icons/setting-lines.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/filter.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px var(--padding);
  flex-wrap: wrap;
  background: white;
  margin-top: 64px;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 600px) {
    display:  ${({ none }) => (none && 'none')};
    width: ${({ width }) => (width && '80%')};
  }
  
  @media screen and (max-width: 430px) {
    padding: 10px;
  }
`;
export const Section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: ${({search}) => search && 'column'};
  justify-content: end;
  gap: ${({search}) => search ? '0' : '20px'};
  position: relative;

  @media screen and (max-width: 1000px) {
    width: 45%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: space-around;
    padding: 10px;
  }
  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }

`;
export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 2px;
  padding-left: 20px;

  border: 1px solid #e6e9ec;
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
  
  @media screen and (max-width: 600px) {
    border: none;
    border-bottom: 1px solid rgba(230, 233, 236, 1);
  }

  @media screen and (max-width: 410px) {
    &::placeholder {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 410px) {
    &::placeholder {
      font-size: 12.5px;
    }
  }

  background: url(${Houses});
  background-repeat: no-repeat;
  background-size: 20px 14px;
  background-position-y: center;
`;
export const Filter = styled(FilterIcon)``;
export const Search = styled(SearchIcon)``;

export const SearchModal = styled.div`
    width: 98%;
    min-height: 30px;
    max-height: 570px;
    overflow-y: auto;
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 1;
`;

SearchModal.Item = styled.li`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: #f2f2f2;
  }
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #f2f2f2;
`;