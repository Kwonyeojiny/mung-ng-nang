import { YellowButton } from '../ui/Button';
import Card from '../ui/Card';
import PetCard from './PetCard';

const HomeMyPet = () => {
  return (
    <div className="flex justify-center items-center">
      <Card className="flex gap-8 justify-between">
        <div>
          <h3 className="text-2xl">00이 얼마나 컸을까요</h3>
          <p>
            Experience the nostalgia of 90s
            <br />
            computing with modern functionality.
          </p>
          <YellowButton text="버튼" />
        </div>
        <div className="flex gap-4">
          <PetCard />
          <PetCard />
        </div>
      </Card>
    </div>
  );
};

export default HomeMyPet;
