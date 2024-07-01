import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

export default MainLayout