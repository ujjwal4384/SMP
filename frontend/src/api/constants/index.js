export const BASE_URL = process.env.REACT_APP_API_BASE;

const apiConstants = {
  pages: BASE_URL + "/pages/",
  mentors: BASE_URL + "/mentors/",
  docs: BASE_URL + "/documents/",
  blogs: "blogs/",
  events: "events/",
  apply: "apply/",
  teamPosition: "team-position/",
  team: "team/",
  mentorsDocs: "mentor-docs/",
  faqs: "faq/",
  branch: "branch/",
  interests: "interests/",
  groups: "campus-groups/",
  blogCategory: "blog-category/",
  raiseQuery: "raise-query/",
  freshersGuide: "freshers-guide/",
  interns: "interns/",
  placements: "placements/",
  achievements: "achievements/",
};

export const BLOGS = apiConstants.pages + apiConstants.blogs;
export const BLOG_CATEGORY = apiConstants.pages + apiConstants.blogCategory;
export const EVENTS = apiConstants.pages + apiConstants.events;
export const TEAM_POSITION = apiConstants.pages + apiConstants.teamPosition;
export const TEAM = apiConstants.pages + apiConstants.team;
export const MENTORS = apiConstants.mentors;
export const MENTOR_APPLICATION = apiConstants.mentors + apiConstants.apply;
export const MENTOR_INTERNS = apiConstants.mentors + apiConstants.interns;
export const MENTORS_PLACEMENTS =
  apiConstants.mentors + apiConstants.placements;
export const MENTORS_ACHIEVEMENTS =
  apiConstants.mentors + apiConstants.achievements;
export const MENTORS_DOCS = apiConstants.docs + apiConstants.mentorsDocs;
export const FAQS = apiConstants.pages + apiConstants.faqs;
export const BRANCH = apiConstants.pages + apiConstants.branch;
export const INTERESTS = apiConstants.mentors + apiConstants.interests;
export const GROUPS = apiConstants.pages + apiConstants.groups;
export const RAISE_QUERY = apiConstants.pages + apiConstants.raiseQuery;
export const FRESHERS_GUIDE = apiConstants.docs + apiConstants.freshersGuide;
