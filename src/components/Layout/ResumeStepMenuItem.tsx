import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type ROUTES } from '@/constants/routes';

interface ResumeStepMenuItemProps {
  title: string;
  route: (typeof ROUTES)[keyof typeof ROUTES];
}

const ResumeStepMenuItem = ({ title, route }: ResumeStepMenuItemProps) => {
  const pathname = usePathname();

  const isCurrentLocation = pathname === route;

  return (
    <li
      className={`my-0.5 rounded-md text-[15px] text-primary transition-all hover:bg-gray-100/70 ${
        isCurrentLocation && 'bg-gray-100 font-bold'
      }`}
    >
      <Link href={route} className="block p-2">
        {title}
      </Link>
    </li>
  );
};

export default ResumeStepMenuItem;
