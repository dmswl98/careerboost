import { Link, Text, View } from '@react-pdf/renderer';
import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';

import { tailwind } from './config';

interface PdfMarkdownProps {
  content: string;
}

const PdfMarkdown = ({ content }: PdfMarkdownProps) => {
  return (
    <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
  );
};

const markdownComponents: ComponentProps<typeof ReactMarkdown>['components'] = {
  p: ({ children }) => <Text style={tailwind('text-sm')}>{children}</Text>,
  ul: ({ children }) => <View style={tailwind('text-sm')}>{children}</View>,
  li: ({ children }) => (
    <View style={tailwind('flex-row text-sm py-0.5 pr-3')}>
      <Text style={tailwind('mr-1.5')}>•</Text>
      <Text>{children}</Text>
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
    <Text style={tailwind('text-xs font-light bg-slate-100')}>
      <Text style={tailwind('bg-slate-100')}> </Text>
      {children}
      <Text style={tailwind('bg-slate-100')}> </Text>
    </Text>
  ),
};

export default PdfMarkdown;
