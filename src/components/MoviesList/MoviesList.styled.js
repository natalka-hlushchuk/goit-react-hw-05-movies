import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;
export const MoviesItem = styled(Link)`
  width: 400px;
  :hover,
  :focus {
    color: #800080;
    -webkit-text-shadow: 2px 2px 2px #000;
    -moz-text-shadow: 2px 2px 2px #000;
    text-shadow: 2px 2px 2px #000;
  }
`;
