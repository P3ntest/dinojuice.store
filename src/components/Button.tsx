import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Button(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "border-dark border-8 rounded-full p-1 px-8 flex items-center justify-center text-md font-black text-dark cursor-pointer bg-primary shadow-xl hover:scale-105 transition-all",
        props.className
      )}
    />
  );
}

export function Input(props: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={twMerge(
        "border-8 outline-none! border-dark rounded-full p-2 text-lg font-black text-dark bg-primary shadow-xl",
        props.className
      )}
    />
  );
}
