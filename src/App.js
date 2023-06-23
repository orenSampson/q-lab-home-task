import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import UserProfile from './pages/UserProfile/UserProfile';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
  { path: '/user-profile', element: <UserProfile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
