/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, Text } from '@react-pdf/renderer';

import { tailwind } from './config';

interface PdfLinkProps {
  url: string;
}

const PdfLink = ({ url }: PdfLinkProps) => {
  return (
    <Link src={url} style={tailwind('flex-row items-center')}>
      <Image style={tailwind('w-3 mr-2')} src={'/icons/link.png'} />
      <Text style={tailwind('text-xs text-slate-500 mb-0.5')}>{url}</Text>
    </Link>
  );
};

export default PdfLink;
