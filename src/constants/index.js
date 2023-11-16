import {
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    ytclone,
    ai_summerizer,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: reactjs,
    },
    {
        title: "Backend Developer",
        icon: nodejs,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    
    {
        name: "React JS",
        icon: reactjs,
    },
    
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    // {
    //     title: " Developer",
    //     company_name: "company-name",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //     ],
    // },
    // {
    //     title: "Developer",
    //     company_name: "company-2",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //     ],
    // },
    // {
    //     title: "Developer",
    //     company_name: "company-3",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //     ],
    // },
    // {
    //     title: "Developer",
    //     company_name: "company-4",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
    //     ],
    // },
];

const projects = [
  {
    name: "AI article summerizer",
    description:
      "Simplify your reading with Summarize, an article summarizer that transforms lengthy articles into clear and concise summaries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ai_summerizer,
    source_code_link: "https://github.com/parasmahla1/ai_summerizer",
  },
  {
    name: "Youtube Clone",
    description:
      "The objective of this project is to develop a simplified video-sharing platform, reminiscent of YouTube, focusing solely on video-viewing functionalities. Users can browse, search for, and watch videos without the ability to upload content or interact through comments, likes, or subscriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid api",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: ytclone,
    source_code_link: "https://github.com/parasmahla1/yt-clone",
  },
  
];

export { services, technologies, experiences, projects };


