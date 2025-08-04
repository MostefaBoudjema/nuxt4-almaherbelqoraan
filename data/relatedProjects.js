// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

import getProjects from '@/data/projects';

const relatedProject = {
    relatedProjectsHeading: "Related Projects",
    relatedProjects: getProjects(), // <-- Call the function!
};

export default relatedProject;
