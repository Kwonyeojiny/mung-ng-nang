import MyPageCard from '../components/mypage/MyPageCard';
import Avatar from '../components/ui/Avatar';
import BirthDayInput from '../components/ui/BirthDayInput';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Switch from '../components/ui/Switch';

const petTypeOptions = [
  {
    id: 'dog',
    value: '강아지',
  },
  {
    id: 'cat',
    value: '고양이',
  },
];
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
    value: '필요함',
  },
  {
    id: 'false',
    value: '필요 없음',
  },
];

const AddPet = () => {
  return (
    <MyPageCard>
      <Avatar isEditable={true} />
      <form className="flex flex-col gap-7 w-80">
        <fieldset className="flex flex-col gap-4">
          <Input
            id="id"
            label="반려동물 이름"
            type="text"
            placeholder="반려동물 이름을 입력하세요"
          />
          <Switch name="pet-type" label="반려동물 종류" options={petTypeOptions} />
          <Input id="species" label="종" type="text" placeholder="반려동물 종을 입력하세요" />
          <BirthDayInput id="birthday" />
          <Input id="weight" label="몸무게" type="text" unit="kg" placeholder="체중을 입력하세요" />
          <Switch name="isNeuter" label="중성화 여부" options={neuterOptions} />
          <div className="flex gap-4 items-end justify-between">
            <Switch name="isneedDiet" label="다이어트 필요 여부" options={dietOptions} />
            <Button style="secondary" type="button">
              비만도 확인
            </Button>
          </div>
        </fieldset>

        <Button htmlType="submit">추가하기</Button>
      </form>
    </MyPageCard>
  );
};

export default AddPet;
