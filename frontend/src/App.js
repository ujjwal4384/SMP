import React, { useState } from "react";
import "./style/App.scss";
import Loadable from "react-loadable";
import Loader from "./components/Loader";
import { Flash } from "./components/Flash";
import Bus from "utils/Bus";

var methods = require("./api/methods/");

const Header = Loadable({
  loader: () => import("./components/Header"),
  loading: () => <Loader />,
});
const RouterView = Loadable({
  loader: () => import("./components/Router/RouterView"),
  loading: () => <Loader />,
});
const Footer = Loadable({
  loader: () => import("./components/Footer"),
  loading: () => <Loader />,
});

function App() {
  const [blogs, setBlogs] = useState({});
  const [blogCategory, setBlogCategory] = useState([]);
  const [events, setEvents] = useState({});
  const [team, setTeam] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [mentorInterns, setMentorInterns] = useState([]);
  const [mentorPlacements, setMentorPlacements] = useState([]);
  const [mentorAchievements, setMentorAchievements] = useState([]);
  const [mentorsDocs, setMentorsDocs] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [branches, setBranches] = useState([]);
  const [interests, setInterests] = useState([]);
  const [groups, setGroups] = useState([]);
  const [freshersGuideUrl, setFreshersGuideUrl] = useState("");
  const [canFetch, setFetchableStatus] = useState({
    blogs: true,
    blogCategory: true,
    events: true,
    team: true,
    mentors: true,
    mentorInterns: true,
    mentorPlacements: true,
    mentorAchievements: true,
    mentorDocs: true,
    faqs: true,
    branches: true,
    interests: true,
    groups: true,
    freshers: true,
  });

  window.flash = (message, type = "success") =>
    Bus.emit("flash", { message, type });

  const fetchBlogsIfEmpty = () => {
    if (canFetch.blogs) {
      setFetchableStatus({ ...canFetch, blogs: false });
      const blogListToMap = (blogList) => {
        const blogMap = {};
        blogList.forEach((blog) => {
          blogMap[blog.id] = blog;
        });
        return blogMap;
      };
      methods.getBlogs().then((data) => {
        setBlogs(blogListToMap(data));
      });
    }
  };
  const fetchEventsIfEmpty = () => {
    if (canFetch.events) {
      setFetchableStatus({ ...canFetch, events: false });
      methods.getEvents().then((data) => setEvents(data));
    }
  };
  const fetchTeamIfEmpty = () => {
    if (canFetch.team) {
      setFetchableStatus({ ...canFetch, team: false });
      methods.getTeam().then((data) => setTeam(data));
    }
  };
  const fetchMentorsIfEmpty = () => {
    if (canFetch.mentors) {
      setFetchableStatus({ ...canFetch, mentors: false });
      methods.getMentors().then((data) => setMentors(data));
    }
  };
  const fetchMentorInternsIfEmpty = () => {
    if (canFetch.mentorInterns) {
      setFetchableStatus({ ...canFetch, mentorInterns: false });
      methods.getMentorInterns().then((data) => setMentorInterns(data));
    }
  };
  const fetchMentorPlacementsIfEmpty = () => {
    if (canFetch.mentorPlacements) {
      setFetchableStatus({ ...canFetch, mentorPlacements: false });
      methods.getMentorPlacements().then((data) => setMentorPlacements(data));
    }
  };
  const fetchMentorAchievementsIfEmpty = () => {
    if (canFetch.mentorAchievements) {
      setFetchableStatus({ ...canFetch, mentorAchievements: false });
      methods
        .getMentorAchievements()
        .then((data) => setMentorAchievements(data));
    }
  };
  const fetchMentorsDocsIfEmpty = () => {
    if (canFetch.mentorDocs) {
      setFetchableStatus({ ...canFetch, mentorDocs: false });
      methods.getMentorsDocs().then((data) => setMentorsDocs(data));
    }
  };
  const fetchFAQsIfEmpty = () => {
    if (canFetch.faqs) {
      setFetchableStatus({ ...canFetch, faqs: false });
      methods.getFAQs().then((data) => setFaqs(data));
    }
  };
  const fetchBranchesIfEmpty = () => {
    if (canFetch.branches) {
      setFetchableStatus({ ...canFetch, branches: false });
      methods.getBranch().then((data) => setBranches(data));
    }
  };
  const fetchInterestsIfEmpty = () => {
    if (canFetch.interests) {
      setFetchableStatus({ ...canFetch, interests: false });
      methods.getInterests().then((data) => setInterests(data));
    }
  };
  const fetchGroupsIfEmpty = () => {
    if (canFetch.groups) {
      setFetchableStatus({ ...canFetch, groups: false });
      methods.getGroups().then((data) => setGroups(data));
    }
  };
  const fetchBlogCategoryIfEmpty = () => {
    if (canFetch.blogCategory) {
      setFetchableStatus({ ...canFetch, blogCategory: false });
      methods.getBlogCategory().then((data) => setBlogCategory(data));
    }
  };

  const fetchFreshersGuideUrlIfEmpty = () => {
    if (canFetch.freshers) {
      setFetchableStatus({ ...canFetch, freshers: false });
      methods.getFreshersGuideUrl().then((data) => setFreshersGuideUrl(data));
    }
  };
  const fetchSingleBlogIfEmpty = (blogID) => {
    return new Promise((resolve, reject) => {
      const result = `${blogID}` in blogs;
      if (result) {
        resolve();
      } else {
        methods
          .getSingleBlog(blogID)
          .then((data) => {
            setBlogs({
              ...blogs,
              [data.id]: data,
            });
            resolve();
          })
          .catch((e) => reject());
      }
    });
  };
  const getBlogList = () => {
    return Object.keys(blogs).map((id) => blogs[id]);
  };
  const getSingleBlog = (id) => {
    if (`${id}` in blogs) {
      return { ...blogs[id], error: false };
    } else {
      return {
        error: true,
        message: "Does not exist",
      };
    }
  };
  const fetcherCollection = {
    blogs: fetchBlogsIfEmpty,
    events: fetchEventsIfEmpty,
    team: fetchTeamIfEmpty,
    mentors: fetchMentorsIfEmpty,
    mentorInterns: fetchMentorInternsIfEmpty,
    mentorPlacements: fetchMentorPlacementsIfEmpty,
    mentorAchievements: fetchMentorAchievementsIfEmpty,
    mentorDocs: fetchMentorsDocsIfEmpty,
    faq: fetchFAQsIfEmpty,
    branches: fetchBranchesIfEmpty,
    interests: fetchInterestsIfEmpty,
    groups: fetchGroupsIfEmpty,
    blogCategory: fetchBlogCategoryIfEmpty,
    freshersGuideUrl: fetchFreshersGuideUrlIfEmpty,
    singleBlog: fetchSingleBlogIfEmpty,
  };
  return (
    <div className="App">
      <Header />
      <div className="router-footer-container">
        <Flash />
        <RouterView
          blogs={getBlogList()}
          getBlogById={getSingleBlog}
          events={events}
          blogCategory={blogCategory}
          team={team}
          mentors={mentors}
          mentorInterns={mentorInterns}
          mentorPlacements={mentorPlacements}
          mentorAchievements={mentorAchievements}
          mentorsDocs={mentorsDocs}
          faqs={faqs}
          branches={branches}
          interests={interests}
          groups={groups}
          freshersGuideUrl={freshersGuideUrl}
          fetchers={fetcherCollection}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
