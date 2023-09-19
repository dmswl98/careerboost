import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type ROUTES } from '@/constants/routes';

interface SidebarMenuProps {
  title: string;
  route: (typeof ROUTES)[keyof typeof ROUTES];
}

const SidebarMenu = ({ title, route }: SidebarMenuProps) => {
  const pathname = usePathname();

  const isCurrentLocation = pathname === route;
  const currentLocationStyle = isCurrentLocation
    ? 'border-primary font-bold text-primary'
    : 'border-white text-gray-400';

  return (
    <li className="my-3 text-[15px] last:mb-0">
      <Link
        href={route}
        className={`inline-block border-b-[3px] py-1 transition-all hover:border-primary hover:font-bold hover:text-primary ${currentLocationStyle}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default SidebarMenu;
