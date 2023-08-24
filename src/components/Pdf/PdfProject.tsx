/* eslint-disable jsx-a11y/alt-text */
import { Image, Link, Text, View } from '@react-pdf/renderer';
import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';

import { ProjectsFormSchema } from '../Form/ProjectForm';
import { tailwind } from './config';

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

const MarkdownContent = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
  );
};

interface PdfProjectProps {
  projects: ProjectsFormSchema['projects'];
}

const PdfProject = ({ projects }: PdfProjectProps) => {
  return (
    <View style={tailwind('m-8 text-slate-500')}>
      <Text style={tailwind('mb-3 text-lg font-bold')}>프로젝트</Text>
      {projects.map((project) => (
        <View
          key={project.id}
          style={tailwind('border border-x-0 border-slate-200 py-6')}
        >
          <View style={tailwind('mb-4')}>
            <View
              style={tailwind('flex-row items-center justify-between mb-2')}
            >
              <Text style={tailwind('text-[11px] font-bold')}>
                {project.title}
              </Text>
              <Text style={tailwind('text-xs mb-2')}>
                {project.startDate} ~ {project.endDate}
              </Text>
            </View>
            {project.url && (
              <Link src={project.url} style={tailwind('flex-row items-center')}>
                <Image style={tailwind('w-3 mr-2')} src={'/icons/link.png'} />
                <Text style={tailwind('text-xs text-slate-500 mb-0.5')}>
                  {project.url}
                </Text>
              </Link>
            )}
          </View>
          {project.content && <MarkdownContent content={project.content} />}
        </View>
      ))}
    </View>
  );
};

export default PdfProject;
