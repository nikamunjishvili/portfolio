import { motion } from "framer-motion";

const Skill = ({ name, x, y }: any) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-1 px-3 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.5 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center  bg-circularLight">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer">
          Web
        </motion.div>
        <Skill name="CSS" x="-25vw" y="2vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="2vw" />
        <Skill name="Node.Js" x="-5vw" y="12vw" />
        <Skill name="Next.Js" x="-20vw" y="-15vw" />
        <Skill name="Tailwind.Css" x="15vw" y="-12vw" />
        <Skill name="Bootstrap" x="32vw" y="-5vw" />
        <Skill name="React.Js" x="0vw" y="-20vw" />
        <Skill name="FireBase" x="-25vw" y="18vw" />
        <Skill name="MongoDb" x="18vw" y="18vw" />
        <Skill name="Express.Js" x="18vw" y="18vw" />
        <Skill name="Nest.Js" x="18vw" y="18vw" />
        <Skill name="Typescript" x="27vw" y="10vw" />
        <Skill name="Github" x="8vw" y="18vw" />
        <Skill name="Git" x="-11vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
