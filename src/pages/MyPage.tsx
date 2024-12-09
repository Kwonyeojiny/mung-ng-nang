import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import DataWithLabel from '../components/mypage/DataWithLabel';
import MyPageCard from '../components/mypage/MyPageCard';
import { DefaultUserImageType } from '../constants/defaultImages';

interface User {
  user_id: string;
  user_img: DefaultUserImageType;
}

const userDummyData: User = {
  user_id: 'hongsam-unnies',
  user_img: '1',
};

interface Pet {
  id: string;
  name: string;
  profile_img: string;
  type: string;
  species: string;
  is_neutering: boolean;
  birth_date: string;
  age: number;
  weight: number;
  is_diet_required: boolean;
  calories_needed_per_day: number;
}

const petDummyData: Pet[] = [
  {
    id: '1',
    name: '홍삼',
    profile_img: '',
    type: '강아지',
    species: '믹스',
    is_neutering: true,
    birth_date: '2023-02-07',
    age: 1,
    weight: 5.9,
    is_diet_required: false,
    calories_needed_per_day: 587,
  },
];

const MyPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex justify-center gap-6 scrollbar-hide">
        <MyPageCard>
          <p className="text-2xl">내 정보</p>
          <Avatar imgId={userDummyData.user_img} alt={userDummyData.user_id} />

          <div className="flex-grow flex flex-col gap-4">
            <DataWithLabel label="아이디" value={userDummyData.user_id} />
            <DataWithLabel
              label="비밀번호"
              value="비밀번호 변경"
              type="button"
              onClick={() => {
                console.log('비밀번호 변경 모달 노출');
              }}
            />
          </div>

          <Button type="link" style="danger">
            계정 삭제
          </Button>
        </MyPageCard>

        {petDummyData.map(pet => (
          <MyPageCard key={pet.id} className="last:mr-10">
            <p className="text-2xl">{pet.name}</p>
            <div>
              <Avatar imgUrl={pet.profile_img} alt={pet.name} />
            </div>

            <div className="flex flex-col gap-4">
              <DataWithLabel label="나이" value={pet.age} />
              <DataWithLabel label="종" value={pet.species} />
              <DataWithLabel label="몸무게" value={pet.weight} />
              <DataWithLabel label="중성화" value={pet.is_neutering} />
              <DataWithLabel
                label="다이어트 필요 여부"
                value={pet.is_diet_required ? '필요함' : '필요 없음'}
              />
            </div>

            <div className="flex flex-col items-center gap-2 w-full py-4 bg-brand-beige rounded-xl">
              <p className="text-lg">하루 필요 칼로리</p>
              <p className="text-3xl">{pet.calories_needed_per_day}kcal</p>
            </div>

            <Button>칼로리 다시 계산하기</Button>
          </MyPageCard>
        ))}
      </div>
    </div>
  );
};

export default MyPage;
