import React from 'react';
import styles from './Footer.module.css';

type FooterProps = {
    children?: React.ReactNode,
    className?: string,
}

const Footer:React.FC<FooterProps>=({children, className= ''})=>{

    return (
        <footer className={`${styles['default-style']} ${className}`}>
            {children}
        </footer>
    );
}

export default Footer;