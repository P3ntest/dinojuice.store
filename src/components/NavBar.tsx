import { Link } from "react-router-dom";
import dino from "../assets/dino.svg";
import logoText from "../assets/logotext.svg";
import { Button } from "./Button";

export function NavBar() {
  return (
    <div className="w-full bg-secondary border-b-dark border-b-8 shadow-xl flex flex-col">
      <div className="section p-5 flex flex-row justify-between items-center">
        <Link
          className="flex flex-row items-center gap-3 cursor-pointer hover:scale-105 transition-all group"
          to="/"
        >
          <img
            src={dino}
            alt=""
            className="w-16 drop-shadow-xl group-hover:animate-bounce"
          />
          <img src={logoText} alt="" className="h-10 drop-shadow-xl" />
        </Link>
        <Link to="/login">
          <Button>login.</Button>
        </Link>
      </div>
    </div>
  );
}
