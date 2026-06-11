// Resume data structured for easy updates and display
const resumeData = {
  contact: {
    phone: "+91 6239252032",
    email: "ramneekkaur.gn@gmail.com",
    location: "Mohali, Punjab, India",
    github: "github.com/ramneekkaur05",
    linkedin: "linkedin.com/in/ramneekkaur05"
  },

  introduction: {
    title: "Aspiring Software & AI/ML Engineer",
    summary: "Strong foundations in C/C++, Python, Data Science, and Machine Learning with experience across full SDLC phases — requirements, design, coding, testing, and deployment. Proficient in OS fundamentals including process management, memory management, and inter-process communication. Passionate about solving real-world problems with clean, maintainable code and consumer-needs-first mindset.",
    strengths: [
      "Full Software Development Life Cycle (SDLC)",
      "Modular & reusable software components",
      "OS fundamentals (Windows/Linux)",
      "Consumer-needs-first approach"
    ]
  },

  projects: [
    {
      title: "RAG over Audio",
      date: "Aug 2025",
      category: "RAG",
      categoryColor: "teal",
      summary: "Full SDLC pipeline for AI-powered question answering over audio",
      highlights: [
        "Implemented audio transcription using AssemblyAI",
        "Semantic retrieval using FAISS vector database",
        "Integrated LangChain with Google Gemini 1.5 Flash for context-aware responses",
        "Built interactive Streamlit interface for real-time audio query processing",
        "Designed modular, reusable components"
      ],
      tech: ["AssemblyAI", "LangChain", "FAISS", "Gemini", "Streamlit", "Python"]
    },
    {
      title: "Conversational AI Chatbot",
      date: "Aug 2025",
      category: "NLP",
      categoryColor: "blue",
      summary: "Context-aware chatbot with session memory for continuous conversation",
      highlights: [
        "Developed structured SDLC phases: design, implementation, testing, improvement",
        "Built with Python and Google Gemini API",
        "Implemented session-state-based conversation memory",
        "Designed clean, modular architecture for easy extension",
        "Enabled context-aware interactions across multiple turns"
      ],
      tech: ["Python", "Google Gemini API", "NLP", "Memory Management"]
    },
    {
      title: "Volume Controller using Hand Gesture",
      date: "Jan 2025",
      category: "CV",
      categoryColor: "rust",
      summary: "Touchless volume control using hand gestures and computer vision",
      highlights: [
        "Developed C++ and Python computer vision application",
        "Implemented hand tracking with OpenCV and MediaPipe",
        "Integrated with Windows OS audio APIs via pycaw",
        "Applied OS fundamentals for hardware abstraction",
        "Enabled touchless interaction for accessibility applications"
      ],
      tech: ["C++", "Python", "OpenCV", "MediaPipe", "Pycaw", "Windows API"]
    },
    {
      title: "AI Web Scraper",
      date: "Jan 2025",
      category: "Data",
      categoryColor: "amber",
      summary: "Modular web scraping system for structured data extraction",
      highlights: [
        "Built modular Python pipeline following SDLC best practices",
        "Combined BeautifulSoup and custom data transformation modules",
        "Implemented reusable components for data extraction to CSV and Excel",
        "Robust error handling and recovery for long-running jobs",
        "Demonstrated practical SDLC: design, coding, unit testing, maintenance"
      ],
      tech: ["Python", "BeautifulSoup", "Data Processing", "CSV/Excel"]
    },
    {
      title: "Inner Compass Journaling App",
      date: "Ongoing",
      category: "Product",
      categoryColor: "amber",
      summary: "Guided journaling platform with mood analytics and goal tracking",
      highlights: [
        "Framed as a product system, not just a UI exercise",
        "Focused on structured reflection and measurable progress signals",
        "Balanced usability with behavioral insight",
        "Support for consistent habit formation"
      ],
      tech: ["Product Thinking", "Analytics", "UX Design", "Full-Stack"]
    }
  ],

  education: [
    {
      school: "Chandigarh University",
      degree: "B.E. Computer Science Engineering",
      specialization: "AI & ML Honors",
      year: "2023–Present",
      achievement: "CGPA: 8.82"
    },
    {
      school: "Ryan International School, Chandigarh",
      degree: "Class XII, CBSE",
      year: "2023",
      achievement: "91.4%"
    },
    {
      school: "St. Xavier's High School, Mohali",
      degree: "Class X, ICSE",
      year: "2021",
      achievement: "96.4%"
    }
  ],

  skills: {
    programming: ["C", "C++", "Python", "JavaScript", "SQL"],
    softwareEngineering: [
      "SDLC (Full lifecycle)",
      "Modular Design",
      "Component Integration",
      "Code Review",
      "Issue Investigation",
      "Maintenance & Complaints Handling",
      "REST APIs"
    ],
    osAndSystems: [
      "Windows (primary)",
      "Linux",
      "Process Management",
      "Memory Management",
      "IPC",
      "System Calls",
      "Hardware Abstraction"
    ],
    aiAndML: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "Feature Engineering"
    ],
    librariesAndFrameworks: [
      "OpenCV",
      "MediaPipe",
      "LangChain",
      "FAISS",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Node.js",
      "Express.js",
      "React"
    ],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Postman"]
  },

  certifications: [
    {
      issuer: "Microsoft",
      title: "Azure AI Fundamentals",
      icon: "🏆"
    },
    {
      issuer: "NVIDIA",
      title: "Foundations of Deep Learning",
      icon: "🏆"
    },
    {
      issuer: "Google Cloud",
      title: "Introduction to Generative AI",
      icon: "🏆"
    },
    {
      issuer: "Intel India",
      title: "AI for Entrepreneurship",
      icon: "🏆"
    }
  ],

  extracurricular: [
    {
      title: "British Airways Data Science Job Simulation",
      organization: "Forage",
      description: "End-to-end SDLC simulation including data analysis, modelling, and presentation"
    },
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      organization: "Forage",
      description: "Practical experience in data processing, consumer-needs analysis, and reporting"
    },
    {
      title: "Hackathon Participant",
      organization: "Multiple competitions",
      description: "Active participant in AI and Data Science hackathons — collaborative team settings with fast-paced problem solving and delivery"
    }
  ],

  focusAreas: [
    {
      title: "Machine Learning and NLP",
      description: "RAG pipelines, semantic search, conversational systems, and model-backed workflows built for actual tasks."
    },
    {
      title: "Computer Vision",
      description: "Interactive prototypes with OpenCV and MediaPipe, especially where real-time feedback matters."
    },
    {
      title: "Data Analysis",
      description: "Python and SQL workflows that turn raw data into usable signals, summaries, and decisions."
    },
    {
      title: "Product-Minded Delivery",
      description: "Translate technical ideas into something a user can actually operate, evaluate, and benefit from."
    }
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = resumeData;
}
