import { Dispatch, SetStateAction } from "react";

interface InputGroupProps {
  label: string;
  name: string;
  error: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  validateField: (value: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  name,
  error,
  value,
  setValue,
  validateField,
}) => {
  return (
    <div className="flex flex-col  w-full">
      <label htmlFor={name} className="font-bold text-[18px] mb-[8px]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
            setValue(e.target.value);
            validateField(e.target.value)
        }}
        className="w-full p-[8px] border border-black bg-transparent focus:outline-none"
      />
      {error && <p className="text-[red] text-[14px]">{error}</p>}
    </div>
  );
};

export default InputGroup;
