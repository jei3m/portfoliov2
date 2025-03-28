
export const DATA = {

  education: [
    {
      company: "Holy Angel University",
      href: "https://www.hau.edu.ph",
      title: "BS in Computer Engineering",
      logoUrl: "/images/education/HAU.png",
      start: "2021",
      end: "2025",
      description:
      `<strong>President's List | GWA of 1.0 - 1.25</strong>
    &bull; Second Semester, SY 2023-2024
    &bull; Second Semester, SY 2021-2022

    <strong>Dean's List | GWA of 1.26 - 1.75</strong>
    &bull; First Semester, SY 2024-2025
    &bull; First Semester, SY 2021-2022`
    },
    {
      company: "St. Augustine Academy of Pampanga",
      href: "https://saap.edu.ph",
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
      href: "https://www.trackerteer.com",
      title: "Web Developer Intern",
      logoUrl: "/images/experience/Trackerteer.jpg",
      start: "November 2024",
      end: "January 2025",
      description:
      `<strong>Key Responsibilities:</strong>
    &bull; Designed and developed a responsive admin interface utilizing Laravel and React JS.
    &bull; Implemented server-side pagination, querying, and filtering to reduce client-side load.
    &bull; Optimized data fetching and caching mechanisms, minimizing unnecessary data refetching.
    &bull; Enhanced error handling with dynamic API error messages, ensuring accurate feedback.
    `
    },
    {
      company: "Freelance Web Developer",
      href: "https://github.com/jei3m",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/images/experience/JustinMiguel2.png",
      start: "July 2024",
      end: "PRESENT",
      description:
      `<strong>Key Responsibilities:</strong>
    &bull; Collaborated with clients both online and in-person to understand their requirements.
    &bull; Demonstrated problem-solving skills by providing innovative solutions to meet client objectives.
    &bull; Designed and developed web applications using modern frameworks like React JS and Next JS
    &bull; Utilized Supabase and Firebase for seamless deployment and accessibility of full-stack applications.
    `
    }
  ],  
  projects: [

    {
      "title": "AI-Ponics",
      "description": "A thesis web application developed to monitor plants in an aeroponic system.",
      "type": "School Project",
      "imageUrl": "/images/projects/aiponics.png",
      "githubUrl": "https://github.com/jei3m/ai-ponics",
      "demoUrl": "https://ai-ponics.netlify.app",
      "skills": [
          "React JS",
          "Gemini",
          "Blynk",
          "OpenWeather",
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
          "Gemini"
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
          "Tailwind"
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
          "Tailwind",
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
          "Gemini",
          "CSS"
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
          "Tailwind"
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
          "HTML",
          "CSS"
      ]
    },
    {

      "title": "React Pokemon",
      "description": "A simple turn based Pokemon battle game built with React JS and Tailwind CSS.",
      "type": "School Project",
      "imageUrl": "/images/projects/pokemon.png",
      "githubUrl": "https://github.com/jei3m/react-pokemon",
      "demoUrl": "",
      "skills": [
          "React JS",
          "Tailwind"
      ]
    },

  ]

} as const;