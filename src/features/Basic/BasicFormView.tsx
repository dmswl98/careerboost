'use client';

import { useFormContext } from 'react-hook-form';

import { Input, Label, Textarea } from '@/components/common';
import { FormCard } from '@/components/Form';
import { type Dictionary } from '@/i18n/types';
import { type UserInfoFormDataSchema } from '@/types/form';
import { debouncedUpdateStorage } from '@/utils/storage';

interface BasicFormViewProps {
  dictionary: Dictionary['basic'];
}

const BasicFormView = ({ dictionary }: BasicFormViewProps) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<UserInfoFormDataSchema>();

  const handleAutoSave = () => {
    debouncedUpdateStorage('userInfo', getValues('userInfo'));
  };

  return (
    <FormCard title={dictionary.section.title} guide={dictionary.section.guide}>
      <div className="mt-5">
        <Input
          {...register('userInfo.name')}
          id="name"
          className="mb-3"
          label={{ text: dictionary.label.name, isRequired: true }}
          placeholder={dictionary.placeholder.name}
          error={errors.userInfo?.name?.message}
          onChange={(e) => {
            register('userInfo.name').onChange(e);
            handleAutoSave();
          }}
        />
        <Input
          {...register('userInfo.career')}
          id="career"
          className="mb-3"
          label={{ text: dictionary.label.career, isRequired: true }}
          placeholder={dictionary.placeholder.career}
          error={errors.userInfo?.career?.message}
          onChange={(e) => {
            register('userInfo.career').onChange(e);
            handleAutoSave();
          }}
        />
        <Input
          {...register('userInfo.phone')}
          id="phone"
          type="tel"
          className="mb-3"
          label={{ text: dictionary.label.phone }}
          placeholder={dictionary.placeholder.phone}
          error={errors.userInfo?.phone?.message}
          onChange={(e) => {
            register('userInfo.phone').onChange(e);
            handleAutoSave();
          }}
        />
        <Input
          {...register('userInfo.email')}
          id="email"
          type="email"
          className="mb-3"
          label={{ text: dictionary.label.email, isRequired: true }}
          placeholder={dictionary.placeholder.email}
          error={errors.userInfo?.email?.message}
          onChange={(e) => {
            register('userInfo.email').onChange(e);
            handleAutoSave();
          }}
        />
        <Input
          {...register('userInfo.blog')}
          id="blog"
          className="mb-3"
          label={{ text: dictionary.label.blog }}
          placeholder={dictionary.placeholder.url}
          error={errors.userInfo?.blog?.message}
          onChange={(e) => {
            register('userInfo.blog').onChange(e);
            handleAutoSave();
          }}
        />
        <Input
          {...register('userInfo.github')}
          id="github"
          className="mb-3"
          label={{ text: dictionary.label.github }}
          placeholder={dictionary.placeholder.url}
          error={errors.userInfo?.github?.message}
          onChange={(e) => {
            register('userInfo.github').onChange(e);
            handleAutoSave();
          }}
        />
        <Label htmlFor="brief">{dictionary.label.brief}</Label>
        <Textarea
          {...register('userInfo.brief')}
          id="brief"
          placeholder={dictionary.placeholder.brief}
          onChange={(e) => {
            register('userInfo.brief').onChange(e);
            handleAutoSave();
          }}
        />
      </div>
    </FormCard>
  );
};

export default BasicFormView;
