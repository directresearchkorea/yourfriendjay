const profileData = {
  personal: {
    name: "Jay Ahn",
    koreanName: "안재홍 / Jay",
    title: "Senior Product & Engineering Leader",
    tagline: "Connecting technology, strategic vision, and human-centric design.",
    bio: "Passionate leader and developer dedicated to building impactful digital experiences, scalable architecture, and empowering high-performing teams. Focused on driving growth through modern technology and strategic execution.",
    location: "Seoul, South Korea",
    email: "jay@yourfriendjay.com",
    linkedin: "https://www.linkedin.com/in/jayahn/",
    github: "https://github.com",
    twitter: "https://x.com",
    website: "https://yourfriendjay.com",
    availability: "Open for Opportunities & Advisory"
  },
  highlights: [
    { number: "10+", label: "Years Experience" },
    { number: "25+", label: "Projects Delivered" },
    { number: "99.9%", label: "System Reliability" },
    { number: "15+", label: "Team Mentees & Leaders" }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Product Lead / Lead Engineer",
      company: "Innovate Tech Labs",
      period: "2022 - Present",
      location: "Seoul, South Korea",
      summary: "Leading cross-functional product and engineering initiatives focused on scalable SaaS platforms and user growth.",
      achievements: [
        "Architected core system services scaling to over 500k monthly active users.",
        "Spearheaded agile transformation resulting in a 40% improvement in sprint velocity.",
        "Mentored a team of 12 full-stack engineers, UX designers, and product managers."
      ],
      skills: ["Strategy", "Architecture", "React/Next.js", "Node.js", "Cloud Infrastructure"]
    },
    {
      id: "exp-2",
      role: "Senior Full Stack Engineer",
      company: "Global Digital Solutions",
      period: "2019 - 2022",
      location: "Seoul / Remote",
      summary: "Developed high-throughput web applications, RESTful APIs, and microservices for international clients.",
      achievements: [
        "Redesigned customer onboarding experience, increasing conversion rate by 28%.",
        "Optimized frontend performance metrics (Core Web Vitals) to achieve sub-second load times.",
        "Integrated automated CI/CD pipelines reducing deployment friction significantly."
      ],
      skills: ["JavaScript", "TypeScript", "Python", "GraphQL", "AWS", "Docker"]
    },
    {
      id: "exp-3",
      role: "Software Engineer & UI/UX Designer",
      company: "NextGen Software Solutions",
      period: "2016 - 2019",
      location: "Seoul, South Korea",
      summary: "Crafted interactive web platforms and user interface designs for enterprise software solutions.",
      achievements: [
        "Built responsive front-end components using modern web design principles.",
        "Collaborated with executive stakeholders to translate complex requirements into clean UI/UX."
      ],
      skills: ["HTML5/CSS3", "JavaScript", "UI/UX Design", "Figma", "REST APIs"]
    }
  ],
  skills: [
    {
      category: "Leadership & Product Strategy",
      items: [
        { name: "Product Strategy & Vision", level: 95 },
        { name: "Agile & Scrum Leadership", level: 90 },
        { name: "Team Mentorship & Growth", level: 92 },
        { name: "Stakeholder Management", level: 88 }
      ]
    },
    {
      category: "Engineering & Architecture",
      items: [
        { name: "JavaScript / TypeScript", level: 95 },
        { name: "React & Modern Web Frameworks", level: 92 },
        { name: "Node.js & Backend Architecture", level: 88 },
        { name: "Cloud & DevOps (AWS/GCP)", level: 85 },
        { name: "Database Design (SQL & NoSQL)", level: 86 }
      ]
    },
    {
      category: "Design & UX",
      items: [
        { name: "UI/UX Design & Prototyping", level: 85 },
        { name: "Design Systems & Tokenization", level: 90 },
        { name: "User Research & Usability", level: 82 }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Yaktimer / Personal Care Assistant",
      tagline: "Smart medication schedule & health routine management tool",
      description: "An intuitive web application designed to help users track medication schedules, set intelligent reminders, and manage daily health routines seamlessly.",
      tags: ["Web App", "JavaScript", "UX Design", "PWA"],
      link: "#",
      github: "https://github.com",
      featured: true
    },
    {
      id: "proj-2",
      title: "Enterprise Analytics Dashboard",
      tagline: "Real-time metrics visualization platform for business insights",
      description: "Custom dashboard featuring live data streaming, dynamic chart widgets, and configurable alert triggers for high-volume transactions.",
      tags: ["Dashboard", "TypeScript", "Chart.js", "WebSocket"],
      link: "#",
      github: "https://github.com",
      featured: true
    },
    {
      id: "proj-3",
      title: "Design System & UI Component Library",
      tagline: "Accessible, high-performance UI library for modern web apps",
      description: "Unified design tokens and accessible component library built with modern CSS and vanilla JS, adopted across multiple company products.",
      tags: ["Design System", "CSS Architecture", "Accessibility"],
      link: "#",
      github: "https://github.com",
      featured: true
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science / Information Technology",
      institution: "Top Tier University",
      period: "2012 - 2016",
      details: "Specialized in Software Engineering, Human-Computer Interaction, and Distributed Systems."
    }
  ],
  certifications: [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { title: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2021" }
  ]
};
