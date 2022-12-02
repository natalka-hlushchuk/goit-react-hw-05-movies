import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  max-width: 600px;
  margin-bottom: 20px;
  background-color: #fff;
`;
export const InputSearchForm = styled.input`
  display: inline-block;
  width: 600px;
  font-size: 18px;
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    color: grey;
    font-size: 15px;
  }
`;
export const ButtonSearchForm = styled.button`
  display: inline-block;
  min-width: 80px;
  height: 36px;
  opacity: 0.6;
  background-color: #990066;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  border: none;
  font-size: 20px;

  cursor: pointer;
  :hover,
  :focus {
    background-color: #800080;
    opacity: 1;
  }
`;
