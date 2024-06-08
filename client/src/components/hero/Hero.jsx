import Image from "next/image";
import BackgroundImage from "../../../public/hero.webp";

const Hero = () => {
  return (
    <div className="relative flex h-[75vh] w-full justify-center">
      <Image
        src={BackgroundImage}
        layout="full"
        objectFit="cover"
        quality={100}
        className="z-0"
        alt="Hero Background Image"
      />
    </div>
  );
};

export default Hero;
