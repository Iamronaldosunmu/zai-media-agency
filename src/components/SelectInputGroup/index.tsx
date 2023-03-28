import { Dispatch, SetStateAction } from "react";

interface SelectInputGroupProps {
  label: string;
  options: string[];
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error: string;
}

const SelectInputGroup: React.FC<SelectInputGroupProps> = ({
  label,
  options,
  name,
  value,
  setValue,
  error,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="name" className="font-bold">
        {label}
      </label>
      <select
        onChange={(e) => setValue(e.target.value)}
        value={value}
        id={name}
        name={name}
        className="w-full p-[10px] border border-black bg-transparent focus:outline-none"
      >
        <option></option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {error && <p className="text-[red] text-[14px]">{error}</p>}
    </div>
  );
};

export default SelectInputGroup;
