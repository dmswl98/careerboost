import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import {
  type FieldPath,
  type FieldValues,
  useFormContext,
} from 'react-hook-form';

import { ROUTES } from '@/constants/routes';

interface MenuLinkProps<T extends FieldValues> {
  formName: FieldPath<T>;
  isCurrentLocation: boolean;
  title: string;
  route: (typeof ROUTES)[keyof typeof ROUTES];
}

const MenuLink = <T extends FieldValues>({
  formName,
  isCurrentLocation,
  route,
  title,
}: MenuLinkProps<T>) => {
  const { getValues, formState } = useFormContext<T>();

  const isTouched =
    route === ROUTES.BASIC
      ? !!formState.touchedFields?.[formName]
      : formState.touchedFields?.[formName]?.length > 0;
  const isCreatedForm =
    route === ROUTES.BASIC
      ? !!getValues(formName as FieldPath<T>)
      : getValues(formName as FieldPath<T>)?.length > 0;
  const isError = formState.errors[formName];

  const currentLocationMenuStyle = isCurrentLocation
    ? 'border-primary font-bold text-primary'
    : 'border-white text-gray-400';

  const currentLocationIconStyle = isCurrentLocation
    ? 'opacity-100'
    : 'opacity-30';

  return (
    <li className="my-3 flex items-center justify-between text-[15px] last:mb-0">
      <Link
        href={route}
        className={`inline-block border-b-[3px] py-1 transition-all hover:border-primary hover:font-bold hover:text-primary ${currentLocationMenuStyle}`}
      >
        {title}
      </Link>
      {isError && (
        <AlertCircle
          className={`h-5 w-5 text-destructive transition-all ${currentLocationIconStyle}`}
        />
      )}
      {!isError && isTouched && isCreatedForm && (
        <CheckCircle2
          className={`h-5 w-5 text-success transition-all ${currentLocationIconStyle}`}
        />
      )}
    </li>
  );
};

export default MenuLink;
