import React from 'react'


const Button = ({ text, isThemeToggle, onClick, icon}) => {
    return (
        <div>
            <button
                className="px-4 py-2 bg-zinc-400 text-black rounded cursor-pointer hover:bg-gray-200 transition"
                onClick={onClick}
            >
                {icon && <img src={icon} alt="icon" className="w-6 h-6" />} {/* Show icon if provided */}
                {text && <span>{text}</span>} {/* Show text if provided */}
            </button>
            
        </div>
    )
}

export default Button