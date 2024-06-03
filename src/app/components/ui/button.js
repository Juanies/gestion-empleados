export default function Button({ text, type, typebutton, click }) {
    return (
        <>
            {typebutton === 1 ? (
                <button onClick={click} type={type}   className="flex items-center font-bold  bg-[#CCCCCC] justify-center gap-2 h-[44px] w-[348px] border-2">
                    <p>{text}</p>
                </button>
            ) : (
                <button onClick={click} type={type}  className="flex items-center font-bold bg-[#151E3F] text-white justify-center gap-2 h-[44px] w-[348px] border-2">
                    <p>{text}</p>
                </button>
            )}
        </>
    );
}
