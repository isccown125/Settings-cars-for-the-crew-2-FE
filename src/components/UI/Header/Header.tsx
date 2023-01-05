import React from 'react';

type HeaderProps = {
    className?: string,
    children?: React.ReactNode,
}

const Header:React.FC<HeaderProps> =({children, className = ''})=>{
    return (
        <header className={className}>
            {children}
        </header>
    );
}

export default Header;