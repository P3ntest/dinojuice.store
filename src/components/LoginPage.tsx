import { LoyaltyCard } from "./LoyalityCard";
import Tilt from "react-parallax-tilt";

export function LoginPage() {
  return (
    <div className="section text-center flex flex-col items-center">
      <div className="font-black py-20 text-7xl">because you are awesome.</div>
      <Tilt
        scale={1.1}
        glareMaxOpacity={0.6}
        glareEnable
        glareColor="#ccffff"
        glarePosition="all"
        glareBorderRadius="54px"
      >
        <LoyaltyCard />
      </Tilt>
    </div>
  );
}
