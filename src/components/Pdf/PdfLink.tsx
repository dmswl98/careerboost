/* eslint-disable jsx-a11y/alt-text */
import { Link } from '@react-pdf/renderer';

import { tailwind } from './config';

interface PdfLinkProps {
  label: string;
  url: string;
}

const PdfLink = ({ label, url }: PdfLinkProps) => {
  return (
    <Link
      src={url}
      style={tailwind(
        'flex-row items-center text-sm text-gray-500 leading-relaxed'
      )}
    >
      {label}
    </Link>
  );
};

export default PdfLink;
