import React from 'react';

export default function Input({ type, name, value, onChange, placeholder }) {

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
        placeholder={placeholder} // Aquí usaremos el placeholder que se pasa directamente al componente
        value={value}
        onChange={onChange}
        className="w-48 h-10 px-2 text-base text-red-500 placeholder-center border-2"
    />
    );
}
