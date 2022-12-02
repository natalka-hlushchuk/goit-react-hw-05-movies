import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundStyled, ButtonStyled, TextStyled } from './NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <NotFoundStyled>
      <ButtonStyled type="button" onClick={handleGoHome}>
        Back to Home
      </ButtonStyled>
      <TextStyled>The page you are looking for can`t be found</TextStyled>
    </NotFoundStyled>
  );
};
export default NotFound;
