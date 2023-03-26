interface InputGroupProps {
  label: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label }) => {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <label className="font-bold text-[18px]">{label}</label>
      <input className="w-full p-[8px] border border-black bg-transparent focus:outline-none" />
    </div>
  );
};

export default InputGroup;
