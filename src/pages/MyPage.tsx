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
import Popup from '../components/popup/Popup';
import clsx from 'clsx';
import { DefaultUserImageType } from '../constants/defaultImages';
import { RootState } from '../store/store';
import { updatePetName } from '../store/petSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface User {
  user_id: string;
  user_img: DefaultUserImageType;
}

const userDummyData: User = {
  user_id: 'hongsam-unnies',
  user_img: '1',
};

type PopupType = 'change-password' | 'success-change-password' | null;

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pets = useSelector((state: RootState) => state.pet.pets);
  const [editingStates, setEditingStates] = useState<{ [key: string]: boolean }>({});
  const [nameInputs, setNameInputs] = useState<{ [key: string]: string }>({});
  const [activePopup, setActivePopup] = useState<PopupType>(null);

  const openPopup = (type: PopupType) => setActivePopup(type);
  const closePopup = () => setActivePopup(null);

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

  const handleEditPet = (id: string) => {
    navigate(`/mypage/edit-pet/${id}`);
  };

  const lessCard = pets.length < 2;
  const cardGridStyle = lessCard ? 'lg:px-24 xl:px-64 2xl:px-96' : 'xl:px-24 2xl:px-40';

  return (
    <>
      {/* Main Contents */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className={clsx(
            `flex gap-6 max-w-screen-full overflow-x-auto scrollbar-hide w-full px-8 pb-6 hover:cursor-grab active:cursor-grabbing`,
            cardGridStyle,
          )}
        >
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: lessCard ? 2 : 3,
              },
            }}
          >
            <SwiperSlide>
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
                      openPopup('change-password');
                    }}
                  />
                  <Button onClick={handleAddPetButton} className="self-center">
                    반려동물 추가
                  </Button>
                </div>

                <Button type="link" style="danger">
                  계정 삭제
                </Button>
              </MyPageCard>
            </SwiperSlide>

            {pets.map(pet => (
              <SwiperSlide key={pet.id}>
                <MyPageCard>
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

                  <Button
                    onClick={() => {
                      handleEditPet(pet.id);
                    }}
                  >
                    칼로리 다시 계산하기
                  </Button>
                </MyPageCard>
              </SwiperSlide>
            ))}

            {!pets.length && (
              <SwiperSlide>
                <AddPetButton onClick={handleAddPetButton} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      {/* Popups */}
      <Popup
        title="비밀번호 변경"
        visible={activePopup === 'change-password'}
        onClose={closePopup}
        buttons={[
          {
            children: '취소',
            style: 'neutral',
            onClick: closePopup,
          },
          {
            children: '변경',
            onClick: () => openPopup('success-change-password'),
          },
        ]}
      >
        <form className="flex flex-col gap-4">
          <Input
            id="old-password"
            label="기존 비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <Input
            id="new-password"
            label="새 비밀번호"
            type="password"
            placeholder="새 비밀번호를 입력하세요"
          />
          <Input
            id="confirm-password"
            label="새 비밀번호 확인"
            type="password"
            placeholder="새 비밀번호를 입력하세요"
          />
        </form>
      </Popup>

      <Popup
        title="비밀번호 변경 성공"
        onClose={closePopup}
        visible={activePopup === 'success-change-password'}
        buttons={[
          {
            children: '확인',
            onClick: closePopup,
          },
        ]}
      >
        비밀번호가 변경되었습니다.
      </Popup>
    </>
  );
};

export default MyPage;
