import styled from 'styled-components';

import icon from '../../img/oopss.jpg';
export const NotFoundStyled = styled.div`
  width: 100vw;
  height: 100vh;

  margin-right: auto;
  margin-left: auto;
  background-repeat: no-repeat;
  background-size: contain;

  color: white;
  text-align: center;
  background-position: 50% 50%;
  background-image: url(${icon});
`;
export const ButtonStyled = styled.button`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  min-width: 50px;
  border-radius: 4px;
  border: none;

  color: black;
  background-color: #990066;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.86;
  text-align: center;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #800080;
  }
`;
export const TextStyled = styled.p`
  font-size: 20px;
  color: black;
`;
