import React, {useState} from 'react';
import styles from "./MobileNavigation.module.css";
import NavigationItem from "./NavigationItem";
import Button from "../Button/Button";
import { GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

interface Props {
    className?: string;
    children?: React.ReactNode;
}


const MobileNavigation:React.FC<Props> = ({className, children}) =>{
    const [isVisible, setIsVisible] = useState(false);


    const btnClickHandler = ()=>{
        setIsVisible(!isVisible);
        console.log(isVisible)
    }

    const navbar = <div className={styles['content-navbar']}>
        <Button className={styles['btn-style']}
                onClick={btnClickHandler}
        >
            <AiOutlineClose/>
        </Button>
        <ul className={styles.container}>
            <NavigationItem className={styles.item} href={'/'}>Home</NavigationItem>
            <NavigationItem className={styles.item} href={'/vehicles'}>List Vehicles</NavigationItem>
        </ul>
    </div>;


    return (
        <nav className={`${className}`}>
            <div className={styles.content}>
            <Button
                onClick={btnClickHandler}
                className={styles['btn-style']}
            >
                <GiHamburgerMenu />
            </Button>
            {isVisible && navbar}
            </div>
        </nav>
    );
 }

export default MobileNavigation;