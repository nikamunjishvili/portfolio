import AnimationText from "@/common/components/animation";
import Layout from "@/common/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import Capture from "../../images/image.png";
import Quiz from "../../images/image.png/quizze.png";
import Movies from "../../images/image.png/movies.png";
import PlanetFactApp from "../../images/image.png/planet.png";
import PlantsApp from "../../images/image.png/plants.png";
import Tip from "../../images/image.png/tip.png";

interface PropsType {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: PropsType) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <AiFillGithub style={{ fontSize: 40 }} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }: any) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <AiFillGithub style={{ fontSize: 40 }} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimationText text="Knowledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type={"Tic-Tac-Toe"}
                title="Next.js Simple Tic-Tac-Toe Game!"
                summary={
                  "This is Next.js Simple Tic-Tac-Toe Game! Project and you can just try Play!"
                }
                img={Capture}
                link="https://tic-tac-toe-app-topaz.vercel.app/"
                github={
                  "https://github.com/nikamunjishvili/tic-tac-toe-app.git"
                }
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type={"Quiz Game!"}
                title="React.js Quiz Game!"
                summary={
                  "This is React.js Simple Quiz Game! Project and you can just try Play!"
                }
                img={Quiz}
                link="https://nikamunjishvili.github.io/quiz-app/"
                github={"https://github.com/nikamunjishvili/quiz-app.git"}
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type={"Movies Website!"}
                title="React.js Moviews Website!"
                summary={"This is React.js Simple Movies Website!"}
                img={Movies}
                link="https://nikamunjishvili.github.io/movies-website/"
                github={"https://github.com/nikamunjishvili/movies-website.git"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type={"Planet-Fact-App"}
                title="React.js Planet-Fact-App Website!"
                summary={"This is Next.js Simple Planet-Fact-App Website!"}
                img={PlanetFactApp}
                link="https://nikamunjishvili.github.io/planet-fact-app/"
                github={
                  "https://github.com/nikamunjishvili/planet-fact-app.git"
                }
              />
            </div>

            <div className="col-span-6">
              {" "}
              <Project
                type={"Plants Website!"}
                title="Front-End Plants Website!"
                summary={"This is Front-End Plants Website!"}
                img={PlantsApp}
                link="https://plants-app-red.vercel.app/"
                github={"https://github.com/nikamunjishvili/plants-app.git"}
              />
            </div>

            <div className="col-span-6">
              {" "}
              <Project
                type={"Tip Calculator Website!"}
                title="React.js Tip Calculator!"
                summary={"This is React.js Tip Calculator Website!"}
                img={Tip}
                link="https://nikamunjishvili.github.io/React-Tip-Calculator/"
                github={"https://github.com/nikamunjishvili/React-Tip-Calculator.git"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
