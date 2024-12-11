import Input from './Input';

type BirthDayInputProps = {
  id: string;
};

const BirthDayInput = ({ id }: BirthDayInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={`${id}-year`} className="text-sm">
        생년월일
      </label>
      <div className="flex gap-1">
        <Input id={`${id}-year`} unit="년" placeholder="YYYY" />
        <Input id={`${id}-month`} unit="월" placeholder="MM" />
        <Input id={`${id}-day`} unit="일" placeholder="DD" />
      </div>
    </div>
  );
};

export default BirthDayInput;
