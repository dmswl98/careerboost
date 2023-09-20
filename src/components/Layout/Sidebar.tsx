import { Progress } from '@/components/common';
import { SIDEBAR_MENU } from '@/constants/menu';

import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  return (
    <aside className="mb-6 h-fit w-[260px] rounded-xl border border-gray-200/70 bg-white px-5 py-7">
      <h1 className="mb-2 text-base font-bold">이력서 완성도</h1>
      <Progress value={30} />
      <ul className="mt-6">
        {SIDEBAR_MENU.map((menu) => (
          <SidebarMenu key={menu.title} title={menu.title} route={menu.route} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
