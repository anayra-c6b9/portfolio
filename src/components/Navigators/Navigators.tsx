import type React from "react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { LinkInterface } from "../Header/Header";
// import styles from "./navigators.module.css";

export interface NavigatorsProps extends LinkInterface {
  currentSelected: number;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Navigators: FC<NavigatorsProps> = ({
  currentSelected,
  link,
  text_value,
  id_value,
  onClickHandler,
}) => {
  const navigation = useNavigate();

  const buttonClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onClickHandler(e);

    navigation("../" + link, {
      preventScrollReset: true,
      relative: "route",
      replace: true,
    });
  };

  return (
    <button
      onClick={buttonClickEvent}
      className={
        " border-2 border-white rounded-t-xl px-4 py-2.5 antialiased md:subpixel-antialiased " +
        (id_value == currentSelected ? "border-b-0 px-5 py-3 " : "")
      }
      value={id_value}
    >
      <span
        className={
          id_value != currentSelected ? "opacity-60 font-extralight" : ""
        }
      >
        {text_value}
      </span>
    </button>
  );
};

export default Navigators;
