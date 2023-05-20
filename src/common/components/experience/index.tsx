
interface PropsType {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: PropsType) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <span className="font-medium w-full">{work}</span>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <div
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full-Stack Developer"
            company="Re:soft"
            companyLink="https://www.resoft.space/"
            time="2022-Present"
            address="Georgia/Tbilisi "
            work="Worked on a team responsible for developing new features for Re:soft Projects, including improving the accuracy and relevance of search results and developing new tools."
          />
          <Details
            position="Lecturer"
            company="Re:education"
            companyLink="https://reeducate.space/#/"
            time="2023-Present"
            address="Georgia/Tbilisi "
            work="I teach students web development and help them solve various coding problems"
          />
          <Details
            position="Front-End Mentor"
            company="Re:school"
            companyLink="https://www.reschool.world/#/"
            time="2023-Present"
            address="Georgia/Tbilisi "
            work="Teaching 9-14 years old pupils web-development."
          />
          <Details
            position="Web Development Mentor"
            company="Bitcamp"
            companyLink="https://www.bitcamp.ge/"
            time="2023-Present"
            address="Georgia/Tbilisi "
            work="I teach students web development and help them solve various coding problems"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
