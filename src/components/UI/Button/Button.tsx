import React from 'react';
import './Button.css'

type Props = {
    children?: React.ReactNode,
    className?: string,
    type?: "button" | "submit" | "reset";
    classButtonStyle?: "purple",
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}



const Button: React.FC<Props> = ({children, className, type, classButtonStyle, onClick}) =>{
    const classes = `${(className)? className: ''} ${(classButtonStyle)? classButtonStyle :'btn-default'}`;

 return (
     <button
        className={classes}
        type={type}
        onClick={onClick}
     >
         {children}
     </button>
 );}

export default Button;