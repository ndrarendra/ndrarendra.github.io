import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from "./Icons";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { profile } from "@/data/site";

const links = [
  { href: "/", title: "Home" },
  { href: "/about/", title: "About" },
  { href: "/projects/", title: "Projects" },
  { href: "/contact/", title: "Contact" },
];

const normalise = (path) => (path || "/").split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const active = normalise(router.asPath) === normalise(href);
  return (
    <Link href={href} className={`${className} relative group`} aria-current={active ? "page" : undefined}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          active ? "w-full" : "w-0"
        }`}
      aria-hidden="true"
      />
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", onNavigate }) => {
  const router = useRouter();
  const active = normalise(router.asPath) === normalise(href);
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`${className} relative group text-light dark:text-dark my-2`}
      aria-current={active ? "page" : undefined}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          active ? "w-full" : "w-0"
        }`}
      aria-hidden="true"
      />
    </Link>
  );
};

const SocialLinks = ({ mode, toggle, inverted = false }) => {
  const iconWrap = "w-6 mx-3 sm:mx-1";
  return (
    <>
      <motion.a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`${iconWrap} ${inverted ? "bg-light rounded-full dark:bg-dark" : ""}`}
      >
        <GithubIcon className={inverted ? "text-dark dark:text-light" : ""} />
      </motion.a>
      <motion.a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={iconWrap}
      >
        <LinkedInIcon />
      </motion.a>
      <motion.a
        href={`mailto:${profile.email}`}
        aria-label={`Email ${profile.email}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`${iconWrap} ${
          inverted
            ? "text-light dark:text-dark [--mail-stroke:#1b1b1b] dark:[--mail-stroke:#f5f5f5]"
            : "text-dark dark:text-light [--mail-stroke:#f5f5f5] dark:[--mail-stroke:#1b1b1b]"
        }`}
      >
        <MailIcon />
      </motion.a>
      <button
        type="button"
        onClick={toggle}
        aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        className={`ml-3 flex items-center justify-center rounded-full p-1 w-8 h-8 ${
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        {/* The starter's SunIcon animates into a moon and MoonIcon into a sun. */}
        {mode === "dark" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
      </button>
    </>
  );
};

const NavBar = () => {
  const [mode, toggle] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-dark focus:text-light focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      <button
        type="button"
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav aria-label="Main">
          {links.map((link, i) => (
            <CustomLink key={link.href} href={link.href} title={link.title} className={i === 0 ? "mr-4" : "mx-4"} />
          ))}
        </nav>
        <nav aria-label="Profiles" className="flex items-center justify-center flex-wrap">
          <SocialLinks mode={mode} toggle={toggle} />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav aria-label="Main" className="flex items-center flex-col justify-center">
            {links.map((link) => (
              <CustomMobileLink key={link.href} href={link.href} title={link.title} onNavigate={close} />
            ))}
          </nav>
          <nav aria-label="Profiles" className="flex items-center justify-center flex-wrap mt-2">
            <SocialLinks mode={mode} toggle={toggle} inverted />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
