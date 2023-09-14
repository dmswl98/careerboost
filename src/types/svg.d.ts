declare module '*.svg' {
  import type React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
