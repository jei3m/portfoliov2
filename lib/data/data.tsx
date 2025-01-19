
export const DATA = {

  education: [
    {
      company: "Holy Angel University",
      href: "",
      badges: [],
      location: "Remote",
      title: "BS in Computer Engineering",
      logoUrl: "/images/education/HAU.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
      `<strong>Dean's List | GWA of 1.26 - 1.75</strong>
    &bull; First Semester, SY 2024-2025
    &bull; First Semester, SY 2021-2022
    
    <strong>President's List | GWA of 1.0 - 1.25</strong>
    &bull; Second Semester, SY 2023-2024
    &bull; Second Semester, SY 2021-2022`
    },
    {
      company: "St. Augustine Academy of Pampanga",
      href: "",
      badges: [],
      location: "Remote",
      title: "Senior Highschool",
      logoUrl: "/images/education/SAAP.png",
      start: "2019",
      end: "2021",
      description:
      `<strong>With Honors | Final Avg of 90 - 94</strong>
    &bull; SY 2020-2021
    &bull; SY 2019-2020
    `
    }
  ],
  experience: [
    {
      company: "Trackerteer",
      href: "",
      badges: [],
      title: "Web Developer Intern",
      logoUrl: "/images/experience/Trackerteer.jpg",
      start: "November 2024",
      end: "PRESENT",
      description:
      `<strong>Key Responsibilities:</strong>
    &bull; Designed and developed a responsive full-stack web-application.
    &bull; Implemented server-sided pagination, queries, and filtering.
    &bull; Optimized web-app performance with data fetching, and caching.
    &bull; Enhanced error handling with dynamic error messages from the API.
    `
    },
    {
      company: "Freelancing",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/images/experience/JustinMiguel2.png",
      start: "July 2024",
      end: "PRESENT",
      description:
      `<strong>Key Responsibilities:</strong>
    &bull; Designed and developed a responsive full-stack web-application.
    &bull; Implemented server-sided pagination, queries, and filtering.
    &bull; Optimized web-app performance with data fetching, and caching.
    &bull; Enhanced error handling with dynamic error messages from the API.
    `
    }
  ],
  projects: [

    {
        "title": "AI-Ponics",
        "description": "A thesis project under development, built with React JS. It integrates Blynk API and Gemini AI.",
        "type": "School Project",
        "imageUrl": "/images/projects/aiponics.png",
        "githubUrl": "https://github.com/jei3m/ai-ponics",
        "demoUrl": "https://ai-ponics.netlify.app",
        "skills": [
            "React JS",
            "Gemini AI",
            "Blynk API",
            "Firebase"
        ]
    },
    {
      "title": "ScribeAI",
      "description": "A full-stack document editor built with React JS, React Quill, Firebase, and Gemini AI for content assistance.",
      "type": "Personal Project",
      "imageUrl": "/images/projects/scribe.png",
      "githubUrl": "https://github.com/jei3m/scribe-ai",
      "demoUrl": "https://ai-scribe.netlify.app",
      "skills": [
          "React JS",
          "Firebase",
          "Gemini AI"
      ]
    },
    {
      "title": "AI Coder",
      "description": "A Next JS-based website integrated with Llama 405B to create React components with prompts.",
      "type": "Personal Project",
      "imageUrl": "/images/projects/aicoder.png",
      "githubUrl": "https://github.com/jei3m/ai-coder",
      "demoUrl": "https://ai-coder-llama.netlify.app",
      "skills": [
          "Next JS",
          "Llama 3.3",
          "Tailwind CSS"
      ]
    },
    {
      "title": "E-Commerce",
      "description": "A full-stack E-commerce platform built with Laravel, with PayPal integration for online payments.",
      "type": "Personal Project",
      "imageUrl": "/images/projects/laravelshop.png",
      "githubUrl": "https://github.com/jei3m/laravel-ecommerce",
      "demoUrl": "",
      "skills": [
          "Laravel",
          "Tailwind CSS",
          "Paypal"
      ]
    },
    {
      "title": "Pogi Typings",
      "description": "A React JS website with Gemini AI to correct punctuation and spelling of Taglish sentences.",
      "type": "Personal Project",
      "imageUrl": "/images/projects/pogi.png",
      "githubUrl": "https://github.com/jei3m/pogi-typings",
      "demoUrl": "https://pogi-typings.vercel.app",
      "skills": [
          "React JS",
          "Gemini AI",
          "HTML & CSS"
      ]
    },
    {
      "title": "Ollama Chat",
      "description": "A Next JS-based project that serves as an intuitive UI for running local Ollama models.",
      "type": "Personal Project",
      "imageUrl": "/images/projects/ollama.png",
      "githubUrl": "https://github.com/jei3m/ollama-chat",
      "skills": [
          "Next JS",
          "Ollama",
          "TypeScript",
          "Tailwind CSS"
      ]
    },
    {

      "title": "About Me",
      "description": "A requirement for our Software Development course, built with HTML and CSS.",
      "type": "School Project",
      "imageUrl": "/images/projects/aboutme.png",
      "githubUrl": "https://github.com/jei3m/SDEV_Experiment-4/tree/main",
      "demoUrl": "https://aboutjm.vercel.app",
      "skills": [
          "HTML & CSS"
      ]
    },
    {

      "title": "React Pokemon",
      "description": "A simple turn based Pokemon battle game built with React JS and Tailwind CSS.",
      "type": "School Project",
      "imageUrl": "/images/projects/pokemon.png",
      "githubUrl": "https://github.com/jei3m/SDEV_Experiment-4/tree/main",
      "demoUrl": "https://aboutjm.vercel.app",
      "skills": [
          "React JS",
          "Tailwind CSS"
      ]
    },

  ]

} as const;