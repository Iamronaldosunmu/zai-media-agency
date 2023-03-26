interface InputGroupProps {
    label: string;
    name: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, name }) => {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <label htmlFor={name} className="font-bold text-[18px]">{label}</label>
      <input id={name} name={name} className="w-full p-[8px] border border-black bg-transparent focus:outline-none" />
    </div>
  );
};

export default InputGroup;
