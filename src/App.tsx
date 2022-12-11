import React from 'react';
//import Routes from './routes/routes';
import Landing from './pages/landing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
])

function App() {
  return (
    // <Routes />
    <RouterProvider router={router} />
  );
}

export default App;
