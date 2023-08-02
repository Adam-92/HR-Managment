export type GetPublicJobsResponse = {
  languages: Job[];
};

type Job = {
  name: string;
  frameworks?: Frameworks[];
  jobId: string;
};

type Frameworks = {
  name: string;
  levels?: Levels[];
};

type Levels = {
  name: string;
  projects?: Projects[];
};

type Projects = {
  name: string;
};
