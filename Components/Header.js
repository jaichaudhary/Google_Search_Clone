import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Avatar from "../Components/Avatar";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />

        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center py-2 px-4 ml-10 mr-5 flex-grow">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          url="https://avatars.githubusercontent.com/u/59798109?s=400&u=cc4be5ab33f09a6749d0121118b8c6ed4f217dad&v=4"
          className="ml-auto"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
