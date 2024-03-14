"use client";
//custom button that is used throughout the seller UI.

import React from 'react';
import { Button } from '@/components/ui/button';
import { RiLoader4Line } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";


function VibancButton( { isDisabled, isLoader, isIcon, text, className,onClick, ...rest }) {
    // Define the base classes based on the disabled state
    const baseClasses = isDisabled ? 'rounded-full bg-[#519187] px-6' : 'rounded-full bg-[#234c46] px-6';
    return (
        <Button disabled={isDisabled} onClick={onClick} className={`sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[22px] sm:h-6 md:h-8 ${baseClasses} ${className}`} {...rest}>
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
        <Button variant="outline" className={`border-border_light text-[#234C46] rounded-full sm:text-[11px] md:text-[12px] xl:text-[12px] 2xl:text-[18px] sm:py-0 text-center  ${className}`} {...rest}>
            {text}
        </Button>
    );
}
function WithoutBorderVibancButton(props) {
    const { text, className, ...rest } = props;
    // Define the base classes based on the disabled state

    return (
        <Button variant="outline" className={`bg-transparent border-none p-2 text-[#234C4699] focus:outline-none sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[22px] sm:h-6 md:h-8 ${className}`} {...rest}>
            {text}
        </Button>
    );
}

function LightRemoveVibancButton({ isDisabled, isLoader, isIcon, text, className,onClick, ...rest }) {
    const baseClasses = isDisabled ? 'rounded-full bg-[#519187] px-6' : 'rounded-full bg-[#234c46] px-6';
    // Define the base classes based on the disabled state

    return (
        <Button className={`bg-[#ABD0C6] text-[#234C46] sm:text-[11px] md:text-[12px] xl:text-[12px] 2xl:text-[18px] rounded-full hover:bg-bg-[#ABD0C6] ${className}`} {...rest}>
            {text}
            {isIcon && <IoCloseOutline size={20} onClick={onClick} className='inline-block ml-2 text-green_dark' />}
        </Button>
    );
}




export { VibancButton, LightVibancButton, GhostVibancButton, OutlineVibancButton,WithoutBorderVibancButton ,LightRemoveVibancButton};
