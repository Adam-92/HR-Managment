import type { GetPublicJobsResponse } from './getPublicJobs.types';

export const jobsToListAdapter = (dataJobs?: GetPublicJobsResponse) => {
  if (dataJobs) {
    const adaptedData = dataJobs.languages.map((language) => {
      return {
        name: language.name,
        subList: language.frameworks?.map((framework) => {
          return {
            name: framework.name,
            subList: framework.levels?.map((level) => {
              return {
                name: level.name,
                subList: level.projects?.map((project) => {
                  return {
                    name: project.name,
                  };
                }),
              };
            }),
          };
        }),
      };
    });
    return adaptedData;
  }
  return undefined;
};
