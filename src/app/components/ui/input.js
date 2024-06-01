import React from 'react';

export default function Input({ type, name, value, onChange }) {
    let placeholder;

    if (type === "password") {
        placeholder = "Contraseña";
    } else if (type === "email") {
        placeholder = "Correo electrónico";
    } else if (type === "text" && name === "username") {
        placeholder = "Nombre de usuario";
    }

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border-2 h-[44px] w-[348px] text-[15px] placeholder:text-center px-2"
        />
    );
}
