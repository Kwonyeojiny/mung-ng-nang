import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signFormSchema } from '../schemas/signSchema';

type LoginFormData = {
  user_id: string;
  password: string;
};

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(signFormSchema),
  });

  // async data
  const onSubmit: SubmitHandler<LoginFormData> = () => {
    // 로그인 처리 로직
  };

  return (
    <>
      <Card className="max-w-[440px] flex flex-col gap-8">
        <h3 className="text-2xl text-center">로그인</h3>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <Input
              id="user_id"
              label="아이디"
              type="text"
              placeholder="아이디를 입력하세요"
              {...register('user_id')}
              error={errors.user_id?.message}
            />
            <Input
              id="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="text-xs text-right text-black">비밀번호 찾기</div>
          </div>

          <Button htmlType="submit" className="w-full">
            로그인
          </Button>

          <Link to="/signup" className="text-xs text-center text-brand-blue">
            회원가입
          </Link>
        </form>
      </Card>
    </>
  );
};

export default Login;
