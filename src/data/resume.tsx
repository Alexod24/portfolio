import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon, Wrench } from "lucide-react";

export const DATA_EN = {
  sectionHeaders: {
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
    projects: {
      tag: "My Projects",
      title: "Check out my latest work",
      description:
        "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    about: {
      tag: "About Me",
      title: "Get to know me",
      description:
        "A glimpse into my journey, passions, and what drives me every day.",
    },
    contact: {
      title: "Contact Me",
      description: "Send me a message",
      whatsapp: "Chat on WhatsApp",
    },
    hackathons: {
      tag: "Hackathons",
      title: "Hackathons",
      description: "I like building things during weekends.",
    },
  },
  name: "Alex",
  initials: "DV",
  url: "https://portfolio-bice-two-99.vercel.app/",
  location: "Perú",
  locationLink: "https://maps.app.goo.gl/me5L15w4JQRSvUjZ6",
  description: "Full Stack Developer",
  summary:
    "I'm Alex, specializing in designing scalable architectures and building high-performance digital products. A comprehensive approach focused on technical efficiency and excellence in software development.",
  about:
    "Hello, I'm Alex. Developer by vocation and curious by choice.\n\nI study Software Engineering, and since my early years in the program, I fell in love with web development. I enjoy building functional projects, learning new technologies, and exploring how programming can improve productivity and daily life.\n\nBeyond coding, I enjoy learning about personal development, habits, discipline, and mindset. I firmly believe that professional growth begins with inner growth.\n\nI have worked on inventory management projects, process automation, and web platforms for co-working spaces, in addition to experimenting with new tools.",
  aboutPage: {
    tagline: "Coding with purpose, building with passion.",
    bio: "I'm Alex, a Full Stack Developer based in Peru, driven by the challenge of transforming complex problems into elegant, user-centric digital solutions. My journey in tech is fueled by a relentless curiosity and a commitment to excellence. I don't just write code; I architect experiences that empower users and businesses.\n\nCurrently, I'm channeling my energy into LegalTech at Arxatec, where I'm leveraging AI to modernize the legal industry. My background spans from crafting immersive web experiences for co-working spaces to building robust ERP systems. I thrive in the intersection of engineering and design, always seeking the sweet spot where performance meets aesthetics.",
    philosophy:
      "I firmly believe that the quality of your code is a reflection of the clarity of your mind. 'Professional growth begins with inner growth' isn't just a motto; it's my daily practice. I approach development with discipline, continuous learning, and a stoic mindset, ensuring that every line of code serves a meaningful purpose. Whether it's optimizing a database query or refining a UI animation, I strive for craftsmanship in every detail.",
    experienceContext:
      "My professional path has been diverse and dynamic. From the structured world of systems engineering at Senati and Universidad Continental to the fast-paced environment of startups and hackathons, I've cultivated a versatile skill set. I've led projects, collaborated with cross-functional teams, and constantly pushed the boundaries of what's possible with technologies like Next.js, AI, and cloud infrastructure. This blend of academic rigor and practical, hands-on experience allows me to tackle challenges with both theoretical depth and pragmatic agility.",
  },
  avatarUrl: "/alex.png",
  skillsCategories: [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          icon: Icons.javascript,
          description: "Lenguaje principal para el desarrollo web interactivo.",
        },
        {
          name: "TypeScript",
          icon: Icons.typescript,
          description:
            "JavaScript con tipado estático para aplicaciones escalables.",
        },
        {
          name: "Python",
          icon: Icons.python,
          description: "Versátil para backend, scripts y ciencia de datos.",
        },
        {
          name: "Java",
          icon: Icons.java,
          description:
            "Robusto y orientado a objetos para sistemas empresariales.",
        },
        {
          name: "C++",
          icon: Icons.cpp,
          description: "Alto rendimiento y control sobre recursos del sistema.",
        },
        {
          name: "Go",
          icon: Icons.go,
          description: "Eficiencia y concurrencia para servicios modernos.",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: Icons.react,
          description: "Biblioteca líder para interfaces de usuario dinámicas.",
        },
        {
          name: "Next.js",
          icon: Icons.nextjs,
          description:
            "Framework de React para producción y renderizado híbrido.",
        },
        {
          name: "TailwindCSS",
          icon: Icons.tailwindcss,
          description:
            "Framework de utilidad para diseño rápido y consistente.",
        },
        {
          name: "Astro",
          icon: Icons.astro,
          description:
            "Rendimiento optimizado para sitios orientados a contenido.",
        },
        {
          name: "Framer Motion",
          icon: Icons.framermotion,
          description: "Animaciones fluidas y declarativas para React.",
        },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        {
          name: "Node.js",
          icon: Icons.nodejs,
          description: "Entorno de ejecución para backend rápido y escalable.",
        },
        {
          name: "PostgreSQL",
          icon: Icons.postgresql,
          description: "Base de datos relacional potente y confiable.",
        },
        {
          name: "MySQL",
          icon: Icons.mysql,
          description: "Gestión de datos relacional ampliamente utilizada.",
        },
        {
          name: "Supabase",
          icon: Icons.supabase,
          description: "Backend como servicio con esteroides sobre PostgreSQL.",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        {
          name: "Git",
          icon: Icons.github,
          description: "Control de versiones esencial para colaboración.",
        },
        {
          name: "Docker",
          icon: Icons.docker,
          description: "Contenerización para despliegues consistentes.",
        },
        {
          name: "Kubernetes",
          icon: Icons.kubernetes,
          description: "Orquestación de contenedores a gran escala.",
        },
        {
          name: "Figma",
          icon: Icons.figma,
          description: "Diseño colaborativo de interfaces y prototipos.",
        },
        {
          name: "Notion",
          icon: Icons.notion,
          description: "Gestión del, conocimiento y organización de proyectos.",
        },
        {
          name: "OpenAI",
          icon: Icons.openai,
          description:
            "Integración de inteligencia artificial en aplicaciones.",
        },
      ],
    },
    {
      title: "Communities",
      skills: [
        {
          name: "GDG",
          icon: Icons.gdg,
          description:
            "Google Developer Groups: Expandiendo conocimiento tecnológico globalmente.",
        },
        {
          name: "Platzi",
          icon: Icons.platzi,
          description: "Comunidad de aprendizaje continuo en tecnología.",
        },
      ],
    },
  ],
  navbar: [
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/skills", icon: Wrench, label: "Skills" },
    { href: "/cv/cv.pdf", icon: FileTextIcon, label: "CV", target: "_blank" },
  ],
  contact: {
    email: "alex.od2408@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Alexod24",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ordo%C3%B1ez-diego/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Kick: {
        name: "Kick",
        url: "https://kick.com/alexcode24",
        icon: Icons.kick,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Alex.od2408",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:alex.od2408@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/51960700355",
        icon: Icons.whatsapp,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Arxatec",
      href: "https://arxatec.net",
      badges: ["Next.js", "TypeScript", "OpenAI", "Shadcn UI", "PostgreSQL"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/logos/arxatec.jpg",
      start: "2025",
      end: "Present",
      className: "md:col-span-2",
      backgroundUrl: "/projects/arxatec/dashboard.png",
      companyProfile:
        "Arxatec is the all-in-one legal platform for lawyers and law firms: case management, documents, clients, billing, and an AI legal assistant. Faster, safer, and designed to maximize legal productivity.",
      services: [
        "Legal Automation",
        "Case Management",
        "Client Portal",
        "AI Legal Assistant",
        "Billing & Invoicing",
      ],
      youtube: "https://www.youtube.com/@Arxatec",
      gallery: [
        "/projects/arxatec/dashboard.png",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
      ],
      description:
        "Spearheading the digital transformation of the legal sector by building a comprehensive LegalTech platform.\n\n• Architected and developed a scalable frontend using Next.js 14 and TypeScript, improving page load speeds by 40%.\n• Integrated OpenAI's API to automate legal document drafting, reducing lawyer's drafting time by roughly 60%.\n• Implemented real-time collaboration features using WebSockets and efficient state management.\n• Designed a component library with Shadcn UI to ensure UI consistency across the platform.",
    },
    {
      company: "La Base Cowork",
      badges: ["React", "PHP", "MySQL", "SEO", "Payment Integrations"],
      href: "https://labase.pe",
      location: "On-site",
      title: "Web Developer",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmltCbeB-oyIL7sEe6veiY6klrX5z-ln46jQ&s",
      start: "2024",
      end: "2025",
      className: "md:col-span-1",
      backgroundUrl: "/projects/inventory.png",
      companyProfile:
        "La Base Cowork offers a unique environment where creativity becomes innovation. Themed spaces inspired by the military world, constant collaboration, and the necessary technology for your team to grow.",
      services: [
        "Private Offices",
        "Flexible Desks",
        "Meeting Rooms",
        "Networking",
        "Auditorium",
        "Coffee Break",
      ],
      youtube: "https://www.youtube.com/@basecowork",
      gallery: [
        "/projects/inventory.png",
        "https://labase.pe/assets/img/espacios/oficina-privada.jpg",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop",
      ],
      description:
        "Digitalized the operations of a busy co-working space through custom web solutions.\n\n• Developed a custom booking and membership management system, streamlining the reservation process for over 50+ active members.\n• Optimized the main corporate website for SEO and performance, resulting in a 25% increase in organic traffic.\n• integrated local payment gateways to facilitate automated billing and invoicing.\n• Collaborated directly with stakeholders to gather requirements and iterate on user feedback.",
    },
    {
      company: "TID",
      href: "https://tid.com.pe/dashboard/inicio.php",
      badges: ["React", "CodeIgniter", "Electronic Invoicing", "SQL"],
      location: "On-site",
      title: "Systems Developer",
      logoUrl: "https://tid.com.pe/assets/img/logos/logo_tid_SF.png",
      start: "2023",
      end: "2024",
      className: "md:col-span-1",
      backgroundUrl: "",
      companyProfile:
        "Specialists in integral technology solutions for business management. TID develops robust ERP systems focused on operational efficiency, electronic invoicing, and regulatory compliance for various sectors.",
      services: [
        "Software Development",
        "Electronic Invoicing",
        "IT Consulting",
        "ERP Systems",
        "Business Intelligence",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
      ],
      description:
        "Contributed to the development of robust ERP solutions for the education and gastronomy sectors.\n\n• Developed and maintained modules for electronic invoicing, ensuring compliance with local tax regulations (SUNAT).\n• Refactored legacy codebases to improve maintainability and reduce technical debt.\n• Implemented reporting dashboards using React and charting libraries to visualize key business metrics for clients.\n• Participated in agile development cycles (Scrum), attending daily stand-ups and sprint reviews.",
    },
  ],
  education: [
    {
      school: "Universidad Continental",
      href: "https://buildspace.so",
      degree: "Systems and Informatics Engineering",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkD6xk77yPxtbVxfClUe-MV7XC48RE2EPIrw&s",
      start: "2025",
      end: "2028",
      description:
        "Bachelor's Degree in Systems Engineering. Focused on software architecture, algorithms, and systems design.",
      slug: "continental",
      banner: "/education/banners/continental.webp",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/AlexCode/",
      degree:
        "Programming, Web Development, Marketing, English and Digital Skills",
      logoUrl: "/platzi.png",
      start: "2024",
      end: "2025",
      description:
        "Comprehensive learning path covering web development, digital marketing, and English for tech professionals.",
      slug: "platzi",
      banner: "/education/platzi.png",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description:
            "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description:
            "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description:
            "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description:
            "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description:
            "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },

    {
      school: "DevTalles",
      href: "https://ibo.org",
      degree:
        "Courses in React, MERN, Qwik, TanStack Query, Shadcn/UI and VS Code",
      logoUrl: "/devtalles.png",
      start: "2024",
      end: "2025",
      description:
        "Specialized training in modern web stack technologies including React, Next.js, and advanced state management.",
      slug: "devtalles",
      banner: "/education/banners/devtalles.png",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description:
            "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description:
            "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description:
            "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description:
            "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description:
            "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "ED Team",
      href: "https://wlu.ca",
      degree:
        "Courses in OOP, TDD, APIs, terminal and web development fundamentals",
      logoUrl: "/edteam.png",
      start: "2024",
      end: "2024",
      description:
        "Focused on backend fundamentals, object-oriented programming, and test-driven development.",
      slug: "edteam",
      banner: "/education/banners/edteam.jpg",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description:
            "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description:
            "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description:
            "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description:
            "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description:
            "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Codigo Facilito",
      href: "https://ibo.org",
      degree:
        "Bootcamps in development, AI, DevOps, leadership and interface design",
      logoUrl: "/codigofacilito.jpg",
      start: "2024",
      end: "2024",
      description:
        "Intensive bootcamps covering AI integration, DevOps practices, and UI/UX design principles.",
      slug: "codigofacilito",
      banner: "/education/banners/codigo-facilito.png",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description:
            "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description:
            "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description:
            "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description:
            "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description:
            "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Oracle Academy",
      href: "https://ibo.org",
      degree: "Certificaciones in AI, SQL and Java",
      logoUrl: "https://dig-ed.org/wp-content/uploads/2024/09/oracl.png",
      start: "2023",
      end: "2024",
      description:
        "Certified training in Database Design, SQL programming, and Artificial Intelligence fundamentals.",
      slug: "oracleacademy",
      banner: "/education/banners/oracle-academy.jpg",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description:
            "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description:
            "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description:
            "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description:
            "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description:
            "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Senati",
      href: "https://ibo.org",
      degree: "Software Engineering with Artificial Intelligence",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkkUzrgcUkVMHMt3isZ0Cn8i2sCLkpwIZyg&s",
      start: "2022",
      end: "2025",
      description:
        "Technical education focused on software development lifecycles and AI implementation.",
      slug: "senati",
      banner: "/education/banners/senati.jpg",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description:
            "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description:
            "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description:
            "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description:
            "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description:
            "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Arxatec",
      href: "https://arxatec.net",
      dates: "2024 - Present",
      active: true,
      description:
        "LegalTech platform that automates legal management and document drafting with AI. Digitizes traditional files to convert them into a fast, organized and efficient workflow.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "OpenAI API",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://arxatec.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/arxatec.mov",
      slug: "arxatec",
      gallery: [
        "/projects/arxatec/dashboard.png",
        "/projects/arxatec/documents.png",
        "/projects/arxatec/mobile.png",
      ],
    },
    {
      title: "Sistema POS",
      href: "https://github.com/Alexod24/inventory-next",
      dates: "October 2025 - December 2025",
      active: true,
      description:
        "Comprehensive sales and inventory solution designed to eliminate operational disorganization. Optimizes stock control in real-time and streamlines point-of-sale transactions, allowing businesses to scale with automated management.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Alexod24/inventory-next",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/inventory.png",
    },

    {
      title: "AERIS",
      href: "https://github.com/AERIS-UCCI/aeris",
      dates: "October 2025",
      active: true,
      description:
        "Environmental intelligence system that uses NASA data to predict pollution and recommend healthy routes based on the user's respiratory profile.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Python",
        "FastAPI",
        "Tailwind CSS",
        "OpenStreetMap",
        "NASA Data APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AERIS-UCCI/aeris",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/5BJnOX0Mbtc",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/aeris.mov",
      slug: "aeris",
      gallery: [],
    },
    {
      title: "FocusFlow",
      href: "https://github.com/Alexod24/pomodoro-app",
      dates: "October 2025",
      active: true,
      description:
        "Comprehensive productivity station that fuses the Pomodoro technique with a dynamic task management system and an immersive concentration atmosphere.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Alexod24/pomodoro-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/catfocus.png",
      video: "",
      slug: "focus-flow",
      gallery: [],
    },
    // {
    //   title: "OpenTravels",
    //   href: "https://github.com/Alexod24/opentravels",
    //   dates: "November 2024",
    //   active: true,
    //   description:
    //     "This platform includes login and registration functions that allow users to publish places they have recently visited. In this way, all community members can share experiences and recommendations.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Prisma",
    //     "PostgreSQL",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/Alexod24/opentravels",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/projects/opentravels.png",
    //   video: "",
    //   slug: "opentravels",
    //   gallery: [],
    // },
  ],
  hackathons: [
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
};

export const DATA_ES = {
  ...DATA_EN,
  sectionHeaders: {
    work: "Experiencia Laboral",
    education: "Educación",
    skills: "Habilidades",
    projects: {
      tag: "Mis Proyectos",
      title: "Echa un vistazo a mis últimos trabajos",
      description:
        "He trabajado en diversos proyectos, desde sitios web sencillos hasta aplicaciones web complejas. Aquí tienes algunos de mis favoritos.",
    },
    about: {
      tag: "Sobre Mí",
      title: "Conoce más sobre mí",
      description:
        "Un vistazo a mi trayectoria, pasiones y lo que me impulsa cada día.",
    },
    contact: {
      title: "Contáctame",
      description: "Envíame un mensaje",
      whatsapp: "Chatea en WhatsApp",
    },
    hackathons: {
      tag: "Hackathons",
      title: "Hackathon",
      description: "Me gusta construir cosas los fines de semana.",
    },
  },
  skillsCategories: [
    {
      title: "Lenguajes",
      skills: [
        { name: "JavaScript", icon: Icons.javascript },
        { name: "TypeScript", icon: Icons.typescript },
        { name: "Python", icon: Icons.python },
        { name: "Java", icon: Icons.java },
        { name: "C++", icon: Icons.cpp },
        { name: "Go", icon: Icons.go },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: Icons.react },
        { name: "Next.js", icon: Icons.nextjs },
        { name: "TailwindCSS", icon: Icons.tailwindcss },
        { name: "Astro", icon: Icons.astro },
        { name: "Framer Motion", icon: Icons.framermotion },
      ],
    },
    {
      title: "Backend y Base de Datos",
      skills: [
        { name: "Node.js", icon: Icons.nodejs },
        { name: "PostgreSQL", icon: Icons.postgresql },
        { name: "MySQL", icon: Icons.mysql },
        { name: "Supabase", icon: Icons.supabase },
      ],
    },
    {
      title: "Herramientas y DevOps",
      skills: [
        { name: "Git", icon: Icons.github },
        { name: "Docker", icon: Icons.docker },
        { name: "Kubernetes", icon: Icons.kubernetes },
        { name: "Figma", icon: Icons.figma },
        { name: "Notion", icon: Icons.notion },
        { name: "OpenAI", icon: Icons.openai },
      ],
    },
    {
      title: "Comunidades",
      skills: [
        { name: "GDG", icon: Icons.gdg },
        { name: "Platzi", icon: Icons.platzi },
      ],
    },
  ],
  description: "Hola, soy Alex. 👋",
  summary:
    "Soy un desarrollador enfocado en crear productos que resuelvan problemas reales. Me especializo en arquitecturas web modernas y escalables, siempre buscando el equilibrio entre un código limpio y una gran experiencia de usuario.",
  about: "Hola, soy Alex.",
  navbar: [
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/skills", icon: Wrench, label: "Habilidades" },
    { href: "/cv/cv.pdf", icon: FileTextIcon, label: "CV", target: "_blank" },
  ],

  // \n\nAdemás de programar, disfruto aprender sobre desarrollo personal, hábitos, disciplina y mentalidad. Creo firmemente que el crecimiento profesional empieza por el crecimiento interior.\n\nHe trabajado en proyectos de gestión de inventarios, automatización de procesos y plataformas web para coworkings, además de experimentar con nuevas herramientas."

  work: [
    {
      company: "Arxatec",
      href: "https://arxatec.com",
      // badges: ["Next.js", "TypeScript", "OpenAI", "Shadcn UI", "PostgreSQL"],
      location: "Remoto",
      title: "Desarrollador Full Stack",
      logoUrl: "/logos/arxatec.jpg",
      start: "2025",
      end: "Presente",
      className: "md:col-span-2",
      backgroundUrl: "/projects/arxatec/dashboard.png",
      companyProfile:
        "Una empresa LegalTech líder dedicada a la transformación digital del sector jurídico. Arxatec combina tecnología de vanguardia con experiencia legal para automatizar procesos y mejorar la eficiencia de las firmas de abogados.",
      services: [
        "Automatización Legal",
        "Gestión de Expedientes",
        "Consultoría Digital",
      ],
      gallery: [
        "/projects/arxatec/dashboard.png",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop", // Placeholder office
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop", // Placeholder team
      ],
      description:
        "Liderando la transformación digital del sector legal mediante la construcción de una plataforma LegalTech integral.\n\n• Arquitectura y desarrollo de un frontend escalable usando Next.js 14 y TypeScript, mejorando la velocidad de carga en un 40%.\n• Integración de la API de OpenAI para automatizar la redacción de documentos legales, reduciendo el tiempo de redacción de los abogados en aproximadamente un 60%.\n• Implementación de funciones de colaboración en tiempo real usando WebSockets y gestión de estado eficiente.\n• Diseño de una biblioteca de componentes con Shadcn UI para asegurar la consistencia de la UI en toda la plataforma.",
    },
    {
      company: "La Base Cowork",
      // badges: ["React", "PHP", "MySQL", "SEO", "Payment Integrations"],
      href: "https://labasecowork.com",
      location: "Presencial",
      title: "Desarrollador Web",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmltCbeB-oyIL7sEe6veiY6klrX5z-ln46jQ&s",
      start: "2024",
      end: "2025",
      className: "md:col-span-1",
      backgroundUrl: "/projects/inventory.png",
      companyProfile:
        "El primer coworking temático inspirado en el mundo militar. Un espacio diseñado para potenciar ideas, fomentar la disciplina y crear una comunidad sólida de emprendedores. Ofrece un ambiente donde la estrategia y la creatividad se unen.",
      services: [
        "Oficinas Privadas",
        "Escritorios Flexibles",
        "Salas de Reuniones",
        "Networking",
        "Internet Alta Velocidad",
      ],
      gallery: [
        "/projects/inventory.png",
        "https://labase.pe/assets/img/espacios/oficina-privada.jpg", // Tries to guess/use generic if fail
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop",
      ],
      description:
        "Digitalización de las operaciones de un concurrido espacio de coworking a través de soluciones web personalizadas.\n\n• Desarrollo de un sistema personalizado de reservas y gestión de membresías, agilizando el proceso de reserva para más de 50 miembros activos.\n• Optimización del sitio web corporativo principal para SEO y rendimiento, resultando en un aumento del 25% en el tráfico orgánico.\n• Integración de pasarelas de pago locales para facilitar la facturación automatizada.\n• Colaboración directa con los interesados para recopilar requisitos e iterar sobre los comentarios de los usuarios.",
    },
    {
      company: "TID",
      href: "https://tid.com.pe",
      // badges: ["React", "CodeIgniter", "Electronic Invoicing", "SQL"],
      location: "Presencial",
      title: "Desarrollador de Sistemas",
      logoUrl: "https://tid.com.pe/assets/img/logos/logo_tid_SF.png",
      start: "2023",
      end: "2024",
      className: "md:col-span-1",
      backgroundUrl: "",
      companyProfile:
        "Especialistas en soluciones tecnológicas integrales para la gestión empresarial. TID desarrolla sistemas ERP robustos enfocados en la eficiencia operativa, facturación electrónica y cumplimiento normativo para diversos sectores.",
      services: [
        "Desarrollo de Software",
        "Facturación Electrónica",
        "Consultoría TI",
        "Sistemas ERP",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
      ],
      description:
        "Contribución al desarrollo de soluciones ERP robustas para los sectores educativo y gastronómico.\n\n• Desarrollo y mantenimiento de módulos para facturación electrónica, asegurando el cumplimiento de las regulaciones fiscales locales (SUNAT).\n• Refactorización de bases de código heredadas para mejorar el mantenimiento y reducir la deuda técnica.\n• Implementación de paneles de informes usando React y bibliotecas de gráficos para visualizar métricas clave de negocio para los clientes.\n• Participación en ciclos de desarrollo ágil (Scrum), asistiendo a stand-ups diarios y revisiones de sprint.",
    },
  ],
  education: [
    {
      school: "Universidad Continental",
      href: "https://buildspace.so",
      degree: "Ingenieria de Sistemas e Informatica",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkD6xk77yPxtbVxfClUe-MV7XC48RE2EPIrw&s",
      start: "2025",
      end: "2028",
      description:
        "Grado de Bachiller en Ingeniería de Sistemas. Enfocado en arquitectura de software, algoritmos y diseño de sistemas.",
      slug: "continental",
      banner: "/education/banners/continental.webp",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/AlexCode/",
      degree:
        "Programación, desarrollo web, marketing, Inglés y habilidades digitales",
      logoUrl: "/platzi.png",
      start: "2024",
      end: "2025",
      description:
        "Ruta de aprendizaje integral que cubre desarrollo web, marketing digital e inglés para profesionales de la tecnología.",
      slug: "platzi",
      banner: "/education/platzi.png",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },

    {
      school: "DevTalles",
      href: "https://ibo.org",
      degree:
        "Cursos de React, MERN, Qwik, TanStack Query, Shadcn/UI y VS Code",
      logoUrl: "/devtalles.png",
      start: "2024",
      end: "2025",
      description:
        "Capacitación especializada en tecnologías modernas de desarrollo web, incluyendo React, Next.js y gestión de estado avanzada.",
      slug: "devtalles",
      banner: "/education/banners/devtalles.png",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "ED Team",
      href: "https://wlu.ca",
      degree:
        "Cursos de POO, TDD, APIs, terminal y fundamentos del desarrollo web",
      logoUrl: "/edteam.png",
      start: "2024",
      end: "2024",
      description:
        "Enfocado en fundamentos de backend, programación orientada a objetos y desarrollo guiado por pruebas.",
      slug: "edteam",
      banner: "/education/banners/edteam.jpg",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Codigo Facilito",
      href: "https://ibo.org",
      degree:
        "Bootcamps en desarrollo, IA, DevOps, liderazgo y diseño de interfaces",
      logoUrl: "/codigofacilito.jpg",
      start: "2024",
      end: "2024",
      description:
        "Bootcamps intensivos que cubren integración de IA, prácticas de DevOps y principios de diseño UI/UX.",
      slug: "codigofacilito",
      banner: "/education/banners/codigo-facilito.png",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
    {
      school: "Oracle Academy",
      href: "https://ibo.org",
      degree: "Certificaciones en IA, SQL y Java",
      logoUrl: "https://dig-ed.org/wp-content/uploads/2024/09/oracl.png",
      start: "2023",
      end: "2024",
      description:
        "Capacitación certificada en Diseño de Bases de Datos, programación SQL y fundamentos de Inteligencia Artificial.",
      slug: "oracleacademy",
      banner: "/education/banners/oracle-academy.jpg",
      courses: [
        {
          title: "Artificial Intelligence with Machine Learning",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image:
            "/education/oracle/Artificial Intelligence with Machine Learning.jpg",
          content: "",
        },
        {
          title: "Database Design",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/oracle/Database Design.jpg",
          content: "",
        },
        {
          title: "Database Programming",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/oracle/Database Programming.jpg",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Java Foundations",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/oracle/Java Foundations.jpg",
          content: "",
        },
      ],
    },
    {
      school: "Senati",
      href: "https://ibo.org",
      degree: "Ingenieria de Software con Inteligencia Artificial",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkkUzrgcUkVMHMt3isZ0Cn8i2sCLkpwIZyg&s",
      start: "2022",
      end: "2025",
      slug: "senati",
      banner: "/education/banners/senati.jpg",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description:
            "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description:
            "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description:
            "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description:
            "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description:
            "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description:
            "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Arxatec",
      href: "https://arxatec.net",
      dates: "2024 - Presente",
      active: true,
      description:
        "Plataforma LegalTech que automatiza la gestión jurídica y la redacción de documentos con IA. Digitaliza expedientes tradicionales para convertirlos en un flujo de trabajo rápido, organizado y eficiente.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "OpenAI API",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://arxatec.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/arxatec.mov",
      slug: "arxatec",
      gallery: [
        "/projects/arxatec/dashboard.png",
        "/projects/arxatec/documents.png",
        "/projects/arxatec/mobile.png",
      ],
    },
    {
      title: "Sistema POS",
      href: "https://github.com/Alexod24/inventory-next",
      dates: "Octubre 2025 - Diciembre 2025",
      active: true,
      description:
        "Solución integral de ventas e inventario diseñada para eliminar la desorganización operativa. Optimiza el control de stock en tiempo real y agiliza las transacciones en el punto de venta, permitiendo a los negocios escalar con una gestión automatizada.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Alexod24/inventory-next",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/inventory.png",
    },

    {
      title: "AERIS",
      href: "https://github.com/AERIS-UCCI/aeris",
      dates: "Octubre 2025",
      active: true,
      description:
        "Sistema de inteligencia ambiental que utiliza datos de la NASA para predecir la contaminación y recomendar rutas saludables basadas en el perfil respiratorio del usuario.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Python",
        "FastAPI",
        "Tailwind CSS",
        "OpenStreetMap",
        "NASA Data APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AERIS-UCCI/aeris",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/5BJnOX0Mbtc",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/aeris.mov",
      slug: "aeris",
      gallery: [],
    },
    {
      title: "FocusFlow",
      href: "https://github.com/Alexod24/pomodoro-app",
      dates: "October 2025",
      active: true,
      description:
        "Estación de productividad integral que fusiona la técnica Pomodoro con un sistema dinámico de gestión de tareas y una atmósfera de concentración inmersiva.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "Zustand", // Asumiendo manejo de estado para el timer
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Alexod24/pomodoro-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/catfocus.png",
      video: "",
      slug: "focus-flow",
      gallery: [],
    },
    {
      title: "OpenTravels",
      href: "https://github.com/Alexod24/opentravels",
      dates: "Noviembre 2024",
      active: true,
      description:
        "Esta plataforma incluye funciones de inicio de sesión y registro que permiten a los usuarios publicar los lugares que han visitado recientemente. De esta manera, todos los miembros de la comunidad pueden compartir experiencias y recomendaciones.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Alexod24/opentravels",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/opentravels.png",
      video: "",
      slug: "opentravels",
      gallery: [],
    },
  ],
};
