import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './page/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Profile select title="프로필 선택" /> },
      { path: 'edit', element: <Profile title="프로필 편집" /> },
    ],
  },
]);

export default router;
