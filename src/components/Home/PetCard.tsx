import { useState } from 'react';

const PetCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prev => !prev);
  };

  return (
    <div
      className={` w-[160px] aspect-[5/7]  flex flex-col justify-center items-center gap-4 border-[2px] p-6 rounded-lg ${
        isClicked ? 'shadow-blue' : 'shadow-bottom-md'
      }`}
      onClick={handleClick}
    >
      <div className="text-center text-xl">이름</div>
      <div className=" border-[2px] w-full aspect-[1/1] rounded-[40px] p-4">사진</div>
    </div>
  );
};

export default PetCard;
