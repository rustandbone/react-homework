import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './page/Profile';
import Login from './page/Login';
import Join from './page/Join';
import ProfileCreate from './page/profile/ProfileCreate';
import ProfileEdit from './page/profile/ProfileEdit';
import ProfileSelect from './page/profile/ProfileSelect';
import Landing from './page/Landing';
import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: 'profile', 
      element: <Profile />,
      children: [
          { index: true, element: <ProfileSelect select title="프로필 선택" /> },
          { path: 'create', element: <ProfileCreate /> },
          { path: 'edit', element:<ProfileSelect title="프로필 편집" />},
          { path: 'each', element:<ProfileEdit item />},
        ]
      },
      { path: 'join', element: <Join /> },
      { path: 'landing', element: <Landing /> },
    ],
  },
]);

export default router;
