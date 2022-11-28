import React from 'react';
import { ButtonStyled } from 'components/Button/Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick, loading }) => {
  return (
    <ButtonStyled type="button" onClick={() => onClick()} disabled={loading}>
      Load more
    </ButtonStyled>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
