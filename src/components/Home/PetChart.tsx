import Card from '../ui/Card';

const PetChart = () => {
  return (
    <div className="flex justify-center items-center">
      <Card className="flex flex-col gap-4">
        <h3 className="text-2xl">몸무게 변화</h3>
        <div className="bg-brand-skyblue h-80 rounded-md"></div>
      </Card>
    </div>
  );
};

export default PetChart;
