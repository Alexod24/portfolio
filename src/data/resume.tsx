import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA_EN = {
  name: "Alex",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer. Entrepreneur. Passionate about turning ideas into reality.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
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
  ],
  contact: {
    email: "hello@example.com",
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
      X: {
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
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ArxaTEC",
      badges: [],
      href: "https://labase.pe",
      location: "Huancayo, Perú",
      title: "Full Stack Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmltCbeB-oyIL7sEe6veiY6klrX5z-ln46jQ&s",
      start: "Mar 2024",
      end: "Jul 2025",
      description:
        "Colaboré en el desarrollo Full Stack de plataformas web y herramientas de gestión interna utilizando tecnologías como Next.js, TypeScript y Supabase. Participé en la implementación de soluciones digitales para optimizar procesos del coworking y apoyé en la construcción de MVPs para diversas startups incubadas en el ecosistema.",
    },
    {
      company: "La Base Cowork",
      badges: [],
      href: "https://labase.pe",
      location: "Huancayo, Perú",
      title: "Full Stack Developer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmltCbeB-oyIL7sEe6veiY6klrX5z-ln46jQ&s",
      start: "Mar 2024",
      end: "Jul 2025",
      description:
        "Colaboré en el desarrollo Full Stack de plataformas web y herramientas de gestión interna utilizando tecnologías como Next.js, TypeScript y Supabase. Participé en la implementación de soluciones digitales para optimizar procesos del coworking y apoyé en la construcción de MVPs para diversas startups incubadas en el ecosistema.",
    },
    {
      company: "TID",
      href: "https://atomic.finance",
      badges: [],
      location: "Hibrido",
      title: "Software Engineer",
      logoUrl: "https://tid.com.pe/assets/img/logos/logo_tid_SF.png",
      start: "Dic 2023",
      end: "Abr 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
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
  description:
    "Desarrollador Full Stack",
  summary:
    "Soy Alex, estoy especializado en el diseño de arquitecturas escalables y la construcción de productos digitales de alto rendimiento. Enfoque integral centrado en la eficiencia técnica y la excelencia en el desarrollo de software.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  education: DATA_EN.education.map((edu) => ({
    ...edu,
    degree: edu.degree,
  })),
  work: [
    {
      company: "Arxatec",
      href: "https://arxatec.com",
      badges: [],
      location: "Remoto",
      title: "Desarrollador Full Stack",
      logoUrl: "/logos/arxatec.png",
      start: "2025",
      end: "Presente",
      description: "Lideré el desarrollo y lanzamiento de la plataforma legal digital de la compañía, implementando arquitecturas modernas y escalables para la gestión de servicios jurídicos.",
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
} as const;
