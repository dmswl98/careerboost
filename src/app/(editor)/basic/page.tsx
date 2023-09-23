'use client';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, Label, Textarea } from '@/components/common';
import { FormCard } from '@/components/Form';
import { PLACEHOLDER } from '@/constants/form';
import { MENU_INFO } from '@/constants/menu';
import { type UserInfoFormDataSchema } from '@/types/form';
import { storage, STORAGE_KEY } from '@/utils/storage';

const Page = () => {
  const {
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<UserInfoFormDataSchema>();

  useEffect(() => {
    setValue('userInfo', storage.get(STORAGE_KEY.USER_INFO));
  }, [setValue]);

  const handleSaveClick = () => {
    trigger('userInfo');

    const formValues = getValues('userInfo');

    if (
      !formValues.name ||
      !formValues.career ||
      !formValues.email ||
      !formValues.github ||
      errors.userInfo
    ) {
      return;
    }

    storage.set(STORAGE_KEY.USER_INFO, formValues);
  };

  return (
    <FormCard
      title={MENU_INFO.BASIC.TITLE}
      guide={MENU_INFO.BASIC.GUIDE}
      onSaveForm={handleSaveClick}
    >
      <Label htmlFor="name" isRequired>
        이름
      </Label>
      <Input
        {...register('userInfo.name')}
        id="name"
        className="mb-3"
        placeholder={PLACEHOLDER.USER_INFO.NAME}
        error={errors.userInfo?.name?.message}
      />
      <Label htmlFor="career" isRequired>
        직무
      </Label>
      <Input
        {...register('userInfo.career')}
        id="career"
        className="mb-3"
        placeholder={PLACEHOLDER.USER_INFO.CAREER}
        error={errors.userInfo?.career?.message}
      />
      <Label htmlFor="phone">전화번호</Label>
      <Input
        {...register('userInfo.phone')}
        id="phone"
        type="tel"
        className="mb-3"
        placeholder={PLACEHOLDER.USER_INFO.PHONE}
        error={errors.userInfo?.phone?.message}
      />
      <Label htmlFor="email" isRequired>
        이메일
      </Label>
      <Input
        {...register('userInfo.email')}
        id="email"
        type="email"
        className="mb-3"
        placeholder={PLACEHOLDER.USER_INFO.EMAIL}
        error={errors.userInfo?.email?.message}
      />
      <Label htmlFor="blog">블로그</Label>
      <Input
        {...register('userInfo.blog')}
        id="blog"
        className="mb-3"
        placeholder={PLACEHOLDER.USER_INFO.URL}
        error={errors.userInfo?.blog?.message}
      />
      <Label htmlFor="github" isRequired>
        깃허브
      </Label>
      <Input
        {...register('userInfo.github')}
        id="github"
        className="mb-3"
        placeholder={PLACEHOLDER.USER_INFO.URL}
        error={errors.userInfo?.github?.message}
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
