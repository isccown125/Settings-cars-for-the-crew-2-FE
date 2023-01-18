import React from 'react';
import NavigationItem from "./NavigationItem";
import styles from './Navigation.module.css';
import './Navigation.css'
import {useMobile} from "../../../hooks/useMobile";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
    let mobile = useMobile();
    //
    if(mobile){
        return (
            <MobileNavigation className={'navigation'}></MobileNavigation>
        )
    }

    return (
        <nav className='navigation'>
            <div className={styles.content}>
                <ul className={styles.container}>
                    <NavigationItem className={styles.item} href={'/'}>Home</NavigationItem>
                    <NavigationItem className={styles.item} href={'/vehicles'}>List Vehicles</NavigationItem>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;