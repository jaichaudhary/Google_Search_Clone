import {
  DotsVerticalIcon,
  SearchIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import HeaderOptionSearch from "./HeaderOptionSearch";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/*Left*/}
      <div className="flex space-x-6">
        <HeaderOptionSearch Icon={SearchIcon} title="All" selected />
        <HeaderOptionSearch Icon={PhotographIcon} title="Images" />
        <HeaderOptionSearch Icon={PlayIcon} title="Videos" />
        <HeaderOptionSearch Icon={NewspaperIcon} title="News" />
        <HeaderOptionSearch Icon={MapIcon} title="Maps" />
        <HeaderOptionSearch Icon={DotsVerticalIcon} title="More" />
      </div>
      {/*Right*/}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
