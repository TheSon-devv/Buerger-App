import React from 'react';
import classes from "./Layout.module.css";
import Aux from "../../hoc/Auxx";

const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <div className={classes.container}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Layout
