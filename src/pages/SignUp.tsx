import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const SignUp = () => {
  return (
    <>
      <Card className="w-[440px] flex flex-col gap-8">
        <h3 className="text-2xl text-center ">회원가입</h3>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input id="id" label="아이디" type="text" placeholder="아이디를 입력하세요" />
            <Input
              id="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
            <Input
              id="confirmPassword"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력하세요"
            />
          </div>
          <Link to="/login">
            <Button className="w-full">회원가입</Button>
          </Link>
        </form>
      </Card>
    </>
  );
};

export default SignUp;
