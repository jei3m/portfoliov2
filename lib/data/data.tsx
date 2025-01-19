
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
        "description": "A thesis project website under development, built with React JS. It integrates Blynk API and Gemini AI.",
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
      "description": "A full-stack document editor website built with React JS, Firebase, and Gemini AI.",
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
          "Llama 405B",
          "Tailwind CSS"
      ]
    }
  ]
} as const;