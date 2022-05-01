import {
  BookIcon,
  RepoIcon,
  PackageIcon,
  StarIcon,
  ProjectIcon,
} from "@primer/octicons-react";

// constants
export const GITHUB_API_URL = "https://api.github.com";
export const HEROKU_API_URL =
  "https://github-gatekeeper-changera.herokuapp.com/authenticate/";
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const navigation = [
  {
    name: "Overview",
    icon: <BookIcon className="w-6 inline pr-1" />,
    href: "",
    current: false,
  },
  {
    name: "Repositories",
    icon: <RepoIcon className="w-6 inline pr-1" />,
    href: "repositories",
    current: true,
  },
  {
    name: "Projects",
    icon: <ProjectIcon className="w-6 inline pr-1" />,
    href: "projects",
    current: false,
  },
  {
    name: "Packages",
    icon: <PackageIcon className="w-6 inline pr-1" />,
    href: "packages",
    current: false,
  },
  {
    name: "Stars",
    icon: <StarIcon className="w-6 inline pr-1 ml-3" />,
    href: "stars",
    current: false,
  },
];

export const headerNavigation = [
  { name: "Pull requests", href: "pulls", current: true },
  { name: "Issues", href: "issues", current: false },
  { name: "Marketplace", href: "marketplace", current: false },
  {
    name: "Explore",
    href: "explore",
    current: false,
  },
];
