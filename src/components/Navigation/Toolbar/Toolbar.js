import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.clicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuth={props.isAuthentication}/>
        </nav>
    </header>
);
export default Toolbar
