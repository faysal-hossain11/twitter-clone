interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange,
}) => {
    return (
        <input 
            placeholder={placeholder}
            value={value}
            type={type}
            disabled={disabled}
            onChange={onChange}
            className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md text-white outline-none focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"

        />
    );
};

export default Input;