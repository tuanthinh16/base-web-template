import React from 'react';
import { textFocusBorder, textHoverBorder } from '../Config/config.theme.js';

interface SimpleInputProps {
    type: 'text' | 'email' | 'password';
    borderRadius?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInput: React.FC<SimpleInputProps> = ({ type, borderRadius = 'rounded-md', placeholder, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={`border p-2 ${borderRadius} focus:outline-none focus:ring-2 focus:${textFocusBorder} transition-shadow duration-300 hover:${textHoverBorder} hover:shadow-lg`}
        />
    );
};

export default SimpleInput;
