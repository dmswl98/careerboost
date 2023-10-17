import { Link, Text, View } from '@react-pdf/renderer';
import { type ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';

import { tailwind } from './config';

interface PdfMarkdownProps {
  content: string;
}

const PdfMarkdown = ({ content }: PdfMarkdownProps) => {
  return (
    <View style={tailwind('flex-col w-full')}>
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </View>
  );
};

const markdownComponents: ComponentProps<typeof ReactMarkdown>['components'] = {
  h1: ({ children }) => (
    <Text style={tailwind('font-bold text-[1.1rem] py-1.5')}>{children}</Text>
  ),
  h2: ({ children }) => (
    <Text style={tailwind('font-bold text-[1rem] py-1.5')}>{children}</Text>
  ),
  h3: ({ children }) => (
    <Text style={tailwind('font-bold text-[0.9rem] py-1')}>{children}</Text>
  ),
  p: ({ children }) => <Text style={tailwind('text-sm py-1')}>{children}</Text>,
  ul: ({ children }) => (
    <View style={tailwind('pb-2 text-sm leading-relaxed')}>{children}</View>
  ),
  li: ({ children }) => (
    <View
      style={tailwind('flex-row flex-nowrap text-sm py-px pr-3 leading-normal')}
    >
      <Text>• {children}</Text>
    </View>
  ),
  a: ({ children, href }) =>
    href ? (
      <Link src={href} style={tailwind('text-blue-500')}>
        {children}
      </Link>
    ) : (
      <Text>{children}</Text>
    ),
  strong: ({ children }) => (
    <Text style={tailwind('text-sm font-bold')}>{children}</Text>
  ),
  code: ({ children }) => (
    <Text style={tailwind('font-light text-xs text-gray-700')}>{children}</Text>
  ),
};

export default PdfMarkdown;
