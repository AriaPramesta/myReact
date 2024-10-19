import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

export function Navbar() {
  return (
    <div className="fixed z-50 p-5 flex justify-between items-center w-full bg-transparent backdrop-blur-xl">
      <a href="/">
        <h1 className="text-xl font-bold transition-all ease-in-out duration-300 hover:scale-110">
          My react
        </h1>
      </a>
      <div className="flex gap-10 items-center">
        <div className="text-3xl">
          <MdOutlineLightMode />
        </div>

        <div className="text-3xl">
          <Link to="https://github.com/AriaPramesta" target="_blank">
            <FaGithub className="transition-all ease-in-out duration-300 hover:scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
}
