import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [

            {
                path: "/test"
                ,element: <div>
            <h1 className="text-5xl text-red-500">test</h1>
        </div>
    }
]
},
])

export default routes;