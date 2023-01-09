import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
    className?: string,
    children?: React.ReactNode,
}

const Header:React.FC<HeaderProps> =({children, className})=>{
    return (
        <header className={`${styles.style} ${className}`}>
            {children}
        </header>
    );
}

export default Header;