import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Routes from './routes/index.jsx';

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
