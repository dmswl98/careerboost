import { ServiceErrorMessage } from '@/components/common';
import { ROUTES } from '@/constants/routes';

export default function Home() {
  return (
    <main className="mx-auto">
      <ServiceErrorMessage
        title="⚒️ 공사중 ⚒️"
        description="⚒️⚒️⚒️⚒️⚒️"
        buttonContent="미리보기"
        route={ROUTES.BASIC}
      />
    </main>
  );
}
