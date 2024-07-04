import { TypeAnimation } from "react-type-animation";
import dino from "../assets/dino.svg";

export function Hero() {
  return (
    <div className="section py-20">
      <div className="flex flex-row justify-between items-start w-full gap-10">
        <div className="font-black text-8xl text-dark w-[600px] drop-shadow-xl">
          <TypeAnimation
            sequence={[
              "because we love burning dead dinosaurs.",
              1000,
              "because e-vehicles are gay",
              50,
              "because e-vehicles are expensive.",
              1000,
              "because loud cards are more fun.",
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
        <img src={dino} alt="" className="w-96 drop-shadow-2xl" />
      </div>
    </div>
  );
}
