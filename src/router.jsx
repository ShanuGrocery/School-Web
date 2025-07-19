
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
      // Add more routes here later if needed
    ],
  },
]);

export default router;
