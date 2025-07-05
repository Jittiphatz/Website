import { Link } from "@heroui/link";
import { Facebook, Instagram, Github } from "lucide-react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
// import { MyAlert } from "@/components/alert";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      {/*<MyAlert />*/}
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full bg-[#130f0f] text-gray-300 py-10 px-6 md:px-20 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Ferrum Group Section */}

          <div className="flex items-center gap-2 mb-2">
            <img
              alt="logo"
              className="w-10 h-10 rounded-full"
              src="/img/img.png"
            />
            <Link href="/">
              <h2 className="font-semibold text-slate-400 text-base">
                Jittiphat Somsai
              </h2>
            </Link>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-semibold text-xl dark:text-white text-slate-400 mb-2">
              My Link
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  isExternal
                  className="text-emerald-500"
                  href="https://portfolio.jittiphat.site"
                >
                  Portfolio Website
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  className="text-blue-500"
                  href="https://bio.jittiphat.site"
                >
                  Bio Website
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  className="text-red-400"
                  href="https://status.jittiphat.site"
                >
                  Status Website
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-semibold text-xl dark:text-white text-slate-400 mb-2">
              Social
            </h3>
            <ul className="space-y-1 ">
              <li>
                <Link
                  isExternal
                  className="text-white"
                  href="https://instagram.com/mannez_xyz"
                >
                  <Instagram className="w-4 h-4 mr-2 text-[#FF0069]" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  className="text-white"
                  href="https://www.facebook.com/Jittiphatz4966"
                >
                  <Facebook className="w-4 h-4 mr-2 text-blue-500" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  isExternal
                  className="text-white"
                  href="https://github.com/Jittiphatz"
                >
                  <Github className="w-4 h-4 mr-2 text-slate-500" />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          {/* Navbar Link */}
          <div>
            <h3 className="font-semibold text-xl dark:text-white text-slate-400 mb-2">
              Pages
            </h3>
            <ul className="space-y-1 ">
              <li>
                <Link className="text-white hover:text-emerald-400" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-emerald-400"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-emerald-400"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-emerald-400"
                  href="/certificate"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-emerald-400"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-emerald-400"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-md text-gray-500">
          © 2025 Jittiphat Somsai. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
