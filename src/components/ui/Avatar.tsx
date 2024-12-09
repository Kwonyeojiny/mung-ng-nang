import { DEFAULT_USER_PROFILE_IMAGES, DefaultUserImageType } from '../../constants/defaultImages';

type AvatarProps = {
  imgId?: DefaultUserImageType;
  imgUrl?: string;
  alt: string;
};

const Avatar = ({ imgId, imgUrl, alt }: AvatarProps) => {
  return (
    <div className="w-32 h-32 rounded-[52px] overflow-hidden border-[3px] border-black">
      {imgId ? (
        <img src={DEFAULT_USER_PROFILE_IMAGES[imgId]} alt={alt} />
      ) : (
        <img src={imgUrl} alt={alt} />
      )}
    </div>
  );
};

export default Avatar;
