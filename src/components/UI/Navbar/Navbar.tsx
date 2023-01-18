import React from 'react';

interface Props {
    className?: string,
    children?: React.ReactNode,
}

const Navbar:React.FC<Props> = ({children, className}) => (



    <section className={`navbar ${className}`}>
        {children}
    </section>
);

export default Navbar;