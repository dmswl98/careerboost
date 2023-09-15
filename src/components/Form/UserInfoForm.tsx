import { PenLineIcon } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { PLACEHOLDER } from '@/constants/form';
import { type UserInfoFormDataSchema } from '@/types/form';

import { Input, Label, Textarea } from '../common';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

interface UserInfoFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const UserInfoForm = ({ isOpen, setIsOpen }: UserInfoFormProps) => {
  const { control } = useFormContext<UserInfoFormDataSchema>();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild aria-controls="radix-:R1mcq:">
        <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
          <PenLineIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>기본 정보</DialogTitle>
        </DialogHeader>
        <Controller
          control={control}
          name="userInfo.name"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                이름
              </Label>
              <Input
                id="name"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.NAME}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="userInfo.career"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="career" className="text-left">
                직무
              </Label>
              <Input
                id="career"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.CAREER}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="userInfo.brief"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="brief" className="text-left">
                소개글
              </Label>
              <Textarea
                id="brief"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.BRIEF}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="userInfo.phone"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="phone" className="text-left">
                전화번호
              </Label>
              <Input
                id="phone"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.PHONE}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="userInfo.email"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="email" className="text-left">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.EMAIL}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="userInfo.blog"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="blog" className="text-left">
                블로그
              </Label>
              <Input
                id="blog"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.URL}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="userInfo.github"
          render={({ field: { ref, onChange, value } }) => (
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="github" className="text-left">
                깃허브
              </Label>
              <Input
                id="github"
                className="col-span-4"
                ref={ref}
                placeholder={PLACEHOLDER.USER_INFO.URL}
                onChange={onChange}
                value={value || ''}
              />
            </div>
          )}
        />
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoForm;
