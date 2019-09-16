module.exports = {
  title: "缺心眼",
  description: "穷则思变",
  base: `/blogs/`,
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home"
      },

      {
        text: "TimeLine",
        link: "/timeLine/",
        icon: "reco-date"
      },
      {
        text: "AboutUs",
        link: "/views/AboutUs/",
        icon: "reco-account"
      }
    ],
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category"
      },
      tag: {
        location: 3,
        text: "Tag"
      }
    },
    logo: "/head.png",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    lastUpdated: "Last Updated",
    author: "",
    record: "浙A.88888",
    startYear: "2019"
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ["@vuepress/medium-zoom", "flowchart"]
};
