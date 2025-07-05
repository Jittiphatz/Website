import { Mail, Facebook, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

import LenisComponent from "@/components/LenisComponent";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <LenisComponent />
      <div className="text-center">
        <h1 className={title()}>Contact Me</h1>
      </div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <section className="flex flex-col items-center justify-center">
          <div className="mt-8 grid gap-4 w-full max-w-md">
            <a
              className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow hover:bg-blue-100 transition"
              href="https://facebook.com/Jittiphatz4966"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook className="text-[#0866FF]" />
              <span className="text-lg text-[#0866FF] font-medium">
                Facebook
              </span>
            </a>

            <a
              className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-200 transition"
              href="https://github.com/Jittiphatz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="text-gray-800" />
              <span className="text-lg text-black font-medium">GitHub</span>
            </a>

            <a
              className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow hover:bg-pink-100 transition"
              href="https://instagram.com/mannez_xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram className="text-[#FF0069]" />
              <span className="text-lg text-[#FF0069] font-medium">
                Instagram
              </span>
            </a>
            <a
              className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow hover:bg-orange-100 transition"
              href="mailto:Jittiphat@jittiphat.site"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Mail className="text-[#EA4335]" />
              <span className="text-lg text-[#EA4335] font-medium">Email</span>
            </a>
          </div>
        </section>
      </motion.div>
    </DefaultLayout>
  );
}
