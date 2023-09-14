import { type ActivitiesFormSchema } from '@/components/Form/ActivityForm';
import { type ProjectsFormSchema } from '@/components/Form/ProjectForm';

export interface Resume {
  projects: ProjectsFormSchema;
  activities: ActivitiesFormSchema;
}
