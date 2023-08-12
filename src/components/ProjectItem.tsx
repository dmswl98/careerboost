import { Suspense, useState } from 'react';

import type { Project } from '@/store/resume';

import Fallback from './Fallback';
import ProjectForm from './ProjectForm';
import Suggestion from './Suggestion';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isSuggested, setIsSuggested] = useState(false);

  return (
    <div className="border border-x-0 py-6">
      <ProjectForm
        projectId={project.id}
        isSuggested={isSuggested}
        onClickSuggest={() => setIsSuggested(true)}
      />
      {isSuggested && (
        <div className="mt-6 rounded-md bg-[#75ac9d99] px-3 py-2">
          <Suspense fallback={<Fallback />}>
            <Suggestion content={project.content} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
