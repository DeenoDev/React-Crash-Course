import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPages from './pages/JobsPages';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<HomePage/>} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;