module.exports = {
  title: "夜蓝的仓库",
  head: [
    ["link", { rel: "icon", href: "/note.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover",
      },
    ],
  ],
  themeConfig: {
    author: "nightlue",
    logo: "/avatar.ico",
    authorAvatar: "/avatar.jpg",
    nav: [{ text: "时间线", link: "/timeline/", icon: "reco-date" }],
    type: "blog",
    blogConfig: {
      category: {
        location: 1,
        text: "分类",
      },
      tag: {
        location: 2,
        text: "标签",
      },
    },
    sidebar: "auto",
  },
  theme: "reco",
  evergreen: true,
};
