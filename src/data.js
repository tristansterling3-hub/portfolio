export const projects = [
  {
    id: "chat-app",
    title: "Simple Chat",
    category: "Software Engineering",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "A realtime chat platform built with Node.js, Socket.IO, and SQLite featuring rooms, direct messages, moderation controls, reactions, pinned messages, search, and file uploads.",
    tech: ["Node.js", "Socket.IO", "SQLite", "JavaScript", "Testing"],
    links: {
      demo: "https://github.com/tristansterling3-hub/Simple-Chat-",
      code: "https://github.com/tristansterling3-hub/Simple-Chat-",
    },
    details: [
      "Implemented realtime room chat and direct messages with online presence and typing indicators.",
      "Added moderation workflows including kick, ban, pinning, and moderator message deletion with logging.",
      "Mapped and implemented 20 user requirements and 10 system requirements, including persistence and rate limiting.",
    ],
  },
  {
    id: "financial-dashboard",
    title: "Financial Resilience Dashboard",
    category: "Data Application",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "An interactive Streamlit dashboard that visualizes state-level financial resilience using adjustable weights for income, unemployment, and cost-of-living factors.",
    tech: ["Python", "Streamlit", "Pandas", "Data Visualization"],
    links: {
      demo: "https://tristansterling3-hub.github.io/Financial-Resilience-Dashboard/",
      code: "https://github.com/tristansterling3-hub/Financial-Resilience-Dashboard",
    },
    details: [
      "Built interactive controls that let users adjust weighted factors dynamically.",
      "Turned raw CSV data into a more accessible visual tool for exploring resilience scores.",
      "Highlights skills in dashboard design, data processing, and user-focused visualization.",
    ],
  },
  {
    id: "student-web-app",
    title: "Student Management Web App",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description:
      "A PHP and MySQL web application for adding and viewing student records through form-driven workflows and database-backed pages.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    links: {
      demo: "#",
      code: "#",
    },
    details: [
      "Created form handling and record display pages for managing student information.",
      "Connected the frontend to a MySQL database for persistent storage.",
      "Shows practical full-stack fundamentals with server-side processing and relational data.",
    ],
  },
  {
    id: "image-morphing",
    title: "Image Morphing Using Recursion",
    category: "Java Project",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A Java project that generates image sequences morphing from one image to another using recursion, then exports the frames for animation.",
    tech: ["Java", "Recursion", "GUI", "Image Processing"],
    links: {
      demo: "#",
      code: "#",
    },
    details: [
      "Used recursion to generate transition frames between a starting and ending image.",
      "Included GUI-based image selection and sequence generation.",
      "Demonstrates problem solving, algorithmic thinking, and visual program output.",
    ],
  },
  {
    id: "esports-game",
    title: "Esports Learning Game",
    category: "Game Project",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    description:
      "An educational game project that teaches players about esports through multiple themed levels covering the industry, popular games, and careers.",
    tech: ["Game Design", "Educational Design", "UI Logic", "Progression Systems"],
    links: {
      demo: "#",
      code: "#",
    },
    details: [
      "Structured the game into learning-focused levels with progression-based content.",
      "Designed interaction flow around esports concepts, games, and career exploration.",
      "Shows design thinking, content structuring, and educational game development ideas.",
    ],
  },
  {
    id: "unity-systems",
    title: "Unity Gameplay Systems",
    category: "Game Development",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    description:
      "A collection of Unity systems work including player movement, item collection, enemy behaviors, UI updates, camera logic, and animation setup.",
    tech: ["Unity", "C#", "Animation", "Gameplay Programming"],
    links: {
      demo: "#",
      code: "#",
    },
    details: [
      "Worked on player controllers, health and item UI, enemy logic, and camera systems.",
      "Integrated gameplay code with animation states and interface updates.",
      "Highlights hands-on experience with game systems programming and debugging in Unity.",
    ],
  },
];

export const skills = [
  {
    title: "Game Development",
    icon: "🎮",
    items: ["Unity", "C#", "Gameplay Systems", "UI", "Animation"],
  },
  {
    title: "Languages",
    icon: "</>",
    items: ["Java", "Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    items: ["HTML5", "CSS3", "Streamlit", "MySQL", "Responsive Design"],
  },
  {
    title: "Data & Analysis",
    icon: "📊",
    items: ["Pandas", "NumPy", "Matplotlib", "Dashboards", "Visualization"],
  },
  {
    title: "Software Engineering",
    icon: "⚙️",
    items: ["Requirements", "Testing", "System Design", "Documentation"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    items: ["Git", "VS Code", "Eclipse", "MAMP", "Blender"],
  },
];

export const stats = [
  { value: "6+", label: "Major projects built" },
  { value: "4", label: "Core languages used regularly" },
  { value: "3", label: "Development areas: web, game, data" },
];
