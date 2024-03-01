import Image from "next/image";
import mySqlIcon from "../../../public/icons/mysql-icon.svg";
import reactIcon from "../../../public/icons/reactjs-icon.svg";
import prismaIcon from "../../../public/icons/prisma-icon.svg";
import bootstrapIcon from "../../../public/icons/bootstrap-icon.svg";
import tailwindIcon from "../../../public/icons/tailwind-icon.svg";
import nodeIcon from "../../../public/icons/nodejs-icon.png";

const Stack = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-evenly pt-10 lg:justify-between lg:w-1/3 lg:ml-auto lg:mt-20 lg:pr-5">
        <Image
          src={mySqlIcon}
          className="w-20 lg:w-28 mx-4 lg:mx-3 mb-3 lg:mb-3 grayscale hover:grayscale-0"
          alt="stack-icon"
        />
        <Image
          src={nodeIcon}
          className="w-12 lg:w-20 mx-4 lg:mx-3 mb-3 lg:mb-3 grayscale hover:grayscale-0"
          alt="stack-icon"
        />
        <Image
          src={prismaIcon}
          className="w-24 lg:w-32 mx-4 lg:mx-3 mb-3 lg:mb-3 grayscale hover:grayscale-0"
          alt="stack-icon"
        />
        <Image
          src={reactIcon}
          className="w-12 lg:w-20 mx-4 lg:mx-3 mb-3 lg:mb-3 grayscale hover:grayscale-0"
          alt="stack-icon"
        />
        <Image
          src={bootstrapIcon}
          className="w-12 lg:w-20 mx-4 lg:mx-3 mb-3 lg:mb-3 grayscale hover:grayscale-0"
          alt="stack-icon"
        />
        <Image
          src={tailwindIcon}
          className="w-12 lg:w-20 mx-4 lg:mx-3 mb-3 lg:mb-3 grayscale hover:grayscale-0"
          alt="stack-icon"
        />
      </div>
    </section>
  );
};

export default Stack;
