import discover from "../../public/assets/discover.png";
import Image from "next/image";
import Button from "../ui/Button";
import Wrapper from "../Wrapper";

const Discover = () => {
  return (
    <Wrapper>
      <div className="text-tum_blue_dark pb-12">
        <p className="font-bold">Customized navigation</p>
        <h3 className="text-[32px] font-bold">
          Discover what TUM has to offer
        </h3>
      </div>
      <div className="flex flex-1 lg:flex-row flex-col gap-6 relative px-12">
        <ul className="bg-white absolute pr-4 pb-4 mt-[33px] -ml-[48px] border border-tum_grey_8 ">
          <li className="py-3 px-5">For:</li>
          <li className="py-3 px-5 bg-tum_grey_8">Prospective Students</li>
          <li className="py-3 px-5">Founders</li>
          <li className="py-3 px-5">Employees</li>
          <li className="py-3 px-5">Show all </li>
        </ul>
        <Image className="max-w-[688px]" src={discover} alt="discover-image" />
        <div className="max-w-[419px] ml-14">
          <h3 className="text-[42px] font-bold mt-[68px]">
            Prospective Students
          </h3>
          <p className="text-xl mt-6">
            Learn to bring ideas to life, discover new possibilities, work in
            teams and build networks.
          </p>
          <Button
            className={
              "border-tum_blue border bg-transparent text-tum_blue mt-8"
            }
          >
            Learn More
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Discover;
