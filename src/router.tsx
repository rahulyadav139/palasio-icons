import { createBrowserRouter } from 'react-router-dom';

import { Home, Documents, Playground } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/documents',
    element: <Documents />,
  },
  {
    path: '/playground',
    element: <Playground />,
  },
]);
export default router;
