import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from 'components/Loader/Loader.styled';

export function Loader() {
  return (
    <LoaderStyled>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#800080"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
}
