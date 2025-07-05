/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
import Image from "next/image";
import { Github, Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

import LenisComponent  from "@/components/LenisComponent";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

export default function ProjectsPage() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <DefaultLayout>
      <LenisComponent />
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative w-full flex flex-col items-center pt-8 pb-8">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative flex items-center justify-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
              <IconCloud images={images} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/img/img.png"
                  alt="Logo"
                  width={130}
                  height={130}
                  className="rounded-full object-cover aspect-square border-4 border-white dark:border-slate-800 shadow-lg transition duration-300 hover:border-black dark:hover:border-white"
                />
              </div>
            </div>
            <div className="relative z-20 max-w-lg text-center md:text-left">
              <h1 className={title()}>Jittiphat Somsai</h1>
              <p className="mt-4 text-lg text-default-500">
                Frontend Developer & Drummer
                <br />
                <br />
                สวัสดีครับ ผมชื่อ จิตติพัฒน์ ส้มสาย ชื่อเล่นของผมคือ แบทแมน อายุ
                16 ขณะนี้กําลังศึกษาอยู่ในระดับชั้นมัธยมศึกษาปีที่ 5
                โรงเรียนบุญวัฒนา เป็นคนที่ชื่นชอบในการสร้าง Web / Front End
                โดยใช้ Next.JS / Nuxt / Vue และเป็นมือกลอง Freelance ด้วยครับ
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a
                  href="https://github.com/Jittiphatz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-slate-600 dark:hover:text-white transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/Jittiphatz4966"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#1877f3] transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/mannez_xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-500 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="mailto:Jittiphat@Jittiphat.site"
                  aria-label="Email"
                  className="hover:text-red-500 transition"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </DefaultLayout>
  );
}
