

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Aboutus } from './pages';
import Layout from './components/common/Layout';
import Service from './pages/Service';
import Corebusiness from './pages/Corebusiness';
import Contactus from './pages/Contactus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <Aboutus />,
    },{
      path: '/services',
      element: <Service />,
    },{
      path: '/core-business',
      element: <Corebusiness />,
    },{
      path: '/contact',
      element: <Contactus />,
    }]
  }

]);

function App() {
  return <RouterProvider router={router} />;

}

export default App
