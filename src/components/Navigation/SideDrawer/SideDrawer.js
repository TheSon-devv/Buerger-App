import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./SideDrawer.module.css";
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }

    return (
        <Auxx>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxx>

    )
}

export default SideDrawer
