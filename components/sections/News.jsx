import NewsCard from "../cards/NewsCard";
import Button from "../ui/Button";
import Wrapper from "../Wrapper";

const News = () => {
  return (
    <Wrapper>
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="relative flex flex-col mt-12">
          <h1 className="text-tum_blue_dark text-[32px] font-bold">
            News from TUM
          </h1>
          <p className="text-tum_blue_dark text-xl mt-6  max-w-[572px] lg:max-w-[688px]">
            News, research results and events: everything that enthuses people
            at our university.
          </p>
          <div>
            <Button className={"mt-6"}>see all</Button>
          </div>
        </div>
        <NewsCard />
      </div>
      <div className="flex lg:flex-row flex-col mt-12 lg:ml-[402.825px] -mr-[12px]">
        <NewsCard />
      </div>
    </Wrapper>
  );
};

export default News;
