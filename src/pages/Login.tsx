import { Link } from 'react-router-dom';
import { YellowButton } from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';

const Login = () => {
  return (
    <>
      <Card className="w-[440px] flex flex-col gap-8">
        <h3 className="text-2xl text-center">로그인</h3>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input id="id" label="아이디" type="text" placeholder="아이디를 입력하세요" />
            <Input
              id="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <Link to="/">
            <YellowButton text="로그인" className="w-full" />
          </Link>
        </form>
      </Card>
    </>
  );
};

export default Login;
