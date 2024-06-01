export default function Button({ text, type, click }) {
    return (
        <>
            {type === 1 ? (
                <button onClick={click}  className="flex items-center font-bold  bg-[#CCCCCC] justify-center gap-2 h-[44px] w-[348px] border-2">
                    <p>{text}</p>
                </button>
            ) : (
                <button onCanPlay={click}  className="flex items-center font-bold bg-[#151E3F] text-white justify-center gap-2 h-[44px] w-[348px] border-2">
                    <p>{text}</p>
                </button>
            )}
        </>
    );
}
