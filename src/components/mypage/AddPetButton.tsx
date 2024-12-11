import { Plus } from 'lucide-react';

type ButtonProps = {
  onClick: () => void | Promise<void>;
};

const AddPetButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      className="shrink-0 flex flex-col items-center justify-center gap-4 w-96 rounded-xl bg-brand-deep-blue text-white text-2xl"
      onClick={onClick}
    >
      <Plus color="white" />
      반려동물 추가
    </button>
  );
};

export default AddPetButton;
