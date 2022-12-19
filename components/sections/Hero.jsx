import Image from "next/image";
import play from "../../public/assets/play.svg";
import Wrapper from "../Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className=" w-full">
        <video
          loop
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/assets/video.mp4" />
        </video>
        <div className="absolute right-[54px] bottom-[24px] bg-tum_blue">
          <button className="p-[10px]">
            <Image src={play} alt="play-icon" />
          </button>
        </div>
        <div className="text-white py-16 px-6">
          <h1 className="text-5xl font-bold">
            TUM. The Entrepreneurial <br></br>University
          </h1>
          <p className="text-xl mt-6">
            Innovation through talent, excellence and responsibility
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
