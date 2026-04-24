const projects = [
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
      demo: "https://github.com/tristansterling3-hub/Simple-Chat-.git",
      code: "https://github.com/tristansterling3-hub/Simple-Chat-.git",
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
      demo: "#",
      code: "#",
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

const skills = [
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

const stats = [
  { value: "6+", label: "Major projects built" },
  { value: "4", label: "Core languages used regularly" },
  { value: "3", label: "Development areas: web, game, data" },
];

const $ = (selector) => document.querySelector(selector);

const projectsGrid = $("#projectsGrid");
const skillsGrid = $("#skillsGrid");
const projectPanel = $("#projectPanel");
const projectPanelBody = $("#projectPanelBody");
const closePanelBtn = $("#closePanel");
const yearEl = $("#year");
const statGrid = $("#statGrid");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function escapeHTML(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStats() {
  if (!statGrid) return;

  statGrid.innerHTML = stats
    .map(
      (stat) => `
        <article class="stat-card reveal">
          <span class="stat-value">${escapeHTML(stat.value)}</span>
          <span class="stat-label">${escapeHTML(stat.label)}</span>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card reveal" data-id="${escapeHTML(project.id)}" tabindex="0">
          <div class="project-image-wrap">
            <img class="project-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} preview image" />
            <span class="project-category">${escapeHTML(project.category)}</span>
            <span class="project-number">0${index + 1}</span>
          </div>

          <div class="project-content">
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>

            <div class="project-tags">
              ${project.tech
                .map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`)
                .join("")}
            </div>

            <button class="project-link" type="button">
              View Project
              <span>→</span>
            </button>
          </div>
        </article>
      `
    )
    .join("");

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      openProjectPanel(card.dataset.id);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectPanel(card.dataset.id);
      }
    });

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((y / rect.height) - 0.5) * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function renderSkills() {
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skills
    .map(
      (group) => `
        <article class="skill-card reveal">
          <div class="skill-card-header">
            <span class="skill-icon">${escapeHTML(group.icon)}</span>
            <h3>${escapeHTML(group.title)}</h3>
          </div>
          <div class="skill-tags">
            ${group.items
              .map((item) => `<span class="tag">${escapeHTML(item)}</span>`)
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function linksMarkup(links = {}) {
  const items = [];

  if (links.demo) {
    items.push(
      `<a class="panel-btn panel-btn-primary" href="${escapeHTML(
        links.demo
      )}" target="_blank" rel="noreferrer">Live Demo</a>`
    );
  }

  if (links.code) {
    items.push(
      `<a class="panel-btn" href="${escapeHTML(
        links.code
      )}" target="_blank" rel="noreferrer">Code</a>`
    );
  }

  return items.join("");
}

function openProjectPanel(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project || !projectPanel || !projectPanelBody) return;

  projectPanelBody.innerHTML = `
    <div class="panel-image-wrap">
      <img class="panel-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} preview image" />
    </div>

    <div class="panel-topline">
      <span class="panel-pill">${escapeHTML(project.category)}</span>
    </div>

    <h3>${escapeHTML(project.title)}</h3>
    <p class="panel-description">${escapeHTML(project.description)}</p>

    <div class="panel-tags">
      ${project.tech.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
    </div>

    <div class="panel-section">
      <h4>Highlights</h4>
      <ul>
        ${project.details.map((detail) => `<li>${escapeHTML(detail)}</li>`).join("")}
      </ul>
    </div>

    <div class="panel-actions">
      ${linksMarkup(project.links)}
    </div>
  `;

  projectPanel.classList.add("open");
  document.body.classList.add("panel-open");
}

function closeProjectPanel() {
  if (!projectPanel || !projectPanelBody) return;

  projectPanel.classList.remove("open");
  document.body.classList.remove("panel-open");

  setTimeout(() => {
    if (!projectPanel.classList.contains("open")) {
      projectPanelBody.innerHTML = "";
    }
  }, 250);
}

if (closePanelBtn) {
  closePanelBtn.addEventListener("click", closeProjectPanel);
}

if (projectPanel) {
  projectPanel.addEventListener("click", (event) => {
    if (event.target.classList.contains("project-panel")) {
      closeProjectPanel();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectPanel();
  }
});

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

function setupParallaxGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;

  window.addEventListener("mousemove", (event) => {
    glow.style.transform = `translate(${event.clientX - 160}px, ${event.clientY - 160}px)`;
  });
}

renderStats();
renderProjects();
renderSkills();
setupRevealAnimation();
setupSmoothScroll();
setupParallaxGlow();
