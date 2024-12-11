import { Plus } from 'lucide-react';

type ButtonProps = {
  onClick: () => void | Promise<void>;
};

const AddPetButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center gap-4 w-full h-full rounded-xl bg-brand-deep-blue hover:bg-brand-deep-blue-hover text-white text-2xl"
      onClick={onClick}
    >
      <Plus color="white" />
      반려동물 추가
    </button>
  );
};

export default AddPetButton;
