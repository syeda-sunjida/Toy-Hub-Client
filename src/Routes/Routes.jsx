import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
// import CardSection from "../pages/Home/About/CardSection";
// import CardDetails from "../pages/Home/About/CardDetails";
import AllToys from "../AllToys";
import AddToy from "../addToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
            path: '/login', 
            element: <Login></Login>
        }, 
        {
            path: '/signup', 
            element: <SignUp></SignUp>
        },
        // {
        //   path: 'book/:id', 
        //   element: <BookService></BookService>, 
        //   loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        // },
        {
        
        
          // path: 'cradSection', 
          // element: <CardSection></CardSection> , 
          
        },
        // {
        //   path: 'cardDetails/:id', 
        //   element: <CardDetails></CardDetails> , 
        //   loader: ({params}) => fetch(`http://localhost:5000/services/${params._id}`)
        // },
        {
          path: 'bookings', 
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>
        },
        {
        path:'/addToy',
        element: <AddToy></AddToy>
        }
      
      ]
    },
  ]);


  export default router;