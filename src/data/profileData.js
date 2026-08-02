export const profileData = {
  personal: {
    name: "Jay Ahn",
    koreanName: "안재윤",
    title: "Senior Researcher & Product Engineer",
    tagline: "Driven by curiosity and a genuine desire to understand people,\nI strive to make a meaningful impact through research.\n\nI lead Direct Research Korea, a Korean market & user research agency,\nand UXR Player, a user research platform targeting Asia.\n\nI live in Jochiwon, Sejong City with my loving wife and three teenage children.",
    bio: "Passionate product leader and software architect dedicated to scaling systems, driving product growth, and mentoring engineering teams. Focused on clean architecture and high-impact digital solutions.",
    location: "Jochiwon, Sejong City, South Korea",
    email: "jacob.ahn@thedrk.com",
    linkedin: "https://www.linkedin.com/in/jayahn/",
    github: "https://github.com"
  },
  scheduleConfig: {
    timezone: "Asia/Seoul",
    // Hours in KST (24h format)
    sleep: { start: 23, end: 8, label: "Sleeping", color: "orange" },        // 23:00 - 08:00 KST
    gettingReady: { start: 8, end: 10, label: "Getting Ready", color: "orange" }, // 08:00 - 10:00 KST
    work: { start: 10, end: 18.5, label: "Working", color: "green" },         // 10:00 - 18:30 KST
    available: { label: "Available", color: "green" }                       // Other hours
  },
  highlights: [
    "250+ MR/User research projects delivered",
    "10+ MR industry products delivered",
    "Human Researcher"
  ],
  projects: [
    {
      id: "proj-loopy",
      title: "Loopy AI (AI Innovacation Loop)",
      tagline: "Automated End-to-End AI-Driven Workspace Analytics & Daily Reporting Pipeline",
      description: "Developed a fully automated data pipeline that aggregates fragmented workspace data—including emails, Google Calendar schedules, and desktop messenger logs. Engineered the backend system to leverage Gemini API for multi-dimensional contextual analysis, parsed unstructured LLM outputs into structured SQL databases, and configured automated daily report deliveries via SMTP.",
      tags: ["Python", "SQLite", "Gemini API", "Data Pipeline Engineering", "Process Automation"],
      link: "/loopy-ai-intro/index.html",
      linkLabel: "Architect",
      github: ""
    },
    {
      id: "proj-pipeline",
      title: "Pipeline CRM Dashboard (Agent Workspace)",
      tagline: "AI-powered RFQ parser and real-time visual sales pipeline automation tool",
      description: "A highly reliable B2B sales automation platform designed on a 3-layer agentic architecture (Directive-Orchestration-Execution). Built a robust data pipeline that automatically structures unformatted RFQ emails using LLM into a SQLite database, featuring interactive status tracking, automated follow-up scheduler, and VIP newsletter campaigns with open-rate analytics tracking.",
      tags: ["Python", "Flask", "Generative AI", "Database Engineering", "Salesforce Alternatives"],
      link: "/pipeline-crm-intro/index.html",
      linkLabel: "Architect",
      github: ""
    },
    {
      id: "proj-albadanji",
      title: "AlbaDanji Newsletter System",
      tagline: "Automated Job-hunting Newsletter & Web Scraping Pipeline",
      description: "Developed a fully automated Python-based pipeline that scrapes job postings from web communities and delivers them directly to subscribers via daily email newsletters. Engineered a robust backend integrating SQLite, email automation, and secure token-based Google Apps Script communication to ensure seamless and reliable continuous operation.",
      tags: ["Python", "Web Scraping", "Backend Engineering", "Database(SQLite)", "Automation"],
      link: "https://www.albadanji.com/",
      github: ""
    },
    {
      id: "proj-uxr",
      title: "UXR Player",
      tagline: "Global B2B UX Research Platform for Asian Gamers",
      description: "Designed and optimized a fast, immersive research platform for global game publishers targeting the Asian market. Implemented a cost-effective, serverless contact pipeline using Google Apps Script and integrated GA4 for lead generation tracking.",
      tags: ["HTML/CSS", "JavaScript", "Google Apps Script", "GA4", "Web Performance"],
      link: "https://eyetracking.uxrplayer.com/",
      github: ""
    },
    {
      id: "proj-drk",
      title: "Direct Research Korea",
      tagline: "Global Market Research Agency Website",
      description: "A professional corporate website designed for a Seoul-based market research agency targeting global brands. Built with a focus on SEO, responsive design, and intuitive navigation to seamlessly showcase their research methodologies and generate B2B leads.",
      tags: ["HTML/CSS", "JavaScript", "SEO Optimization", "Web Design"],
      link: "https://www.thedrk.com",
      github: ""
    }
  ],
  cases: [
    {
      id: "case-0",
      client: "ESOMAR 2026 (Tokyo)",
      title: "The Rise of the Researcher-as-Maker: Crafting Bespoke Analytical Tools with AI",
      category: "AI Innovation",
      metrics: "Agentic AI Tools",
      summary: "Discover how the paradigm shift toward 'Researcher-as-Maker' is reshaping market research. Learn how bespoke agentic tools like Inven-Pulse accelerate insight generation and drive user retention.",
      image: "/insight-esomar2026.jfif",
      link: "https://www.thedrk.com/insights/esomar2026tokyo/",
      outcomes: []
    },
    {
      id: "case-1",
      client: "ESOMAR 2024 (Bangkok)",
      title: "The Role of AI in Marketing Research",
      category: "AI Innovation",
      metrics: "Cost Efficiency & Innovation",
      summary: "Presented at ESOMAR 2024 in Bangkok, exploring the latest market research trends and technological innovations, focusing on practical examples of how AI technology can be integrated into research projects.",
      image: "/insight-ai.jpg",
      link: "https://www.thedrk.com/insights/bangkok-esomar-2024-the-role-of-ai-in-marketing-research/",
      outcomes: [
        "Practical integration of AI in market research workflows.",
        "Using AI Moderator to combine cost efficiency and innovation.",
        "Demonstration of AI-based interviews for deeper consumer insights."
      ]
    },
    {
      id: "case-2",
      client: "DMS 2023",
      title: "Marketing ROI measurement in Chaos (MMM)",
      category: "Marketing Science",
      metrics: "Marketing Mix Modeling",
      summary: "Presentation on the current opt-out marketing environment and the importance of Marketing Mix Modeling (MMM) to measure ROI amidst changes in technology, policy, and consumer behavior.",
      image: "/insight-mmm.jpg",
      link: "https://www.thedrk.com/insights/marketing-mix-modeling/",
      outcomes: [
        "Change in Technology, Policy, and Consumer behavior.",
        "What is Marketing Mix Modeling (MMM)? And why now?",
        "Step-by-Step Walkthrough of MMM.",
        "Points to Consider for MMM Projects."
      ]
    }
  ]
};
