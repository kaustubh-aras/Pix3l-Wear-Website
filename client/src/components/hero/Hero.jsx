import Image from "next/image";
import BackgroundImage from "../../../public/hero.webp";

const Hero = () => {
  return (
    <div className="flex h-[75vh] bg-black">
      <Image src={BackgroundImage} />
    </div>
  );
};

export default Hero;
