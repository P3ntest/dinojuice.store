import { DinoKillingCalculator } from "./DinoKillingCalculator";
import { LoyaltyCard } from "./LoyalityCard";
import Tilt from "react-parallax-tilt";

export function CalculatorPage() {
  return (
    <div className="section text-center flex flex-col items-center">
      <div className="font-black py-20 text-7xl">
        see how many dinos you burn.
      </div>

      <DinoKillingCalculator />
    </div>
  );
}
