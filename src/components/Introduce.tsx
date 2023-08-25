'use client';

import { Github, Link as LinkIcon, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { USER_INFO } from '@/constants/user';

import UserInfoForm, { UserInfoFormSchema } from './Form/UserInfoForm';

const Introduce = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { control } = useFormContext<UserInfoFormSchema>();

  const value = useWatch({
    name: 'userInfo',
    control,
  });

  return (
    <div className="flex justify-between bg-slate-100 p-8 text-slate-500">
      <div>
        <div className="mb-4 flex items-center">
          <h1 className="mr-4 text-2xl font-bold">
            {value.name || USER_INFO.name}
          </h1>
          <p className="text-lg font-semibold">
            {value.career || USER_INFO.career}
          </p>
        </div>
        <p className="mb-2">{value.brief || USER_INFO.brief}</p>
        <div className="flex gap-3 whitespace-nowrap">
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-sm">{value.phone || USER_INFO.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            <span className="text-sm">{value.email || USER_INFO.email}</span>
          </div>
          <div className="flex items-center">
            <LinkIcon className="mr-2 h-4 w-4" />
            {value.blog ? (
              <Link
                className="text-sm hover:underline"
                href={value.blog}
                target="_blank"
              >
                {value.blog}
              </Link>
            ) : (
              <span className="text-sm">{USER_INFO.blog}</span>
            )}
          </div>
          <div className="flex items-center">
            <Github className="mr-2 h-4 w-4" />
            {value.github ? (
              <Link
                className="text-sm hover:underline"
                href={value.github}
                target="_blank"
              >
                {value.github}
              </Link>
            ) : (
              <span className="text-sm">{USER_INFO.github}</span>
            )}
          </div>
        </div>
      </div>
      <UserInfoForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Introduce;
