import { BlueButton, YellowButton } from '../ui/Button';
import Input from '../ui/Input';

const HomeCalculator = () => {
  return (
    <div className=" border-[2px] p-8 rounded-lg shadow-bottom-gray flex flex-col gap-8">
      <h3 className="text-center text-xl">필요 칼로리 계산기</h3>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input id="age" label="나이" type="text" />
          <Input id="weight" label="체중" type="text" />
          <Input id="weight" label="중성화 여부" type="text" />

          <div className="flex justify-between gap-4 ">
            <div className="text-sm">다이어트 필요 여부</div>
            <BlueButton text="비만도 확인" className="h-10" />
          </div>
        </div>

        <YellowButton text="계산하기" />
      </form>
    </div>
  );
};

export default HomeCalculator;
