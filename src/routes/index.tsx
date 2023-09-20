import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllBooks from "../components/AllBooks";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";
import AddBooks from "../components/AddBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import NotFound from "../components/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/book",
                element: <AllBooks />
            },
            {
                path: "/add",
                element: <AddBooks />
            },
            {
                path: "/book-details/:id",
                element: <BookDetails />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element:<Login />
            },
            {
                path: "*",
                element: <NotFound />
            } 
        ]
    },
   
]);

export default routes;