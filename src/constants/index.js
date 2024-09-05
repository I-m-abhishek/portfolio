import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    dpa,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    sql,
    python,
    cpp,
    project_1,
    project_2,
    project_3,
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Competitive Coder",
      icon: creator,
    },
    {
      title: "Tech Enthusiast",
      icon: backend,
    },
    
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company_name: "Decimal Point Analytics Pvt. Ltd.",
      icon: dpa,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Extracted and optimized data from an external API for analysis, ensuring it was in a format suitable for specific queries and database operations.",
        "Executed precise Python queries to update the database efficiently, maintaining data accuracy and relevance.",
        "Developed a Python-based automated email system to improve communication protocols and streamline notification processes.",
        "Contributed to a timesheet project by enhancing functionality, updating the Django admin panel, and collaborating effectively with cross-functional teams in a remote setting to solve project challenges."
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I’ve seen Abhishek’s excellent coding skills firsthand. His problem-solving and innovative approach make him a valuable asset to any team.",
      name: "Devansh Chauhan",
      designation: "Market Analyst",
      company: "Futures First",
      image: "./images/devansh.jpg",
    },
    {
      testimonial:
        "Abhishek is a skilled developer, delivering innovative solutions with clean, efficient code. His leadership and focus on quality make him an exceptional programmer.",
      name: "Sandeep Patel",
      designation: "DAA",
      company: "ZS",
      image: "./images/sandeep.jpg",
    },
    {
      testimonial:
        "Abhishek is a fast learner with versatility across programming languages, quickly fixing bugs and supporting fellow developers, making him a valuable team asset.",
      name: "Neelabh Srivastava",
      designation: "MTS-1",
      company: "Oracle",
      image: "./images/neelabh.png",
    },
  ];
  
  const projects = [
    {
      name: "CodeX",
      description:
        "Built an interactive blog platform using Next.js and MongoDB, allowing seamless content management. Designed a responsive UI with Tailwind CSS for an engaging user experience.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: project_1,
      source_code_link: "https://github.com/I-m-abhishek/codex",
      live_link: "https://codex-world.vercel.app/"
    },
    {
      name: "Solar Power Predictor",
      description:
        "Developed a Solar Power Predictor with ANN, accurately forecasting solar output from environmental data, and led the project to deliver a user-friendly interface.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "machine learing",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: project_2,
      source_code_link: "https://github.com/I-m-abhishek/Solar-Power-Prediction",
      live_link : "https://solarpowerpredictor.vercel.app/"
    },
    {
      name: "Portfolio",
      description:
        "A portfolio where you can learn about me, explore my technical specialties, and discover the innovative projects I've worked on. Dive in to see how I bring ideas to life through code and creativity.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: project_3,
      source_code_link: "https://github.com/I-m-abhishek/portfolio",
      live_link: "https://abhishekkatiyar.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };