import {Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div>
            <h2>admin</h2>
            <Outlet/>
        </div>
    );
};

