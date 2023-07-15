import {
    mobile,
    backend,
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
    tripguide,
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
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
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
    {
        title: " Developer",
        company_name: "company-name",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
        ],
    },
    {
        title: "Developer",
        company_name: "company-2",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
        ],
    },
    {
        title: "Developer",
        company_name: "company-3",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
        ],
    },
    {
        title: "Developer",
        company_name: "company-4",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate quis, distinctio voluptas sequi deleniti",
        ],
    },
];

const projects = [
    {
        name: "abc",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex laudantium debitis, saepe vel itaque eius delectus est in doloremque id modi totam aut adipisci. Labore nemo fuga facere sequi voluptatem corrupti dolore quia, deserunt dignissimos neque soluta ad quasi aspernatur debitis reiciendis quibusdam numquam, tempore nam? Nostrum, officia amet",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "ABC",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex laudantium debitis, saepe vel itaque eius delectus est in doloremque id modi totam aut adipisci. Labore nemo fuga facere sequi voluptatem corrupti dolore quia, deserunt dignissimos neque soluta ad quasi aspernatur debitis reiciendis quibusdam numquam, tempore nam? Nostrum, officia amet",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "XYZ",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ex laudantium debitis, saepe vel itaque eius delectus est in doloremque id modi totam aut adipisci. Labore nemo fuga facere sequi voluptatem corrupti dolore quia, deserunt dignissimos neque soluta ad quasi aspernatur debitis reiciendis quibusdam numquam, tempore nam? Nostrum, officia amet",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "materialUI",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };


