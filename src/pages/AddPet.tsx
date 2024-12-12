import { useState } from 'react';
import MyPageCard from '../components/mypage/MyPageCard';
import Avatar from '../components/ui/Avatar';
import BirthDayInput from '../components/ui/BirthDayInput';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Switch from '../components/ui/Switch';
import Popup from '../components/popup/Popup';
import { useCustomNavigation } from '../utils/navigation';
import { PET_TYPE, NEUTER_STATUS, DIET_STATUS } from '../constants/pet';

type PopupType = 'check-body-condition' | null;

const AddPet = () => {
  const { goBack } = useCustomNavigation();
  const [activePopup, setActivePopup] = useState<PopupType>(null);

  const openPopup = (type: PopupType) => setActivePopup(type);
  const closePopup = () => setActivePopup(null);

  return (
    <>
      {/* Main Contents */}
      <div className="flex items-start gap-4">
        <MyPageCard>
          <p className="flex-1 text-2xl text-center">반려동물 추가</p>
          <Avatar isEditable={true} />
          <form className="flex flex-col gap-10 w-80">
            <fieldset className="flex flex-col gap-4">
              <Input
                id="id"
                label="반려동물 이름"
                type="text"
                placeholder="반려동물 이름을 입력하세요"
              />
              <Switch name="pet-type" label="반려동물 종류" options={PET_TYPE} />
              <Input id="species" label="종" type="text" placeholder="반려동물 종을 입력하세요" />
              <BirthDayInput id="birthday" />
              <Input
                id="weight"
                label="몸무게"
                type="text"
                unit="kg"
                placeholder="체중을 입력하세요"
              />
              <Switch name="isNeuter" label="중성화 여부" options={NEUTER_STATUS} />
              <div className="flex gap-4 items-end justify-between">
                <Switch name="isneedDiet" label="다이어트 필요 여부" options={DIET_STATUS} />
                <Button
                  style="secondary"
                  type="button"
                  onClick={() => openPopup('check-body-condition')}
                >
                  비만도 확인
                </Button>
              </div>
            </fieldset>

            <div className="flex gap-2">
              <Button style="neutral" onClick={goBack}>
                취소
              </Button>
              <Button htmlType="submit" className="flex-1">
                추가하기
              </Button>
            </div>
          </form>
        </MyPageCard>
      </div>

      {/* Popups */}
      <Popup
        title="비만도 확인"
        closeButton
        onClose={closePopup}
        visible={activePopup === 'check-body-condition'}
      >
        (이미지)
      </Popup>
    </>
  );
};

export default AddPet;
