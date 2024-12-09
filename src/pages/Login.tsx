import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const Login = () => {
  return (
    <>
      <Card className="max-w-[440px] flex flex-col gap-8">
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
            <div className="text-xs text-right text-black">비밀번호 찾기</div>
          </div>
          <Link to="/">
            <Button className="w-full">Button</Button>
          </Link>
          <Link to="/signup" className="text-xs text-center text-brand-blue">
            회원가입
          </Link>
        </form>
      </Card>
    </>
  );
};

export default Login;
