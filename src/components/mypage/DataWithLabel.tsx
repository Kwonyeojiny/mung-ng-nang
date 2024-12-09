import clsx from 'clsx';
import Button from '../ui/Button';

type DataWithLabelProps = {
  type?: 'text' | 'button';
  label: string;
  value: string | number | boolean;
  onClick?: () => void;
  className?: string;
};

const DataWithLabel = ({ type = 'text', label, value, onClick, className }: DataWithLabelProps) => {
  return (
    <div className={clsx('flex gap-4 text-md', className)}>
      <p className="font-semibold">{label}</p>
      {type === 'button' ? (
        <Button type="link" onClick={onClick}>
          {value}
        </Button>
      ) : (
        <p className="font-sans">{value}</p>
      )}
    </div>
  );
};

export default DataWithLabel;
