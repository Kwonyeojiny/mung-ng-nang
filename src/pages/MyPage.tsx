import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import DataWithLabel from '../components/mypage/DataWithLabel';
import MyPageCard from '../components/mypage/MyPageCard';
import EditButton from '../components/ui/EditButton';
import AddPetButton from '../components/mypage/AddPetButton';
import { DefaultUserImageType } from '../constants/defaultImages';
import { RootState } from '../store/store';
import { updatePetName } from '../store/petSlice';

interface User {
  user_id: string;
  user_img: DefaultUserImageType;
}

const userDummyData: User = {
  user_id: 'hongsam-unnies',
  user_img: '1',
};

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pets = useSelector((state: RootState) => state.pet.pets);
  const [editingStates, setEditingStates] = useState<{ [key: string]: boolean }>({});
  const [nameInputs, setNameInputs] = useState<{ [key: string]: string }>({});

  const handleEditPetName = (petId: string) => {
    setEditingStates(prev => ({ ...prev, [petId]: true }));
    const pet = pets.find(p => p.id === petId);
    if (pet) {
      setNameInputs(prev => ({ ...prev, [petId]: pet.name }));
    }
  };

  const handleNameInputChange = (petId: string, value: string) => {
    setNameInputs(prev => ({ ...prev, [petId]: value }));
  };

  const handleSaveName = (petId: string) => {
    const newName = nameInputs[petId];
    if (newName?.trim()) {
      dispatch(updatePetName({ id: petId, name: newName.trim() }));
      setEditingStates(prev => ({ ...prev, [petId]: false }));
    }
  };

  const handleAddPetButton = () => {
    navigate('/mypage/new-pet');
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex gap-6 max-w-screen-full overflow-x-auto scrollbar-hide px-10 pb-6">
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

        {pets.map(pet => (
          <MyPageCard key={pet.id}>
            <div className="flex items-center justify-center gap-2 relative self-stretch h-10">
              {editingStates[pet.id] ? (
                <>
                  <Input
                    id={`input-${pet.id}`}
                    placeholder={pet.name}
                    value={nameInputs[pet.id] || ''}
                    onChange={e => handleNameInputChange(pet.id, e.target.value)}
                  />
                  <Button onClick={() => handleSaveName(pet.id)}>저장</Button>
                </>
              ) : (
                <>
                  <p className="text-2xl">{pet.name}</p>
                  <EditButton
                    className="absolute top-1 right-0"
                    onClick={() => handleEditPetName(pet.id)}
                  />
                </>
              )}
            </div>
            <div>
              <Avatar imgUrl={pet.profile_img} alt={pet.name} isEditable={true} />
            </div>

            <div className="self-stretch flex flex-col gap-4">
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

        <AddPetButton onClick={handleAddPetButton} />
      </div>
    </div>
  );
};

export default MyPage;
