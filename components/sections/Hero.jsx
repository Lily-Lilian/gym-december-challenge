import Image from "next/image";
import play from "../../public/assets/play.svg";
import Wrapper from "../Wrapper";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[620px] bg-tum_blue">
      <div className="bg-black_gradient absolute inset-0 z-20"></div>
      <Wrapper>
        <div className="text-white relative py-16 z-20 max-w-[648px]">
          <h1 className="text-5xl font-bold">
            TUM. The Entrepreneurial <br></br>University
          </h1>
          <p className="text-xl mt-6">
            Innovation through talent, excellence and responsibility
          </p>
        </div>
      </Wrapper>
      <video
        loop
        autoPlay
        muted
        className="w-full  md:absolute md:inset-0 block object-cover h-full"
      >
        <source src="/assets/video.mp4" />
      </video>
      <div className="absolute right-[54px] bottom-[24px] bg-tum_blue z-20">
        <button className="p-[10px]">
          <Image src={play} alt="play-icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
