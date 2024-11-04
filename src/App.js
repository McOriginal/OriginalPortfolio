import './App.css';
import Dashboard from './Dashboard/Dashboard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Home/HomePage';

const route = createBrowserRouter([
  {path: '/', element: <HomePage /> },
  {path: '/dashboard', element: <Dashboard /> }
])




function App() {
  return <RouterProvider router={route} /> ;
}

export default App;
