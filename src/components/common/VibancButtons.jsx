"use client";
//custom button that is used throughout the seller UI.

import React from 'react';
import { Button } from '@/components/ui/button';
import { RiLoader4Line } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';


function VibancButton( { isDisabled, isLoader, isIcon, text, className,onClick, ...rest }) {
    // Define the base classes based on the disabled state
    const baseClasses = isDisabled ? 'rounded-full bg-[#519187] px-6' : 'rounded-full bg-[#234c46] px-6';
    return (
        <Button disabled={isDisabled} onClick={onClick} className={`${baseClasses} ${className}`} {...rest}>
            {isLoader ? (
                <>
                    <RiLoader4Line size={17} className="text-white animate-spin mr-1" />
                    {text}
                </>
            ) : (
                <>
                    {text}
                </>
            )}
            {isIcon && <FaArrowRight color='#FF7236' className='inline-block ml-2' />}
        </Button>
    );
}

function LightVibancButton(props) {
    const { text, className, ...rest } = props;
    // Define the base classes based on the disabled state

    return (
        <Button className={`bg-[#ABD0C6] text-[#234C46] rounded-full ${className}`} {...rest}>
            {text}
        </Button>
    );
}

function GhostVibancButton(props) {
    const { text, className, ...rest } = props;
    // Define the base classes based on the disabled state

    return (
        <Button variant="ghost" className={`${className} rounded-full`} {...rest}>
            {text}
        </Button>
    );
}

function OutlineVibancButton(props) {
    const { text, className, ...rest } = props;
    // Define the base classes based on the disabled state

    return (
        <Button variant="outline" className={`outline outline-1 outline-[#234C46] text-[#234C46] rounded-full ${className}`} {...rest}>
            {text}
        </Button>
    );
}
function WithoutVibancButton(props) {
    const { text, className, ...rest } = props;
    // Define the base classes based on the disabled state

    return (
        <Button variant="outline" className={`bg-transparent border-none p-2 text-[#234C4699] focus:outline-none text-[14px] ${className}`} {...rest}>
            {text}
        </Button>
    );
}





export { VibancButton, LightVibancButton, GhostVibancButton, OutlineVibancButton,WithoutVibancButton };
