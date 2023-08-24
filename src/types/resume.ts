import { ActivitiesFormSchema } from '@/components/Form/ActivityForm';
import { ProjectsFormSchema } from '@/components/Form/ProjectForm';

export interface Resume {
  projects: ProjectsFormSchema;
  activities: ActivitiesFormSchema;
}
