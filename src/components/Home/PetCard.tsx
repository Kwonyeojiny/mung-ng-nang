const PetCard = () => {
  return (
    <div className="w-[200px] h-[280px] flex flex-col justify-center items-center gap-4 border-[2px] p-2 rounded-lg ">
      <div className="text-center">이름</div>
      <div className="w-[100px] h-[100px] border-[2px] rounded-3xl p-4">사진</div>
    </div>
  );
};

export default PetCard;
