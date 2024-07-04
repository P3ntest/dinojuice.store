import { TypeAnimation } from "react-type-animation";
import dino from "../assets/dino.svg";
import logoText from "../assets/logotext_secondary.svg";

export function Hero() {
  return (
    <div className="section py-20">
      <div className="flex flex-row justify-between items-start w-full gap-10">
        <div>
          <div>
            <img src={logoText} alt="" className="h-10 drop-shadow-2xl" />
          </div>
          <div className="font-black text-8xl text-dark w-[600px] drop-shadow-xl h-[600px]">
            <TypeAnimation
              sequence={[
                "because we love burning dead dinosaurs.",
                1000,
                "because e-vehicles are gay.",
                50,
                "because e-vehicles are not cool.",
                1000,
                "because loud cars are more fun.",
                1000,
                "because we love the smell of gasoline.",
                1000,
                "because we love the sound of a roaring engine.",
                1000,
                "because we love the feeling of speed.",
                1000,
                "because charging is for losers.",
                1000,
                "because we love",
                "because we hate the environment.",
                1000,
              ]}
              repeat={Infinity}
              preRenderFirstString
              speed={3}
              deletionSpeed={40}
            />
          </div>
        </div>
        <img src={dino} alt="" className="w-96 drop-shadow-2xl" />
      </div>
    </div>
  );
}

export function SecondHero() {
  return (
    <div className="w-full bg-secondary border-t-dark border-t-[20px] shadow-2xl">
      <div className="section">
        <div className="text-center font-black text-7xl py-40 drop-shadow-2xl">
          the gas station of the future.
        </div>
        {/* <iframe
          width="425"
          height="350"
          scrolling="no"
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.699318408966066%2C47.484177893725764%2C9.729595184326174%2C47.49977861091604&amp;layer=mapnik&amp;marker=47.49197883161885%2C9.714467525482178"
        ></iframe> */}
      </div>
    </div>
  );
}
