import { TypeAnimation } from "react-type-animation";
import dino from "../assets/dino.svg";
import logoText from "../assets/logotext_secondary.svg";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

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
    <div className="w-full bg-secondary border-y-dark border-y-[20px] shadow-2xl">
      <div className="section">
        <div className="text-center font-black text-7xl pt-40 drop-shadow-2xl">
          the gas station of the future.
        </div>
        <div className="flex flex-row gap-8 items-stretch justify-stretch py-20">
          {[
            {
              stat: 2830,
              suffix: "m",
              text: "dinos burned.",
            },
            {
              stat: 0,
              text: "minutes of charging like a loser.",
            },
            {
              stat: 7250 + (Date.now() - 1720199782000) / 1000,
              text: "customer loyalty cards filled.",
            },
          ].map(({ stat, text, suffix }) => (
            <div className="border-dark border-[9px] flex-1 bg-primary rounded-2xl p-3 font-black text-xl">
              <div className="text-center text-5xl py-4">
                <CountUp
                  end={stat}
                  enableScrollSpy
                  duration={4}
                  suffix={suffix}
                />
              </div>
              <div className="text-center">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
