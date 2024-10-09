import type { Links, Page, Site, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "InuDev🐾",
  DESCRIPTION: "Welcome to InuDev's blog",
  AUTHOR: "InuDeveloper / Carlos David Jorge",
}

// Work Page
export const WORK: Page = {
  TITLE: "Works",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "daviddevlife@gmail.com",
    HREF: "mailto:daviddevlife@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "InuDev🐾",
    HREF: "https://github.com/InuDeveloper/InuDev-blog"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/shibadev-85b885230/",
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

