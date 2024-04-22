const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Cedric Cheng",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Student",
    bio: "I currently focus on researching computer systems and architecture, including Zoned Namespace (ZNS) SSD, File System, and Mobile Storage.",
    email: "cc@cedriccheng.cn",
    linkedin: "",
    github: "github.com/realcedriccheng",
    instagram: "",
  },
  projects: [
    {
      name: `resume`,
      href: "https://realcedriccheng.github.io",
    },
    {
      name:`link`,
      href: "https://https://ofw.cedriccheng.cn/link",
    }，
  ],
  // blog setting (required)
  blog: {
    title: "Orange Flavored Whisper",
    description: "My life, thoughts and memory.",
  },

  // CONFIG configration (required)
  link: "https://ofw.cedriccheng.cn",
  since: 2019, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "27ec24d2-0af1-402d-b85d-9b1a64d62f82", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
