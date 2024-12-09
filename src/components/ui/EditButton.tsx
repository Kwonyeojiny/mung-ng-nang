import clsx from 'clsx';
import { Pencil } from 'lucide-react';

type EditButtonProps = {
  className?: string;
  onClick: () => void;
};

const EditButton = ({ className, onClick }: EditButtonProps) => {
  return (
    <button className={clsx('w-6 h-6 active:opacity-80', className)} onClick={onClick}>
      <Pencil />
    </button>
  );
};

export default EditButton;
