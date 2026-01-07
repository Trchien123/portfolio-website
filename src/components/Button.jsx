import React from 'react';

const Button = ({children, variant="primary", className='', ...props}) => {
    const baseStyle = "px-8 py-3 rounded-2xl font-bold font-montserrat transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center cursor-pointer"

    const variants = {
        // Primary variant
        primary: "bg-neon border-1 hover:border-text-main text-navy shadow-lg shadow-neon/20 hover:shadow-neon/50",
        
        // Secondary variant
        secondary: "bg-sage text-navy hover:bg-white hover:shadow-lg hover:shadow-white/20",
        
        // Ouline variant
        outline: "border-1 border-text-main text-text-main hover:bg-neon hover:text-navy",

        // Ghost variant 
        ghost: "bg-transparent text-text-muted/60 hover:text-text-main hover:bg-text-main/5 justify-start",

        // Active Nav 
        active: "bg-neon/10 text-text-button border border-t/50 shadow-[0_0_15px_rgba(0, 255, 130, 0.1)] justify-start"

    };

    return (
        <button 
            className={`${baseStyle} ${variants[variant]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
