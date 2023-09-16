import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllBooks from "../components/AllBooks";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails";

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
                path: "/book-details/:id",
                element: <BookDetails />
            },
        ]
    },
   
]);

export default routes;