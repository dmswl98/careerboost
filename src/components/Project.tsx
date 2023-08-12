'use client';

import { PlusCircle } from 'lucide-react';
import { v4 } from 'uuid';

import { useProjects, useResumeActions } from '@/store/resume';

import ProjectItem from './ProjectItem';
import { Button } from './ui/button';

const Project = () => {
  const projects = useProjects();
  const { addProject } = useResumeActions();

  return (
    <div className="m-8">
      <div className="mb-4 flex items-center justify-between text-slate-500">
        <h1 className="text-xl font-bold">프로젝트</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => addProject(v4())}
          aria-controls="radix-:R1mcq:"
        >
          <PlusCircle className="m-3" />
        </Button>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Project;
