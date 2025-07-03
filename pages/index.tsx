import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import motion from "framer-motion";
import { User } from "lucide-react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import LenisComponent from "@/components/LenisComponent";


const texts = [
  "Hello!",
  "Welcome",
  "To",
  "My",
  "Website",
  ":)",
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <LenisComponent />
      <section className="flex flex-col items-center justify-center gap-4 py-5 md:py-5">
        <div className="inline-block max-w-xl text-center justify-center">
          <MorphingText className="md:text-sm mb-5" texts={texts} />
          <SparklesText>
          <span className={title()}>Jittiphat&nbsp;</span>
          <span className={title({ color: "green" })}>Somsai&nbsp;</span>
          <br />
          </SparklesText>
          <span className={subtitle()}>
            <HyperText className="text-default-500 text-md">
            Frontend Developer and Drummer
            </HyperText>
            
          </span>
          
        </div>
      
        <div className="flex gap-3 mb-5">
          <Link
            className={buttonStyles({
              color: "success",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })}
            href="/projects"
          >
            My Project
          </Link>
          <Link
            className={buttonStyles({ variant: "flat", radius: "full", size: "lg" })}
            href={"/about"}
          >
            <User />
            About Me
            
          </Link>
          
        </div>
      </section>
      
    </DefaultLayout>
  );
}
