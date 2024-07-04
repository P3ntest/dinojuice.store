// average 5 dinos per liter

import { useState } from "react";
import { Button, Input } from "./Button";
import { WaterMark } from "./WaterMark";
import dino from "../assets/dino.svg";

const textSet: Record<number, string> = {
  0: "you never touched a car in your life.",
  10: "you are a public transport user.",
  40: "you like burning some dinos.",
  80: "you are a car enthusiast.",
  100: "you burn lots of dinos.",
  150: "that's a lot of dinos.",
  200: "you are a dino killer.",
  250: "you could really benefit from our customer loyalty program.",
  300: "you are the reason we are running out of dinos.",
  400: "you hit heavier than a meteor.",
};
function getDinoText(dinos: number) {
  let closest = 0;
  for (const key in textSet) {
    if (Math.abs(parseInt(key) - dinos) < Math.abs(closest - dinos)) {
      closest = parseInt(key);
    }
  }
  return textSet[closest];
}

export function DinoKillingCalculator() {
  const [litersPer100km, setLitersPer100km] = useState(10);
  const [kmPerDay, setKmPerDay] = useState(10);

  const [currentDinosPerDay, setCurrentDinosPerDay] = useState<number | null>(
    null
  );

  return (
    <div className="section py-40">
      <div className="bg-secondary border-dark border-8 rounded-3xl p-10 relative flex flex-col gap-6">
        <WaterMark />
        <div className="font-black text-4xl drop-shadow-xl">
          dino calculator.
        </div>
        <div>
          <div className="font-bold">liters / 100km:</div>
          <Input
            type="number"
            style={{
              outline: "none",
            }}
            value={litersPer100km}
            onChange={(e) => setLitersPer100km(parseInt(e.target.value))}
          />
        </div>
        <div>
          <div className="font-bold">km / day:</div>
          <Input
            type="number"
            style={{
              outline: "none",
            }}
            value={kmPerDay}
            onChange={(e) => setKmPerDay(parseInt(e.target.value))}
          />
        </div>

        <div className="w-min">
          <Button
            onClick={() => {
              setCurrentDinosPerDay(
                parseFloat(((litersPer100km / 100) * kmPerDay * 5).toFixed(1))
              );
            }}
          >
            calculate.
          </Button>
        </div>
        {currentDinosPerDay !== null && (
          <div className="font-bold text-2xl flex flex-col gap-4">
            <div>
              <div>you are killing {currentDinosPerDay} dinos per day.</div>
              <div>that's {currentDinosPerDay * 7} per week. </div>
              <div>or {currentDinosPerDay * 30} per month:</div>
            </div>
            <div>
              {new Array(currentDinosPerDay * 30).fill(0).map(() => (
                <img src={dino} alt="" className="w-8 m-4 inline-block" />
              ))}
            </div>
            <div>{getDinoText(currentDinosPerDay * 30)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
