import { z } from 'zod';

export const signFormSchema = z
  .object({
    user_id: z
      .string()
      .min(3, '아이디는 최소 3자 이상이어야 합니다.')
      .max(20, '아이디는 최대 20자까지 입력할 수 있습니다.')
      .regex(/^[a-zA-Z0-9_]+$/, '아이디는 영문, 숫자, 밑줄(_)만 포함할 수 있습니다.'),
    password: z
      .string()
      .min(6, '비밀번호는 최소 6자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자까지 입력할 수 있습니다.')
      .regex(/[a-z]/, '비밀번호는 최소 1개의 소문자를 포함해야 합니다.')
      .regex(/[0-9]/, '비밀번호는 최소 1개의 숫자를 포함해야 합니다.')
      .regex(/[^A-Za-z0-9]/, '비밀번호는 최소 1개의 특수 문자를 포함해야 합니다.'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type LoginFormData = z.infer<typeof signFormSchema>;
