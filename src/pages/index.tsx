import AnimationText from "@/common/components/animation";
import HireMe from "@/common/components/hire";
import Layout from "@/common/components/layout";
import Image from "next/image";
import Link from "next/link";
import DeveloperImage from "public/images/profile.png";
import { BiLinkExternal } from "react-icons/bi";
import LightBulb from 'public/images/Simple_light_bulb_graphic.png'
import Head from "next/head";
export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={DeveloperImage}
              alt="DeveloperImage"
              className="w-[30rem] rounded-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimationText
              text="Turnin Vision into Realety With Code!!"
              className="!text-6xl text-left"
            />
            <p className="text-base my-4 font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/cv.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark border-2 border-transparent border-solid hover:border-dark"
                download={true}
              >
                Resume
                <BiLinkExternal style={{ fontSize: 25 }} />
              </Link>
              <Link
                href="mailto:nikamunja31415@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-[13rem]">
        <Image src={LightBulb} alt="lightBulbs" className="w-full h-auto" />
      </div>
    </main>
  );
}
