import type { CvData } from "./types";

export const cvData: CvData = {
  name: "Dragos Stanescu",
  titles: ["Senior React Developer", "Contractor", "Freelancer"],
  aboutMe:
    "I am a Senior React Developer and Freelance Contractor with 8 years of experience, specializing in modern frontend technologies. I focus on delivering high-quality software solutions by rapidly identifying and implementing client needs. Only interested in remote contract work.",
  contact: {
    phone: "(+40) 724 320 471",
    email: "dragos.stanescu.dev@gmail.com",
    location: "Brasov, Romania",
    linkedin: {
      label: "in/dragos-stanescu",
      url: "https://www.linkedin.com/in/dragos-stanescu-21450b129/",
    },
  },
  skills: [
    { name: "JavaScript", years: 8 },
    { name: "HTML, CSS", years: 8 },
    { name: "ReactJs", years: 6 },
    { name: "Redux", years: 5 },
    { name: "TypeScript", years: 5 },
    { name: "Material UI", years: 5 },
    { name: "React Query", years: 3 },
    { name: "React Native", years: 2 },
    { name: "Zustand", years: 2 },
    { name: "Angular", years: 2 },
    { name: "NodeJS", years: 2 },
    { name: "GraphQL", years: 2 },
    { name: "Contentful", years: 2 },
    { name: "Webpack", years: 1 },
    { name: "Java", years: 1 },
    { name: "MySQL", years: 1 },
  ],
  education: {
    institution: "Romanian-American University",
    degree: "Bachelor's Degree, Management",
    location: "Bucharest",
    period: "2016 - 2020",
  },
  projects: [
    {
      projectName: "Commercial PayEx V2",
      from: "Dec 2024",
      to: "Present",
      title: "Senior React Developer",
      company: "Flywire",
      clientProblem:
        "The client, a US-based global payment enablement and software company, requires a complete rewrite of their Commercial PayEx checkout platform to address maintainability issues, improve scalability, implement a new design and modernize the technology stack for their international commercial payment processing solution.",
      achievements: [
        {
          bold: "Implement feature-based architecture",
          detail:
            "ensuring strict separation of concerns and preventing architectural violations across the application.",
        },
        {
          bold: "Architected and developed a full-stack TypeScript rewrite,",
          detail:
            "migrating from untyped JavaScript to a fully type-safe codebase with comprehensive compile-time validation.",
        },
        {
          bold: "Modernize the technology stack",
          detail:
            "by adopting Vite for significantly faster build times compared to the legacy setup, TanStack Router for advanced route capabilities and Valibot for type-safe runtime validation.",
        },
        {
          bold: "Developed a multi-step checkout flow",
          detail:
            "including participant fields collection, offer selection with real-time exchange rate, terms acceptance and payment instructions rendering with state management using Zustand.",
        },
      ],
      skills: [
        "React",
        "TypeScript",
        "TanStack Router",
        "Zustand",
        "React Hook Form",
        "Valibot",
        "HCaptcha",
      ],
    },
    {
      projectName: "RAG Chatbot",
      from: "Apr 2024",
      to: "Nov 2024",
      title: "Senior React Developer",
      company: "mindit.io",
      clientProblem:
        "The client, a Swiss company that operates in the electricity industry, faced challenges in informing users about their events, leading to low attendance.",
      achievements: [
        {
          bold: "Increased event awareness and registration",
          detail:
            "by providing users with a convenient and informative way to access event details through the chatbot.",
        },
        {
          bold: "Integrated the chatbot seamlessly",
          detail:
            "with the company's existing platform website, ensuring accurate and up-to-date information retrieval.",
        },
      ],
      skills: ["React", "TypeScript", "Fluent UI"],
    },
    {
      projectName: "The Debt Origination Platform",
      from: "Nov 2023",
      to: "Feb 2024",
      title: "Senior React Developer",
      company: "Bondify B.V.",
      clientProblem:
        "The client, a Dutch company specialized in accelerating the debt origination process for complex loan and bond transactions, aimed to enhance platform performance, particularly in handling large documents, to improve the retention of new clients.",
      achievements: [
        {
          bold: "Improved drastically the initial loading time to a few seconds for large documents",
          detail:
            "by restructuring the application's architecture, optimizing the communication with the backend and how the data was handled.",
        },
        {
          bold: "Boosted the user experience",
          detail:
            "by implementing a new and appealing design, more intuitive than the previous one.",
        },
        {
          bold: "Reduce the bundle size of the application 3 times",
          detail:
            "through effective asset management on AWS storage, resulting in a much lighter deployment process.",
        },
      ],
      skills: [
        "React",
        "TypeScript",
        "GraphQL",
        "Material UI",
        "AWS",
        "GitHub",
        "CK Editor",
      ],
    },
    {
      projectName: "Climate Finance Dashboard",
      from: "May 2023",
      to: "Sept 2023",
      title: "Senior React Developer",
      company: "AID:Tech",
      clientProblem:
        "The client, an Irish-based company, first in the world to deliver international aid over blockchain technology, was searching for a comprehensive suite of disaster relief aid solutions. They faced challenges in acquiring new clients and raising funds, hampering their mission.",
      achievements: [
        {
          bold: "Restructured and streamlined the campaign creation process,",
          detail:
            "resulting in a more concise and intuitive user experience.",
        },
        {
          bold: "Expanded aid options to include cash, credit, and bundles,",
          detail:
            "enhancing the versatility of the aid process and providing more choices to clients.",
        },
        {
          bold: "Implemented product search functionality using Amazon API",
          detail:
            "to enable the creation of product bundles for aid delivery, improving efficiency and effectiveness in providing aid to survivors.",
        },
        {
          bold: "Introduced localization features,",
          detail:
            "making it easier to tailor aid solutions to specific regions and communities.",
        },
      ],
      skills: ["React", "TypeScript", "GraphQL", "Material UI", "GitHub"],
    },
    {
      projectName: "Global payments enablement",
      from: "Feb 2022",
      to: "May 2023",
      title: "Senior React Developer",
      company: "Flywire",
      clientProblem:
        "The client, a leading US provider of payment services, was searching for a solution to enable payments between universities and beneficiaries in a much easier and faster way, the process being slowed down by the incompatibility of different payment methods and currencies.",
      achievements: [
        {
          bold: "Decreased the time for sending payments",
          detail:
            "by implementing a bundle payments system with import from Excel files.",
        },
        {
          bold: "Improved the development time",
          detail:
            "by using the latest versions of package bundlers and this way keeping components that were common across several applications in one place.",
        },
      ],
      skills: ["React", "Redux", "Material UI", "WebPack", "NodeJS"],
    },
    {
      projectName: "Financial Advisor application",
      from: "Jan 2019",
      to: "Feb 2022",
      title: "React Developer",
      company: "investify",
      clientProblem:
        "The client, a German provider of financial services, was dealing with a low conversion rate for their financial solutions to individual clients and B2B customers because of a rigid application build.",
      achievements: [
        {
          bold: "Decreased the time for customizing the application for a new partner to under 1 month",
          detail:
            "by creating a whitelabel approach in which the theming (styles, fonts, colors) can be adjusted in the first days and the desired business flow into a few weeks.",
        },
        {
          bold: "Improved the user experience",
          detail:
            "by implementing a new and compelling design, responsive on all devices and a mobile application that resemblance the web app.",
        },
      ],
      skills: [
        "React",
        "React Native",
        "Material UI",
        "Redux",
        "React Query",
        "CMS",
      ],
    },
    {
      projectName: "Master Data Tool",
      from: "Dec 2017",
      to: "Dec 2018",
      title: "Angular Developer",
      company: "mindit.io",
      clientProblem:
        "The client, a Swiss retail company present in most countries, wanted to boost their sales and remove the blockages that occurred in their business flow because of trouble with the stocks and delays in delivering the goods.",
      achievements: [
        {
          bold: "Increased productivity",
          detail:
            "by implementing modules that were accessible based on the role of each user. This way, a person can have a clear view just on what it's in his responsibility.",
        },
        {
          bold: "Decreased the loading time to under 3 seconds",
          detail:
            "by adding server-side pagination and filtering for big amounts of data.",
        },
      ],
      skills: [
        "Angular",
        "TypeScript",
        "RxJS",
        "PrimeNG",
        "Bootstrap",
        "Java",
        "SQL Server Management System",
      ],
    },
  ],
};
