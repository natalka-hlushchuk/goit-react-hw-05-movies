import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
export const MovieDetailsStyled = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #fff;
  font-size: 18px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const ButtonGoBack = styled(Link)`
  display: flex;
  min-width: 100px;
  margin-bottom: 20px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  height: 36px;
  opacity: 0.6;
  background-color: #990066;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  border: none;
  font-size: 15px;

  cursor: pointer;
  :hover,
  :focus {
    background-color: #800080;
    opacity: 1;
  }
`;
export const MovieInfoStyled = styled.div`
  display: flex;
  gap: 36px;
`;
export const MovieName = styled.h3`
  margin-bottom: 10px;
  font-size: 32px;
`;
export const Score = styled.p`
  margin-bottom: 20px;
`;
export const SubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 20px;
`;
export const OverviewText = styled.span`
  display: block;
  margin-bottom: 20px;
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const GenresItem = styled.li`
  list-style: none;
`;
export const AdditionalInfo = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const AdditionalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const AdditionalItem = styled(NavLink)`
  width: 400px;
  font-size: 20px;
  &.active {
    color: #990066;
    font-weight: 700;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #800080;
    -webkit-text-shadow: 2px 2px 2px #000;
    -moz-text-shadow: 2px 2px 2px #000;
    text-shadow: 2px 2px 2px #000;
  }
`;
