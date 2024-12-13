import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signFormSchema } from '../schemas/signSchema';

type SignUpFormData = {
  user_id: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signFormSchema),
  });

  // async data
  const onSubmit: SubmitHandler<SignUpFormData> = () => {
    // 회원가입 처리 로직
  };

  return (
    <>
      <Card className="max-w-[440px] flex flex-col gap-8">
        <h3 className="text-2xl text-center ">회원가입</h3>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <Input
              id="id"
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
            <Input
              id="confirmPassword"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력하세요"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>

          <Button htmlType="submit" className="w-full">
            회원가입
          </Button>
        </form>
      </Card>
    </>
  );
};

export default SignUp;
