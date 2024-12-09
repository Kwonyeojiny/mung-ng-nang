import Button from '../ui/Button';
import Card from '../ui/Card';
import HomeCalculator from './HomeCalculator';

const TryCalculator = () => {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <h1 className="text-2xl pb-8">계산기 츄라이</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <HomeCalculator />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl">계산 결과 표시</h2>
            <p>
              로그인해서 더 많은 기능을.. <br />
              그래프 궁금하면 우리 회원이 되거라
            </p>
            <Button size="lg">그래프 보러가기?</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default TryCalculator;
