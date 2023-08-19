import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './page/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Profile select /> },
      { path: 'edit', element: <Profile /> },
    ],
  },
]);

export default router;
