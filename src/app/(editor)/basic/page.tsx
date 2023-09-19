'use client';

import { useFormContext } from 'react-hook-form';

import { Input, Label, Textarea } from '@/components/common';
import { FormCard } from '@/components/Form';
import { PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type UserInfoFormDataSchema } from '@/types/form';

const Page = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInfoFormDataSchema>();

  return (
    <FormCard title={MENU_INFO.BASIC.TITLE} guide={MENU_INFO.BASIC.GUIDE}>
      <Label htmlFor="name" isRequired>
        이름
      </Label>
      <Input
        {...register('userInfo.name')}
        id="name"
        placeholder={PLACEHOLDER.USER_INFO.NAME}
        isError={!!errors.userInfo?.name}
        className="mb-3"
      />
      <Label htmlFor="career" isRequired>
        직무
      </Label>
      <Input
        {...register('userInfo.career')}
        id="career"
        placeholder={PLACEHOLDER.USER_INFO.CAREER}
        isError={!!errors.userInfo?.career}
        className="mb-3"
      />
      <Label htmlFor="phone">전화번호</Label>
      <Input
        {...register('userInfo.phone')}
        id="phone"
        type="tel"
        placeholder={PLACEHOLDER.USER_INFO.PHONE}
        isError={!!errors.userInfo?.phone}
        className="mb-3"
      />
      <Label htmlFor="email" isRequired>
        이메일
      </Label>
      <Input
        {...register('userInfo.email')}
        id="email"
        type="email"
        placeholder={PLACEHOLDER.USER_INFO.EMAIL}
        isError={!!errors.userInfo?.email}
        className="mb-3"
      />
      <Label htmlFor="blog">블로그</Label>
      <Input
        {...register('userInfo.blog')}
        id="blog"
        placeholder={PLACEHOLDER.USER_INFO.URL}
        isError={!!errors.userInfo?.blog}
        className="mb-3"
      />
      <Label htmlFor="github" isRequired>
        깃허브
      </Label>
      <Input
        {...register('userInfo.github')}
        id="github"
        placeholder={PLACEHOLDER.USER_INFO.URL}
        isError={!!errors.userInfo?.github}
        className="mb-3"
      />
      <Label htmlFor="brief">소개글</Label>
      <Textarea
        {...register('userInfo.brief')}
        id="brief"
        placeholder={PLACEHOLDER.USER_INFO.BRIEF}
      />
    </FormCard>
  );
};

export default Page;
