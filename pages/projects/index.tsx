import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import LenisComponent from "@/components/LenisComponent";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const projects = [
  {
    image: "/img/project/mori.png",
    title: "Mori Music",
    description:
      "เป็นบอทดิสคอร์ดเปิดเพลงที่เขียนด้วยภาษา TypeScript มีคำสั่งและมีฟีเจอร์ที่น่าสนใจมากมาย",
    link: "https://discord.com/oauth2/authorize?client_id=1009472327009964053&permissions=8&scope=applications.commands%20bot",
  },
  {
    image: "/img/project/docs-mori.png",
    title: "Documention for Mori Dev",
    description:
      "เป็นเว็บไซต์เอกสารสำหรับบอท Mori Music และ Kuro Music ใช้ Next.JS / Tailwind CSS",
    link: "https://docs.jittiphat.site/",
    github: "https://github.com/MoriDev-2023/Docs",
  },
  {
    image: "/img/project/massage-web.png",
    title: "Thai Massage Website",
    description:
      "เว็บไซต์ร้านนวดแผนไทยที่อยู่ในต่างประเทศ ใช้ Next.JS / Tailwind CSS / Lenis / Framer Motion / AOS / Lucide Icons",
    link: "https://thai-massage-have-a-nice-day.shop/",
  },
  {
    image: "/img/project/bio-web.png",
    title: "Bio Website",
    description:
      "เว็บไซต์ bio ที่รวมลิงค์ต่างๆของผม ใช้ Next.JS v15.3 / Magic Ui",
    link: "https://bio.jittiphat.site/",
    github: "https://github.com/Jittiphatz/bio.jittiphat.site",
  },
  {
    image: "/img/project/nextjs-starter.png",
    title: "Next.JS Starter Landing Page",
    description:
      "เว็บไซต์หน้า Landing เริ่มต้นสำหรับบริษัท รองรับ Responsive และมี SEO ใช้ Next.JS / Tailwind CSS / Lenis / Framer Motion / AOS",
    link: "https://nextjs-starter-landing-page.jittiphat.site/",
    github: "https://github.com/Jittiphatz/NextJS-Starter-Landing-Page",
  },
  {
    image: "/img/project/ice-index.png",
    title: "Happy Birthday Website",
    description:
      "เว็บไซต์อวยพรวันเกิดที่ทำให้แฟน ใช้ Next.JS / Tailwind CSS / MUI / Swiper",
    link: "https://iicxeryy-bday.jittiphat.site/",
    github: "https://github.com/Jittiphatz/Happy-Birthday-to-my-gf",
  },
];

export default function DocsPage() {
  return (
    <DefaultLayout>
      <LenisComponent />
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Project</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              animate={{ opacity: 1, scale: 1 }}
              className="flex"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
            >
              <Card className="flex flex-col h-full w-full max-w-sm mx-auto shadow-2xl">
                <CardHeader className="p-0">
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover"
                      src={project.image}
                    />
                  </div>
                </CardHeader>
                <CardBody className="flex-1 flex flex-col text-inherit">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-400">
                    {project.title}
                  </h5>
                  <p className="mb-3 font-normal">{project.description}</p>
                </CardBody>
                <CardFooter className="flex gap-4 mt-auto">
                  <Button
                    as="a"
                    className="w-50"
                    color="success"
                    href={project.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </Button>
                  {project.github && project.github !== "" && (
                    <Button
                      as="a"
                      className="w-50 rounded-full"
                      color="default"
                      href={project.github}
                      rel="noreferrer"
                      target="_blank"
                      variant="bordered"
                    >
                      <Github className="w-4 h-6" /> GitHub
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
