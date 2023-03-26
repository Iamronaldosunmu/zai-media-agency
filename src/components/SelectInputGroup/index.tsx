interface SelectInputGroupProps {
  label: string;
    options: string[];
    name: string;
}

const SelectInputGroup: React.FC<SelectInputGroupProps> = ({ label, options, name }) => {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <label htmlFor="name" className="font-bold">{label}</label>
          <select id={name} name={name} className="w-full p-[10px] border border-black bg-transparent focus:outline-none">
              <option></option>
              {options.map(option => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
};

export default SelectInputGroup;
