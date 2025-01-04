import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import {
  type FieldPath,
  type FieldValues,
  useFormContext,
} from 'react-hook-form';

import { ROUTES } from '@/constants/routes';
import { type Locale } from '@/i18n/types';

interface MenuLinkProps<T extends FieldValues> {
  formName: FieldPath<T>;
  isCurrentLocation: boolean;
  title: string;
  route: `/${Locale}${(typeof ROUTES)[keyof typeof ROUTES]}`;
}

const MenuLink = <T extends FieldValues>({
  formName,
  isCurrentLocation,
  route,
  title,
}: MenuLinkProps<T>) => {
  const { getValues, formState } = useFormContext<T>();

  const values = getValues(formName as FieldPath<T>);

  const isError = formState.errors[formName];
  const isCreatedForm = route.includes(ROUTES.BASIC)
    ? values?.name && values?.career && values?.email
    : values?.length > 0;

  const currentLocationMenuStyle = isCurrentLocation
    ? 'border-primary font-bold text-primary'
    : 'border-white text-gray-400';

  const currentLocationIconStyle = isCurrentLocation
    ? 'opacity-100'
    : 'opacity-30';

  return (
    <li
      className="my-3 flex items-center justify-between text-[15px] last:mb-0"
      aria-current={isCurrentLocation ? 'page' : 'false'}
    >
      <Link
        href={route}
        className="flex w-full items-center justify-between hover:[&>span]:border-primary hover:[&>span]:font-bold hover:[&>span]:text-primary"
      >
        <span
          className={`border-b-[3px] py-1 transition-all ${currentLocationMenuStyle}`}
        >
          {title}
        </span>
        {isError && (
          <AlertCircle
            className={`h-5 w-5 text-destructive transition-all ${currentLocationIconStyle}`}
            aria-label="작성 미완료 상태"
          />
        )}
        {!isError && isCreatedForm && (
          <CheckCircle2
            className={`h-5 w-5 text-success transition-all ${currentLocationIconStyle}`}
            aria-label="작성 완료 상태"
          />
        )}
      </Link>
    </li>
  );
};

export default MenuLink;
