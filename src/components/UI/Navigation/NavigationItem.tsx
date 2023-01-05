import React from 'react';
import {Link} from "react-router-dom";


type NavigationProps = {
    className?: string,
    href?: string,
    children?: React.ReactNode,
}

const NavigationItem:React.FC<NavigationProps> = ({className='', href='#', children})=>{

    return (
        <>
            <li className={className}>
                <Link to={href}>
                    {children}
                </Link>
            </li>
        </>
    );
}

export default NavigationItem;