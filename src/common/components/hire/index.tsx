import Link from "next/link";

const HireMe = () => {
  return (
    <div className="absolute left-[7%] bottom-3">
      <Link
        href="mailto:nikamunja31415@gmail.com"
        target="_blank"
        className={
          "flex items-center justify-center hover:bg-light hover:text-dark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[100px] h-[100px] rounded-full"
        }
      >
        Hire Me
      </Link>
    </div>
  );
};

export default HireMe;
