import React from 'react';

const Button = ({children, variant="primary", className='', ...props}) => {
    const baseStyle = "px-8 py-3 rounded-2xl font-bold font-montserrat transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center cursor-pointer"

    const variants = {
        // Primary variant
        primary: "bg-neon text-navy shadow-lg shadow-neon/20 hover:shadow-neon/50 hover:bg-neon/80",
        
        // Secondary variant
        secondary: "bg-sage text-navy hover:bg-white hover:shadow-lg hover:shadow-white/20",
        
        // Ouline variant
        outline: "border-1 border-neon text-neon hover:bg-neon hover:text-navy",

        // Ghost variant 
        ghost: "bg-transparent text-sage/60 hover:text-white hover:bg-white/5 justify-start",

        // Active Nav 
        active: "bg-neon/10 text-neon border border-neon/50 shadow-[0_0_15px_rgba(0, 255, 130, 0.1)] justify-start"

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
