import React from 'react';
import SimpleButtonConfig from '../Config/config.button.json';
interface SimpleButtonProps {
    text: string;
    borderRadius?: string;
    onClick: () => void;
    type?: any;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ text, borderRadius = 'rounded-lg', onClick, type = 'button' }) => {

    var configStr = localStorage.getItem('simpleButtonConfig');
    let color = "";
    let hover = "";
    let textColor = "";
    console.log(configStr);
    if (configStr) {
        const config = JSON.parse(configStr); // Chuyển đổi chuỗi JSON thành đối tượng JavaScript

        // Lấy giá trị từ đối tượng config
        color = `bg-[${config.simpleButtonConfig.color}]`;
        hover = `bg-[${config.simpleButtonConfig.hoverColor}]`;
        textColor = `text-[${config.simpleButtonConfig.textColor}]`;
    }
    else {
        color = `bg-[${SimpleButtonConfig.simpleButtonConfig.color}]`;
        hover = `bg-[${SimpleButtonConfig.simpleButtonConfig.hoverColor}]`;
        textColor = `text-[${SimpleButtonConfig.simpleButtonConfig.textColor}]`;

    }
    console.log("Color Button: " + color);
    console.log("Color Button Hover: " + hover);
    console.log("Color Button Text: " + textColor);
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${color}  ${textColor} py-2 px-10 ${borderRadius} focus:outline-none focus:ring-2 focus:ring-yellow-200 transform transition-transform duration-300 hover:${hover} hover:scale-105`}
        >
            {text}
        </button>
    );
};

export default SimpleButton;
