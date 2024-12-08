import HomeMyPet from '../components/Home/HomeMyPet';
import Introduce from '../components/Home/Introduce';
import PetChart from '../components/Home/PetChart';
import TryCalculator from '../components/Home/TryCalculator';

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Introduce />
      <TryCalculator />

      {/* 로그인시 */}
      <HomeMyPet />
      <PetChart />
    </div>
  );
};

export default Home;
