import Experience from "@/common/components/experience";
import Layout from "@/common/components/layout";
import Skills from "@/common/components/skills";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full ">
        <Layout>
          <h1 className="text-[70px] font-semibold text-center mt-[-3rem]">
            Nika Munjishvili Purpose!
          </h1>
          <div className="gird w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start mt-6">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium text-xl">
                Hi, I am Nika, a web developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With 1 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients visions to life..
              </p>
              <p className="my-4 font-medium text-xl">
                I’m results-oriented full-stack developer. I entered this big
                tech world in just a few months Forward and forward I found
                myself very flexible and adaptable to learning new things. What
                I like the most Programming is about making something out of
                nothing.
              </p>
              <p className="font-medium text-xl">
                I think I had the ability to work on any task,I have a great
                desire to work in a team Completing difficult tasks, constantly
                learning and developing. I also like when people think that
                creating any website or application is magic at first glance,
                and it all becomes normal for you and you do it easily, it feels
                very cool
              </p>
            </div>
          </div>
          <div className="pt-[10rem]">
          <Skills />
          </div>
          <div>
            <Experience />
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default AboutPage;
