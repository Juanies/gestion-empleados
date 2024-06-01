export default function Input({ type }) {
    let placeholder;

    if (type === "password") {
        placeholder = "Contraseña";
    } else if (type === "email") {
        placeholder = "Correo electrónico";
    } else if (type === "username") {
        placeholder = "Nombre de usuario";
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className="  border-2 h-[44px]  w-[348px] text-[15px] placeholder:text-center px-2"        />
    );
}
