import { motion } from "framer-motion";
import LenisComponent  from "@/components/LenisComponent";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
const languages = [
  { name: "C++", icon: "cpp", url: "https://www.w3schools.com/cs/" },
  { name: "HTML", icon: "html", url: "https://www.w3.org/html/" },
  { name: "CSS", icon: "css", url: "https://www.w3schools.com/css/" },
  {
    name: "JavaScript",
    icon: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
  },
];
const framework = [
  { name: "Next.js", icon: "nextjs", url: "https://nextjs.org/" },
  { name: "Vue.js", icon: "vuejs", url: "https://vuejs.org/" },
  { name: "Nuxt.js", icon: "nuxtjs", url: "https://nuxtjs.org/" },
  { name: "TailwindCSS", icon: "tailwind", url: "https://tailwindcss.com/" },
];

const software = [
  {
    name: "Visual Studio Code",
    icon: "vscode",
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Adobe Photoshop",
    icon: "ps",
    url: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Adobe Premiere Pro",
    icon: "pr",
    url: "https://www.adobe.com/products/premiere.html",
  },
  { name: "Git", icon: "git", url: "https://git-scm.com/" },
  { name: "GitHub", icon: "github", url: "https://github.com/" },
];

const OS = [
  { name: "Windows", icon: "windows", url: "https://www.linux.org/" },
  { name: "MacOS", icon: "apple", url: "https://www.linux.org/" },
  { name: "Linux", icon: "linux", url: "https://www.linux.org/" },
  { name: "Ubuntu", icon: "ubuntu", url: "https://www.kali.org/" },
];

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: typeof framework | typeof languages | typeof software | typeof OS;
}) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill) => (
        <a
          key={skill.name}
          className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/10 dark:hover:bg-slate-800 transition duration-300"
          href={skill.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt={skill.name}
            className="w-10 h-10"
            src={`https://skillicons.dev/icons?i=${skill.icon}`}
          />
          <span className="text-sm dark:text-white text-center">
            {skill.name}
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default function DocsPage() {
  return (
    <DefaultLayout>
      <LenisComponent />
      <div className="text-center">
        <h1 className={title()}>Technical skills</h1>
      </div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <section className="flex flex-col items-center justify-center gap-8 py-12 px-4 min-h-screen bg-transparent">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-lg max-w-6xl w-full">
            <SkillSection skills={languages} title="Programming Languages" />
          </div>
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-lg max-w-6xl w-full">
            <SkillSection skills={framework} title="Frameworks" />
          </div>
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-lg max-w-6xl w-full">
            <SkillSection skills={software} title="Softwares" />
          </div>
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-lg max-w-6xl w-full">
            <SkillSection skills={OS} title="Operating Systems (OS)" />
          </div>
        </section>
      </motion.div>
    </DefaultLayout>
  );
}
