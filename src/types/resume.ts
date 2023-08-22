import { ActivitiesFormSchema } from '@/components/ActivityForm';
import { ProjectsFormSchema } from '@/components/ProjectForm';

export interface Resume {
  projects: ProjectsFormSchema;
  activities: ActivitiesFormSchema;
}
