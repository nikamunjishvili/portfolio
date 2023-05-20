import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const CustomLink = ({ title, href, className = "" }: any) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap gap-6">
        <Link
          href="https://www.facebook.com/nika.munjishvili.58/"
          target={"_blank"}
        >
          <BsFacebook style={{ color: "darkblue", fontSize: 25 }} />
        </Link>
        <Link
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fnika_munjishvili%3Figshid%3DMzNlNGNkZWQ4Mg%253D%253D%26fbclid%3DIwAR3yV3wwH59HdZ0C9Q5jLyWnd-s8kAGhJbLrkLtB7PQWMwFzJNv2IkoC4tI&h=AT2owEQr5gyIoQj5P0CU22UT_vxliKRUtfk6l9o1HYuEov6qiH067F4_6WJdnvjoC8KWq05ioSgMEd3hl0mMS-gwrSEcsB1sIh9AXB0mwO3phOJofZ5Wb0Jj6vBN6X-TMW6sGA"
          target={"_blank"}
        >
          <BsInstagram style={{ color: "darkred", fontSize: 25 }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nika-munjishvili-4233b6248/"
          target={"_blank"}
        >
          <AiFillLinkedin style={{ color: "darkblue", fontSize: 25 }} />
        </Link>
        <Link href="https://github.com/nikamunjishvili" target={"_blank"}>
          <AiFillGithub style={{ color: "black", fontSize: 25 }} />
        </Link>
        <Link href="mailto:nikamunja31415@gmail.com" target={"_blank"}>
          <SiGmail style={{ color: "red", fontSize: 25 }} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
