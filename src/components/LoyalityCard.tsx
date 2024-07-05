import QRCode from "react-qr-code";
import dino from "../assets/dino.svg";
import logoText from "../assets/logotext.svg";
import { twMerge } from "tailwind-merge";

export function LoyaltyCard() {
  return (
    <div className="border-dark border-[7px] bg-secondary rounded-[55px] aspect-[1.56] w-[500px] relative flex flex-col cursor-default shadow-2xl">
      <div className="flex flex-row justify-between items-center w-full gap-6 p-8">
        <img src={dino} alt="" className="w-[25%] drop-shadow-lg" />
        <div>
          <img src={logoText} alt="" className="w-[100%] drop-shadow-lg" />
          <div className="text-xl font-black drop-shadow-lg">
            customery loyalty card.
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-start px-7">
        <div className="font-bold text-sm text-start">
          1. Refill your car at any of your dinojuice™ bars
          <br />
          2. Kill all 7 dinos
          <br />
          4.Get one refill for free!
          <br />+ help kill the environment!
        </div>
        <div className="bg-white p-2">
          <QRCode value={window.location.href} size={60} className="" />
        </div>
      </div>
      <div className="bg-primary rounded-full border-dark border-[5px] flex flex-row justify-between m-4 px-2">
        {new Array(7).fill(0).map((_, i) => (
          <div className="relative p-2">
            <div className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center">
              {true && (
                <img
                  src={dino}
                  alt=""
                  className={twMerge(
                    "w-10 inline-block  scale-x-[-1]",
                    i > 2 && "opacity-20 grayscale"
                  )}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
