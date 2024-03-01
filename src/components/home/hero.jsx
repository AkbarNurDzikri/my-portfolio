import Image from "next/image";
import me from "../../../public/img/me.png";
import blobIcon from "../../../public/icons/blob.svg";

const Hero = () => {
  return (
    <section>
      <div className="lg:flex">
        <div className="hidden lg:inline w-2/3 lg:h-60"></div>
        <div className="w-full lg:w-1/2 h-60 relative flex justify-center lg:justify-end items-center shadow-slate-500 bg-gradient-to-tr from-sky-600 to-teal-500 shadow-lg lg:rounded-l-2xl">
          <Image
            src={blobIcon}
            className="hidden lg:w-[500px] lg:pl-10"
            alt="icon"
          />

          <div className="bg-slate-100 w-52 h-52 absolute lg:relative rounded-full border-4 border-slate-100 lg:w-72 lg:h-72 overflow-hidden">
            <Image src={me} className="" priority alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
