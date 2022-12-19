import Image from "next/image";
import Button from "../ui/Button";
import school from "../../public/assets/school.webp";

const Motivation = () => {
  return (
    <div className="px-6 mx-auto mt-24">
      <div className="flex relative items-center">
        <Image
          width={736}
          height={500}
          alt=""
          src={school}
          className="object-cover h-[500px]"
        />
        <div className="w-2/4 absolute left-2/4">
          <div className="bg-tum_blue_bright text-dark-blue p-10">
            <div className="text-3xl font-bold tracking-small">
              Schools and Research Centers
            </div>
            <div className="tracking-small mt-5 mb-8">
              They form the academic foundation of TUM: Our schools and
              departments, connected at disciplinary interfaces by integrative
              research institutes to create an organization that drives
              innovation.
            </div>
            <Button>Organization</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
