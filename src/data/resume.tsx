import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";

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
  },
  name: "Alex",
  initials: "DV",
  url: "https://portfolio-bice-two-99.vercel.app/",
  location: "Perú",
  locationLink: "https://maps.app.goo.gl/me5L15w4JQRSvUjZ6",
  description: "Full Stack Developer",
  summary: "I'm Alex, specializing in designing scalable architectures and building high-performance digital products. A comprehensive approach focused on technical efficiency and excellence in software development.",
  about: "Hello, I'm Alex. Developer by vocation and curious by choice.\n\nI study Software Engineering, and since my early years in the program, I fell in love with web development. I enjoy building functional projects, learning new technologies, and exploring how programming can improve productivity and daily life.\n\nBeyond coding, I enjoy learning about personal development, habits, discipline, and mindset. I firmly believe that professional growth begins with inner growth.\n\nI have worked on inventory management projects, process automation, and web platforms for co-working spaces, in addition to experimenting with new tools.",
  avatarUrl: "/alex.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Alex.od2408",
        icon: Icons.youtube,
        navbar: true,
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
      href: "https://arxatec.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/logos/arxatec.jpg",
      start: "2025",
      end: "Present",
      description: "Integral digital transformation platform for the legal sector. The software centralizes legal service management, automates administrative workflows, and optimizes interaction between legal professionals and their clients through a scalable and secure architecture.",
    },
    {
      company: "La Base Cowork",
      badges: [],
      href: "https://labasecowork.com",
      location: "On-site",
      title: "Web Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmltCbeB-oyIL7sEe6veiY6klrX5z-ln46jQ&s",
      start: "2024",
      end: "2025",
      description: "Development of corporate websites and custom management systems. Optimization of digital interfaces and processes for various clients in an agile environment.",
    },
    {
      company: "TID",
      href: "https://tid.com.pe",
      badges: [],
      location: "On-site",
      title: "Systems Developer",
      logoUrl: "https://tid.com.pe/assets/img/logos/logo_tid_SF.png",
      start: "2023",
      end: "2024",
      description: "Design and implementation of integral management systems (ERP) for educational institutions and the gastronomic sector, including robust electronic invoicing solutions.",
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
      slug: "continental",
      banner: "/education/continental.png",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description: "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description: "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description: "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description: "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description: "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description: "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        }
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
      slug: "platzi",
      banner: "/education/platzi.png",
      courses: [
        {
          title: "Basic Programming Course",
          date: "2023",
          description: "Fundamentals of programming logic, algorithms and basic data structures.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Definitive HTML and CSS Course",
          date: "2023",
          description: "Professional web layout, semantic HTML, SEO and responsive design.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Basic JavaScript Course",
          date: "2023",
          description: "Language fundamentals, variables, functions, arrays and DOM manipulation.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description: "Technical vocabulary and communication skills in English for development environments.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "SQL and MySQL Course",
          date: "2024",
          description: "Relational database management, complex queries and schema design.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Python Fundamentals Course with Pandas and NumPy",
          date: "2024",
          description: "Data analysis, array manipulation and data structures for data science.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        }
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
    },
    {
      school: "ED Team",
      href: "https://wlu.ca",
      degree:
        "Courses in OOP, TDD, APIs, terminal and web development fundamentals",
      logoUrl: "/edteam.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Codigo Facilito",
      href: "https://ibo.org",
      degree:
        "Bootcamps in development, AI, DevOps, leadership and interface design",
      logoUrl: "/codigofacilito.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Oracle Academy",
      href: "https://ibo.org",
      degree: "Certificaciones in AI, SQL and Java",
      logoUrl: "https://dig-ed.org/wp-content/uploads/2024/09/oracl.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Senati",
      href: "https://ibo.org",
      degree: "Software Engineering with Artificial Intelligence",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkkUzrgcUkVMHMt3isZ0Cn8i2sCLkpwIZyg&s",
      start: "2022",
      end: "2025",
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
      video:
        "",
    },
    {
      title: "OpenTravels",
      href: "https://github.com/Alexod24/opentravels",
      dates: "November 2024",
      active: true,
      description:
        "This platform includes login and registration functions that allow users to publish places they have recently visited. In this way, all community members can share experiences and recommendations.",
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
    },
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
  },
  description:
    "Desarrollador Full Stack",
  summary:
    "Soy Alex, estoy especializado en el diseño de arquitecturas escalables y la construcción de productos digitales de alto rendimiento. Enfoque integral centrado en la eficiencia técnica y la excelencia en el desarrollo de software.",
  about: "Hola, soy Alex. Desarrollador por vocación y curioso por elección.\n\nEstudio Ingeniería de Software y desde mis primeros años en la carrera me enamoré del desarrollo web. Me gusta construir proyectos funcionales, aprender nuevas tecnologías y explorar cómo la programación puede mejorar la productividad y la vida diaria.\n\nAdemás de programar, disfruto aprender sobre desarrollo personal, hábitos, disciplina y mentalidad. Creo firmemente que el crecimiento profesional empieza por el crecimiento interior.\n\nHe trabajado en proyectos de gestión de inventarios, automatización de procesos y plataformas web para coworkings, además de experimentar con nuevas herramientas.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/cv/cv.pdf", icon: FileTextIcon, label: "CV", target: "_blank" },
  ],

  work: [
    {
      company: "Arxatec",
      href: "https://arxatec.com",
      badges: [],
      location: "Remoto",
      title: "Desarrollador Full Stack",
      logoUrl: "/logos/arxatec.jpg",
      start: "2025",
      end: "Presente",
      description: "Plataforma integral de transformación digital para el sector legal. El software centraliza la gestión de servicios jurídicos, automatiza flujos de trabajo administrativos y optimiza la interacción entre profesionales del derecho y sus clientes mediante una arquitectura escalable y segura.",
    },
    {
      company: "La Base Cowork",
      badges: [],
      href: "https://labasecowork.com",
      location: "Presencial",
      title: "Desarrollador Web",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmltCbeB-oyIL7sEe6veiY6klrX5z-ln46jQ&s",
      start: "2024",
      end: "2025",
      description: "Desarrollo de sitios web corporativos y sistemas de gestión a medida. Optimización de interfaces y procesos digitales para diversos clientes en un entorno ágil.",
    },
    {
      company: "TID",
      href: "https://tid.com.pe",
      badges: [],
      location: "Presencial",
      title: "Desarrollador de Sistemas",
      logoUrl: "https://tid.com.pe/assets/img/logos/logo_tid_SF.png",
      start: "2023",
      end: "2024",
      description: "Diseño e implementación de sistemas integrales de gestión (ERP) para instituciones educativas y sector gastronómico, incluyendo soluciones robustas de facturación electrónica.",
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
      slug: "continental",
      banner: "/education/continental.png",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description: "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description: "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description: "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description: "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description: "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description: "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        }
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
      slug: "platzi",
      banner: "/education/platzi.png",
      courses: [
        {
          title: "Curso de Programación Básica",
          date: "2023",
          description: "Fundamentos de lógica de programación, algoritmos y estructuras de datos básicos.",
          image: "/education/platzi/programacion-basica.png",
          content: "",
        },
        {
          title: "Curso Definitivo de HTML y CSS",
          date: "2023",
          description: "Maquetación web profesional, semántica, SEO y diseño responsivo.",
          image: "/education/platzi/html-css.png",
          content: "",
        },
        {
          title: "Curso Básico de JavaScript",
          date: "2023",
          description: "Fundamentos del lenguaje, variables, funciones, arrays y manipulación del DOM.",
          image: "/education/platzi/js.png",
          content: "",
        },
        {
          title: "English for Developers: Basic",
          date: "2023",
          description: "Vocabulario técnico y habilidades de comunicación en inglés para entornos de desarrollo.",
          image: "/education/platzi/basic-english.png",
          content: "",
        },
        {
          title: "Curso de SQL y MySQL",
          date: "2024",
          description: "Gestión de bases de datos relacionales, consultas complejas y diseño de esquemas.",
          image: "/education/platzi/sql-mysql.png",
          content: "",
        },
        {
          title: "Curso de Fundamentos de Python con Pandas y NumPy",
          date: "2024",
          description: "Análisis de datos, manipulación de arrays y estructuras de datos para ciencia de datos.",
          image: "/education/platzi/pandas-numpy.png",
          content: "",
        }
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
    },
    {
      school: "ED Team",
      href: "https://wlu.ca",
      degree:
        "Cursos de POO, TDD, APIs, terminal y fundamentos del desarrollo web",
      logoUrl: "/edteam.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "Codigo Facilito",
      href: "https://ibo.org",
      degree:
        "Bootcamps en desarrollo, IA, DevOps, liderazgo y diseño de interfaces",
      logoUrl: "/codigofacilito.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Oracle Academy",
      href: "https://ibo.org",
      degree: "Certificaciones en IA, SQL y Java",
      logoUrl: "https://dig-ed.org/wp-content/uploads/2024/09/oracl.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Senati",
      href: "https://ibo.org",
      degree: "Ingenieria de Software con Inteligencia Artificial",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkkUzrgcUkVMHMt3isZ0Cn8i2sCLkpwIZyg&s",
      start: "2022",
      end: "2025",
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
      video: "/projects/aeris.mov", // O la ruta donde alojes el clip de 40s
    },
    {
      title: "FocusFlow",
      href: "https://github.com/Alexod24/pomodoro-app",
      dates: "Octubre 2025",
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
      video:
        "",
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
    },
  ],
};
