import App from '../App.jsx';

import Chatbot from "../pages/Chatbot.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";


const Routes = [
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Chatbot/>
      }
    ]
  },

]

export default Routes;