import { ReactNode } from "react";

export default function Button(props: {
  children: ReactNode;
  className?: string;
  clickEvent?: () => void;
}) {
  return (
    <button
      onClick={props.clickEvent}
      className={`${
        props.className || ""
      } transition duration-300 hover:opacity-50 p-4 w-full rounded-xl bg-orange-500 text-white font-bold text-center`}
    >
      {props.children}
    </button>
  );
}
