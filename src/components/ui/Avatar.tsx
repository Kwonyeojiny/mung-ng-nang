import { DEFAULT_USER_PROFILE_IMAGES, DefaultUserImageType } from '../../constants/defaultImages';
import { CameraIcon } from 'lucide-react';

type AvatarProps = {
  imgId?: DefaultUserImageType;
  imgUrl?: string;
  alt?: string;
  isEditable?: boolean;
};

export const AvatarChangeButton = () => {
  return (
    <button className="flex items-center justify-center w-8 h-8 absolute right-0 bottom-0 bg-brand-yellow active:bg-[#e2a748] border-2 rounded-full">
      <CameraIcon size={20} />
    </button>
  );
};

const Avatar = ({ imgId, imgUrl, alt, isEditable = false }: AvatarProps) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-32 h-32 rounded-[52px] overflow-hidden border-3">
        {imgId ? (
          <img src={DEFAULT_USER_PROFILE_IMAGES[imgId]} alt={alt} />
        ) : (
          <img src={imgUrl} alt={alt} />
        )}
      </div>
      {isEditable && <AvatarChangeButton />}
    </div>
  );
};

export default Avatar;
