import Button from '../ui/Button';
import Card from '../ui/Card';
import AddPetCard from './AddPetCard';
import PetCard from './PetCard';

const HomeMyPet = () => {
  return (
    <div className="flex justify-center items-center">
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
        <div>
          <h3 className="text-3xl">00이 얼마나 컸을까요</h3>
          <p>
            Experience the nostalgia of 90s
            <br />
            computing with modern functionality.
          </p>
          <Button size="lg">버튼</Button>
        </div>
        <div className="flex gap-16 md:gap-8 justify-center md:justify-end">
          <AddPetCard />
          <PetCard />
          <PetCard />
        </div>
      </Card>
    </div>
  );
};

export default HomeMyPet;
