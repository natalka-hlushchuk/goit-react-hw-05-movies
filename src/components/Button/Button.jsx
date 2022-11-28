import React from 'react';
import { ButtonStyled } from 'components/Button/Button.styled';

export const Button = ({ onClick, loading }) => (
  <ButtonStyled
    type="button"
    onClick={() => onClick()}
    disabled={loading}
    // style={{ loading? 'backgroundColor: #d5d8ec': 'backgroundColor: #3f51b5' }}
  >
    Load more
  </ButtonStyled>
);
