import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage.jsx';
import Home from './components/Homepage/Home.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Blog from './components/Blog/Blog.jsx';
import AllChef from './components/AllChef/AllChef.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Terms from './components/Terms/Terms.jsx';
import Gallery from './components/Gallery/Gallery.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5500/chefdata'),
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'chefdetails/:id',
        element: <PrivateRoute> <ChefDetails></ChefDetails> </PrivateRoute>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>
      },

    ]
    
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>      
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
