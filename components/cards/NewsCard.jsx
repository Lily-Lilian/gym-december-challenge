import robot from "../../public/assets/csm1.jpeg";
import Image from "next/image";

const NewsCard = () => {
  let topics = [
    {
      img: robot,
      span: "TUM in rankings",
      paragraph: "WirtschaftsWoche rankings",
      names: "Germany's strongest university in business sciences",
      title:
        "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the...",
      date: "12/16/2022",
      time: "Reading time 2 min.",
    },
    {
      img: robot,
      span: "Research",
      paragraph: "WirtschaftsWoche rankings",
      names: "Germany's strongest university in business sciences",
      title:
        "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the...",
      date: "12/16/2022",
      time: "Reading time 2 min.",
    },
    // {
    //   img: robot,
    //   span: "Research",
    //   paragraph: "WirtschaftsWoche rankings",
    //   names: "Germany's strongest university in business sciences",
    //   title:
    //     "TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the...",
    //   date: "12/16/2022",
    //   time: "Reading time 2 min.",
    // },
  ];
  return (
    <div className="flex gap-8 ">
      {topics.map((topic, index) => (
        <div key={index} className="max-w-[332px]">
          <div className="relative">
            <Image src={topic.img}></Image>
            <p className="absolute text-[13.33px] py-[2px] px-2 bottom-0 left-0 z-20 text-tum_blue_dark bg-tum_grey_8">
              {topic.span}
            </p>
          </div>
          <div>
            <p className="text-base font-bold">{topic.paragraph}</p>
            <p className="text-xl font-bold mt-[2px]">{topic.names}</p>
            <h3 className="text-sm mt-3">{topic.title}</h3>
          </div>
          <div className="flex text-[13.33px]">
            <p className="p-3">{topic.date}</p>
            <p className="p-3">{topic.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
