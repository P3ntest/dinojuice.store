import logoText from "../assets/logotext.svg";

export function WaterMark() {
  return (
    <div className="absolute top-0 right-0 p-4">
      <img src={logoText} alt="logo" className="w-24 drop-shadow-2xl" />
    </div>
  );
}
