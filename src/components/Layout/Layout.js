import React,{useState} from 'react';
import classes from "./Layout.module.css";
import Aux from "../../hoc/Auxx";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { useSelector } from 'react-redux';

const Layout = (props) => {

    const [showSideDrawer,setShowSideDrawer] = useState(false);

    const isAuthentication = useSelector(state => state.auth.token !== null )

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }
    
    const drawerToogleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar clicked={drawerToogleHandler} isAuthentication={isAuthentication}/>
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} isAuthentication={isAuthentication}/>
            <div className={classes.container}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Layout
