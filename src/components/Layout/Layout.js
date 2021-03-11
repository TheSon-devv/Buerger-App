import React,{useState} from 'react';
import classes from "./Layout.module.css";
import Aux from "../../hoc/Auxx";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {

    const [showSideDrawer,setShowSideDrawer] = useState(true);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }
    
    const drawerToogleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Aux>
            <Toolbar clicked={drawerToogleHandler}/>
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <div className={classes.container}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Layout
