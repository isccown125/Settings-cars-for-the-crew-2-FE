import React from 'react';
import NavigationItem from "./NavigationItem";
import styles from './Navigation.module.css';
import './Navigation.css'

function Navigation() {
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