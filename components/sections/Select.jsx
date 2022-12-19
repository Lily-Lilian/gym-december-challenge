import Image from "next/image";

const Select = () => {
  return (
    <div className=" w-full mx-auto mt-40 px-6">
      <select
        name=""
        id=""
        placeholder="Select degree on enter keyword"
        className="p-5 bg-tum_grey_8 font-bold w-full outline-none text-2xl text-gray-600"
        defaultValue="1"
      >
        <option value="1">Select degree on enter keyword</option>
      </select>
      <div className="text-primary font-medium mt-5 flex justify-end">
        <Image src="/icons/right.svg" width={24} height={32} />
      </div>
    </div>
  );
};

export default Select;
