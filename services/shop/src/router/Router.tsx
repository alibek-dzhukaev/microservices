import {App} from "../components/App";
import {Suspense} from "react";
import {Shop} from "../pages/shop";
import {createBrowserRouter} from "react-router-dom";

const routes = [
    {
        path: '/shop',
        element: <App/>,
        children: [
            {
                path: '/shop/main',
                element: (
                    <Suspense fallback="loading...">
                        <Shop/>
                    </Suspense>
                )
            },
            {
                path: '/shop/second',
                element: (
                    <Suspense fallback="loading...">
                        <div style={{color: 'blue'}}>Second page</div>
                    </Suspense>
                )
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes