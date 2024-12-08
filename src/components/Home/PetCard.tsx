const PetCard = () => {
  return (
    <div className="flex flex-col gap-2 border-[2px] p-2 rounded-lg ">
      <div className="text-center">이름</div>
      <div className="border-[2px] rounded-3xl p-4">사진</div>
    </div>
  );
};

export default PetCard;
