import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import tum from "../../public/assets/tum-logo.svg";
import search from "../../public/assets/search.svg";

const Navbar = () => {
  const navLinks = [
    { text: "news and events", page: "news" },
    { text: "studies", page: "studies" },
    { text: "lifelong learning", page: "learning" },
    { text: "research", page: "research" },
    { text: "innovation", page: "innovation" },
    { text: "community", page: "community" },
    { text: "about tum", page: "about" },
  ];
  return (
    <nav className="bg-tum_blue_dark sticky top-0 left-0 z-50 w-full ">
      <div className=" flex justify-between text-white uppercase px-6 max-w-[104rem] xl:mx-auto">
        <ul className="flex gap-3 py-5">
          <li className="p-[6px]">
            <Image className="w-[33px] h-[33px]" src={logo} alt="logo" />
          </li>
          <Link href="./">
            <li>
              <Image className="w-20 h-[42px]" src={tum} alt="tum-logo" />
            </li>
          </Link>
          <span className="text-xs">
            Technical<br></br>University<br></br> of Munich
          </span>
        </ul>
        <div className="lg:flex hidden list-none space-x-3 flex-end  text-sm font-bold pt-8 pb-6">
          {navLinks.map((link, index) => (
            <Link href={`/${link.page}`} key={index}>
              <div className="hover:underline text-white underline-offset-[28px]">
                {link.text}
              </div>
            </Link>
          ))}
          <ul className="flex gap-3 pl-[54px]">
            <li className="border-r-2 border-white px-2 opacity-50">de</li>
            <li>en</li>
            <li>
              <Image
                className="w-[24px] h-[24px] "
                src={search}
                alt="search-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
