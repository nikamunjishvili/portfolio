import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="w-16 h-16 text-light bg-dark flex items-center justify-center rounded-full text-2xl font-bold"
      >
        NM
      </Link>
    </div>
  );
};

export default Logo;
