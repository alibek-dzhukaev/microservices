import {Link} from "react-router-dom";
import {shopRoutes} from '@packages/shared/src/routes/shop'

export const App = () => {
    return (
        <div>
            <h2>shop</h2>

            <div>
                <Link to={shopRoutes.second}>go to second page</Link>
            </div>
        </div>
    );
};

