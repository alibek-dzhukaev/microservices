import {useState} from 'react'
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import avatarPng from '../assets/avatar.png'
import logoJPG from '../assets/logo.jpg'
import Bacteria from '../assets/bacteria.svg'
import {shopRoutes} from '@packages/shared/src/routes/shop'
import {adminRoutes} from '@packages/shared/src/routes/admin'

function TODO() {
    TODO2()
}

function TODO2() {
    throw new Error()
}

export const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        // setCount(prevState => prevState + 1)
        TODO()
    }
    // TODO('123123')
    //
    //
    // if (__PLATFORM__ === 'desktop') {
    //     return <div>IS DESKTOP platform</div>
    // }
    //
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>IS MOBILE PLATFORM</div>
    // }

    return (
        <div data-test-id="app.DataTestId">
            <h1 data-test-id="platform">PLATFORM={__PLATFORM__}</h1>
            <h2 data-test-id="platform">Host</h2>
            <div>
                <img width={100} height={100} src={avatarPng} alt=""/>
                <img width={100} height={100} src={logoJPG} alt=""/>
            </div>
            <div>
                <Bacteria className={classes.icon} width={150} height={150}/>
            </div>
            <Link to={adminRoutes.about}>About</Link>
            <br/>
            <Link to={shopRoutes.main}>Shop | main</Link>
            <Link to={shopRoutes.second}>Shop | second</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>Inc</button>

            <Outlet/>
        </div>
    );
};

