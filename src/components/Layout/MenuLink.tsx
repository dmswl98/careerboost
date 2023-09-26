import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { type FieldErrors, type FieldValues } from 'react-hook-form';

import { type ROUTES } from '@/constants/routes';

interface MenuLinkProps<T extends FieldValues> {
  isCurrentLocation: boolean;
  title: string;
  route: (typeof ROUTES)[keyof typeof ROUTES];
  status?: FieldErrors<T>;
}

const MenuLink = <T extends FieldValues>({
  isCurrentLocation,
  route,
  title,
  status,
}: MenuLinkProps<T>) => {
  const currentLocationStyle = isCurrentLocation
    ? 'border-primary font-bold text-primary'
    : 'border-white text-gray-400';

  return (
    <li className="my-3 flex items-center justify-between text-[15px] last:mb-0">
      <Link
        href={route}
        className={`inline-block border-b-[3px] py-1 transition-all hover:border-primary hover:font-bold hover:text-primary ${currentLocationStyle}`}
      >
        {title}
      </Link>
      {status && <AlertCircle className="h-5 w-5 text-destructive" />}
    </li>
  );
};

export default MenuLink;
