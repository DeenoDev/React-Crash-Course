import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react';


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
);

const App = () => {
  return <RouterProvider router={router} />;
  
};

export default App;