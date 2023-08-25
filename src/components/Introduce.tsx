'use client';

import {
  Github,
  Link as LinkIcon,
  Mail,
  PenLineIcon,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { PLACEHOLDER } from '@/constants/form';
import { USER_INFO } from '@/constants/user';
import {
  useBlog,
  useBrief,
  useCareer,
  useEmail,
  useGithub,
  useName,
  usePhone,
  type User,
  useUserActions,
} from '@/store/user';

import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const Introduce = () => {
  const [isOpen, setIsOpen] = useState(false);
  const name = useName();
  const career = useCareer();
  const brief = useBrief();
  const phone = usePhone();
  const email = useEmail();
  const blog = useBlog();
  const github = useGithub();
  const {
    setName,
    setCareer,
    setBrief,
    setPhone,
    setEmail,
    setBlog,
    setGithub,
  } = useUserActions();

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      career: '',
      brief: '',
      phone: '',
      email: '',
      blog: '',
      github: '',
    },
  });
  const { control, handleSubmit } = useForm<User>();

  const submit = ({
    name,
    career,
    brief,
    phone,
    email,
    blog,
    github,
  }: User) => {
    setName(name);
    setCareer(career);
    setBrief(brief);
    setPhone(phone);
    setEmail(email);
    setBlog(blog);
    setGithub(github);
  };

  return (
    <div className="flex justify-between bg-slate-100 p-8 text-slate-500">
      <div>
        <div className="mb-4 flex items-center">
          <h1 className="mr-4 text-2xl font-bold">{name || USER_INFO.name}</h1>
          <p className="text-lg font-semibold">{career || USER_INFO.career}</p>
        </div>
        <p className="mb-2">{brief || USER_INFO.brief}</p>
        <div className="flex gap-3">
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-sm">{phone || USER_INFO.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            <span className="text-sm">{email || USER_INFO.email}</span>
          </div>
          <div className="flex items-center">
            <LinkIcon className="mr-2 h-4 w-4" />
            {blog ? (
              <Link className="text-sm" href={blog}>
                {blog}
              </Link>
            ) : (
              <span className="text-sm">{USER_INFO.blog}</span>
            )}
          </div>
          <div className="flex items-center">
            <Github className="mr-2 h-4 w-4" />
            {github ? (
              <Link className="text-sm" href={github}>
                {github}
              </Link>
            ) : (
              <span className="text-sm">{USER_INFO.github}</span>
            )}
          </div>
        </div>
      </div>
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)} className="grid gap-4 pt-4">
              <Controller
                control={control}
                name="name"
                render={({ field: { ref, onChange, value } }) => (
                  <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="name" className="text-left">
                      이름
                    </Label>
                    <Input
                      id="name"
                      className="col-span-4"
                      ref={ref}
                      placeholder={PLACEHOLDER.info.name}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="career"
                render={({ field: { ref, onChange, value } }) => (
                  <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="career" className="text-left">
                      직무
                    </Label>
                    <Input
                      id="career"
                      className="col-span-4"
                      ref={ref}
                      placeholder={PLACEHOLDER.info.career}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="brief"
                render={({ field: { ref, onChange, value } }) => (
                  <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="brief" className="text-left">
                      소개글
                    </Label>
                    <Textarea
                      id="brief"
                      className="col-span-4"
                      ref={ref}
                      placeholder={PLACEHOLDER.info.brief}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field: { ref, onChange, value } }) => (
                  <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="phone" className="text-left">
                      전화번호
                    </Label>
                    <Input
                      id="phone"
                      className="col-span-4"
                      ref={ref}
                      placeholder={PLACEHOLDER.info.phone}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="email"
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
                      placeholder={PLACEHOLDER.info.email}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="blog"
                render={({ field: { ref, onChange, value } }) => (
                  <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="blog" className="text-left">
                      블로그
                    </Label>
                    <Input
                      id="blog"
                      className="col-span-4"
                      ref={ref}
                      placeholder={PLACEHOLDER.info.link}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <Controller
                control={control}
                name="github"
                render={({ field: { ref, onChange, value } }) => (
                  <div className="grid grid-cols-5 items-center gap-4">
                    <Label htmlFor="github" className="text-left">
                      깃허브
                    </Label>
                    <Input
                      id="github"
                      className="col-span-4"
                      ref={ref}
                      placeholder={PLACEHOLDER.info.link}
                      onChange={onChange}
                      value={value || ''}
                    />
                  </div>
                )}
              />
              <DialogFooter>
                <Button onClick={() => setIsOpen(false)}>저장</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Introduce;
