interface Option {
  id: string;
  value: string;
}

type SwitchProps = {
  name: string;
  label?: string;
  options: Option[];
};

const Switch = ({ name, label, options }: SwitchProps) => {
  return (
    <>
      <div>
        {label && <label className="text-sm">{label}</label>}

        <div className="flex items-center gap-4 w-fit h-10 px-4 border-2 rounded-2xl">
          {options.map(option => (
            <label key={option.id} className="">
              <input
                type="radio"
                name={name}
                id={`${name}-${option.id}`}
                value={option.id}
                className="peer hidden"
              />
              <span className="py-1 px-2 rounded-xl text-sm border-2 border-transparent peer-checked:border-black peer-checked:bg-brand-skyblue hover:cursor-pointer">
                {option.value}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Switch;
