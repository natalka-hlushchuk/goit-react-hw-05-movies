import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/index';
import { LayoutStyled } from 'Layout/Layout.styled';

export const Layout = () => {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};
