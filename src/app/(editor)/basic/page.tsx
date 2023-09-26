'use client';

import { useFormContext } from 'react-hook-form';

import { Button, Input, Label, Textarea } from '@/components/common';
import { FormCard } from '@/components/Form';
import { PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type UserInfoFormDataSchema } from '@/types/form';
import { storage } from '@/utils/storage';

const Page = () => {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext<UserInfoFormDataSchema>();

  const handleSaveClick = () => {
    trigger('userInfo');

    if (errors.userInfo) {
      return;
    }

    storage.set({ ...storage.get(), userInfo: getValues('userInfo') });
  };

  return (
    <FormCard title={MENU_INFO.BASIC.TITLE} guide={MENU_INFO.BASIC.GUIDE}>
      <div className="mt-5">
        <Input
          {...register('userInfo.name')}
          id="name"
          className="mb-3"
          label={{ text: '이름', isRequired: true }}
          placeholder={PLACEHOLDER.USER_INFO.NAME}
          error={errors.userInfo?.name?.message}
        />
        <Input
          {...register('userInfo.career')}
          id="career"
          className="mb-3"
          label={{ text: '직무', isRequired: true }}
          placeholder={PLACEHOLDER.USER_INFO.CAREER}
          error={errors.userInfo?.career?.message}
        />
        <Input
          {...register('userInfo.phone')}
          id="phone"
          type="tel"
          className="mb-3"
          label={{ text: '전화번호' }}
          placeholder={PLACEHOLDER.USER_INFO.PHONE}
          error={errors.userInfo?.phone?.message}
        />
        <Input
          {...register('userInfo.email')}
          id="email"
          type="email"
          className="mb-3"
          label={{ text: '이메일', isRequired: true }}
          placeholder={PLACEHOLDER.USER_INFO.EMAIL}
          error={errors.userInfo?.email?.message}
        />
        <Input
          {...register('userInfo.blog')}
          id="blog"
          className="mb-3"
          label={{ text: '블로그' }}
          placeholder={PLACEHOLDER.USER_INFO.URL}
          error={errors.userInfo?.blog?.message}
        />
        <Input
          {...register('userInfo.github')}
          id="github"
          className="mb-3"
          label={{ text: '깃허브', isRequired: true }}
          placeholder={PLACEHOLDER.USER_INFO.URL}
          error={errors.userInfo?.github?.message}
        />
        <Label htmlFor="brief">소개글</Label>
        <Textarea
          {...register('userInfo.brief')}
          id="brief"
          placeholder={PLACEHOLDER.USER_INFO.BRIEF}
        />
      </div>
      <div className="ml-auto mt-4 w-fit">
        <Button type="button" onClick={handleSaveClick}>
          저장
        </Button>
      </div>
    </FormCard>
  );
};

export default Page;
