import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './page/Profile';
import Login from './page/Login';
import Join from './page/Join';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: 'profile', element: <Profile select title="프로필 선택" />,},
      { path: 'profile/edit', element: <Profile title="프로필 편집" /> },
      { path: 'join', element: <Join /> },
    ],
  },
]);

export default router;
