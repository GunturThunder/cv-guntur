import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Guntur Angkasa Putra",
  initials: "GAP",
  location: "East Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/RXVfWyB3J9owV8Aw8",
  about:
    "Mobile Developer",
  summary:
    "As a Mobile developer, I have successfully finished several project from 0 to 1. In some project i took on the role of a junior leader, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React Native, Kotlin, and Swift. I have over 3 years of experience in working as mobile developer",
  avatarUrl: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fme.png?alt=media&token=db1f1a77-2033-487f-913d-2ff6e1263ff9",
  personalWebsiteUrl: "",
  contact: {
    email: "gangkasa888@gmail.com",
    tel: "+6281298247404",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/GunturThunder",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guntur-angkasa-putra/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of indraprasta PGRI",
      degree: "Bachelor's Degree in Computer Science",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "PT. Trilogi Persada",
      link: "https://www.trilogipersada.com/",
      badges: [],
      title: "IT Developer - Mobile Dev",
      logo: ParabolLogo,
      start: "2021",
      end: "Now",
      description:
        "Created an internal application and application for clients. Technologies: Android, IOS, React Native, Swift, TypeScript, Javascript, Java",
    },
    {
      company: "Telkomsigma",
      link: "https://www.telkomsigma.co.id/",
      badges: [],
      title: "Junior IT Consultant - Mobile Dev",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
        "Created Android mobile apps and Ios apps. Technologies: Android, IOS, React Native, Swift, TypeScript",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "Swift",
    "Git",
    "Kotlin",
    "Jira",
    "Figma",
    "Html",
    "Css",
  ],
  projects: [
    {
      title: "Mobile Present",
      techStack: [
        "Main Project",
        "TypeScript",
        "React Native",
      ],
      description: "App for facilitates employee attendance tracking",
      logo: ConsultlyLogo,
      link: {
        label: "mptp",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2FAbsensi.pdf?alt=media&token=88ddf769-21b9-40b3-9d2c-481fca6124a4",
      },
    },
    {
      title: "Smesta Pos",
      techStack: [
        "Main Project",
        "TypeScript",
        "React Native",
        "Bluetooth Printer",
      ],
      description:
        "Streamlines transactions, manages inventory, and integrates seamlessly with Bluetooth scanners and printers",
      logo: MonitoLogo,
      link: {
        label: "smesta",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fsmesta.pdf?alt=media&token=80ebcc57-96b4-4186-bb71-52152ae95952",
      },
    },
    {
      title: "Monitoring Maintenance System",
      techStack: [
        "Main Project",
        "Javascript",
        "React Native",
      ],
      description:
        "Manage open tickets and conduct investigations, this app streamlines the process for efficiently resolving issues",
      logo: JarockiMeLogo,
      link: {
        label: "mms",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fmms.pdf?alt=media&token=4a68bdc9-8a35-45f8-9e76-a382facd6f18",
      },
    },
    {
      title: "Tiketku",
      techStack: ["Side Project", "Javascript", "React Native",],
      description:
        "Seamless hotel bookings with this exceptional app",
      logo: Minimal,
      link: {
        label: "tiketku",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Ftiketku.pdf?alt=media&token=fc7c079f-1f15-486f-a04b-661d81c8b253",
      },
    },
    {
      title: "E-Kabinet",
      techStack: [
        "Main Project",
        "TypeScript",
        "React Native",
      ],
      description:
        "App for the cabinets of the President, Vice President, and Minister to see meeting invitation, see meeting mmaterial, etc",
      logo: BarepapersLogo,
      link: {
        label: "ekabinet",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fe-kabinet.pdf?alt=media&token=b80a6e95-bf15-42a8-b607-b3563f83eb43",
      },
    },
    {
      title: "Kitalomba",
      techStack: ["Side Project", "TypeScript",  "React Native"],
      description: "App streamlines the judging process by enabling judges to assess participants exclusively through the app",
      logo: YearProgressLogo,
      link: {
        label: "kitalomba",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fkitalomba.pdf?alt=media&token=0e4ab90c-5637-4050-bde0-587e214149b7",
      },
    },
    {
      title: "Education App",
      techStack: [
        "Main Project",
        "TypeScript",
        "React Native",
      ],
      description:
        "Comprehensive learning materials and optional assignments to enrich their educational journeys",
      logo: ParabolLogo,
      link: {
        label: "Education",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fpembelajaran.pdf?alt=media&token=58e5e588-24f6-44df-9c01-fb44ff64e75a",
      },
    },
    {
      title: "See All",
      techStack: [
        "",
      ],
      description:
        "See all project in pdf",
      logo: ParabolLogo,
      link: {
        label: "All project",
        href: "https://firebasestorage.googleapis.com/v0/b/bampor-a3faa.appspot.com/o/random%20file%2Fall%20project.pdf?alt=media&token=8ffc92d2-4dc2-41b3-afcc-fdb067d7c3a0",
      },
    },
  ],
} as const;
