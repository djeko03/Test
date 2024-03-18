import React from "react";
import cn from 'classnames';
import './index.css';

interface IButton {
    buttonText: string,
    onClick: ()=> void,
    isActive: boolean,
}

export const Button:React.FC<IButton> = ({
    buttonText,
    onClick,
    isActive,
}) => {
    return (
        <button onClick={onClick} className={cn('button', isActive && 'button_active')}>
            {buttonText}
        </button>
    )
}