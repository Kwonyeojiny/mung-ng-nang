import Button from '../ui/Button';
import Input from '../ui/Input';
import Switch from '../ui/Switch';

const neuterOptions = [
  {
    id: 'true',
    value: '완료',
  },
  {
    id: 'false',
    value: '미완료',
  },
];
const dietOptions = [
  {
    id: 'true',
    value: '필요',
  },
  {
    id: 'false',
    value: '불필요',
  },
];

const HomeCalculator = () => {
  return (
    <div className="shadow-bottom-md min-w-[340px] max-w-[440px] border-[2px] p-8 rounded-lg shadow-bottom-gray flex flex-col gap-8">
      <h3 className="text-center text-xl">필요 칼로리 계산기</h3>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input id="age" label="나이" unit="살" type="text" placeholder="나이를 입력하세요" />
          <Input id="weight" label="몸무게" type="text" unit="kg" placeholder="체중을 입력하세요" />
          <Switch name="isNeuter" label="중성화 여부" options={neuterOptions}/>
          <div className="flex gap-2 items-end justify-between">
            <Switch name="isneedDiet" label="다이어트 필요 여부" options={dietOptions} />
            <Button style="secondary" type="button">
              비만도 확인
            </Button>
          </div>
        </div>

        <Button>계산하기</Button>
      </form>
    </div>
  );
};

export default HomeCalculator;
