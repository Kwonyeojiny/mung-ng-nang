import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Introduce = () => {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl">
              <span className="text-2xl">짠 어서와요</span> <br />
              웰컴 투 멍는거냥
            </h1>
            <p>
              Experience the nostalgia of 90s
              <br />
              computing with modern functionality.
            </p>
            <Link to="/login" className="w-fit">
              <Button size="lg">로그인 유도 버튼</Button>
            </Link>
          </div>
          <div className="h-52 bg-[#C4D1DD] p-4 rounded-md border-[1px]">이미지 박스</div>
        </div>
      </Card>
    </div>
  );
};

export default Introduce;