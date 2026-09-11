export const profile = {
  name: "Shiea Sudhir Shetty",
  statement:
    "I like working with data to find patterns and insights, and using AI and machine learning to turn what I find into something useful.",
  location: "Mangaluru, India",
  focus: "Final-year CSE(AI/ML) student.",
  status: "Open to internships & full-time opportunities",
  resumeHref: "/resume.pdf",
  github: "https://github.com/shieashetty",
  linkedin: "https://linkedin.com/in/shiea-shetty",
  email: "shieashetty17@gmail.com",
};

export const about = {
  paragraphs: [
    "I'm naturally curious and like learning by building — whether that's experimenting with a new idea, working on a project, or figuring out why something isn't working the way I expected. I'm still exploring where I want to take that curiosity, but I'm particularly interested in where AI, data, and real-world problems meet.",
  ],
  facts: [
    { label: "Graduating", value: "2027" },
  ],
};

export const projects = [
  {
    id: "01",
    title: "Fake Review Detection System",
    description:
      "A machine learning system that analyzes product reviews and predicts whether they are fake or genuine. I worked with NLP-based text processing and TF-IDF features, using a Logistic Regression classifier to identify potentially deceptive reviews.",
    stack: ["Python", "NLP", "scikit-learn", "TF-IDF", "Logistic Regression", "Flask"],
    github: "https://github.com/Bhuvana-codes/Fake-Review-Detection-System",
    image: "/projects/fake-review-detection.jpeg",
  },
];

export const skills = [
  {
    category: "Data & Analytics",
    items: ["SQL", "Power BI", "Python", "pandas", "NumPy"],
  },
  {
    category: "AI & Machine Learning",
    items: ["Machine Learning", "NLP", "Prompt Engineering", "scikit-learn"],
  },
  {
    category: "Design & Visualization",
    items: ["Figma", "Data Visualization", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "Linux"],
  },
];

export const experience = [
  {
    range: "2025",
    title: "Software Testing & Web Development Intern",
    org: "Torsecure Cyber LLP",
    description:
      "Wrote automated test suites for a client web platform and contributed frontend fixes, working directly with a small engineering team on release cycles.",
  },
  
];

export const education = [
  {
    range: "2023 — 2027",
    title: "B.E. Computer Science & Engineering — AI/ML",
    org: "Your University, Mangaluru",
    description: "CGPA 8.0 / 10. Coursework in deep learning, distributed systems, and embedded ML.",
  },
];
