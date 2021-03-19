import React from 'react';
import Logout from '../../../container/Logout/Logout';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";
const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuth ? <NavigationItem link="/order" >Order</NavigationItem> : null }
        {
            !props.isAuth ? <NavigationItem link="/auth" >Auth</NavigationItem> : <NavigationItem link="/logout" >LogOut</NavigationItem>
        }
    </ul>
)

export default NavigationItems;
