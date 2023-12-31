import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import UserProfile from './pages/UserProfilePage/UserProfilePage';
// import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/user-profile/:userId', element: <UserProfile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
