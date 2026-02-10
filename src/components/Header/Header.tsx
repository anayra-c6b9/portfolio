import { useState, type FC } from "react";
import type { NavigatorsProps } from "../Navigators/Navigators";
import type React from "react";
import Navigators from "../Navigators/Navigators";
// import styles from "./header.module.css";

interface HeaderProps {
  __noPropsAllowed?: never;
}

const Header: FC<HeaderProps> = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const changeLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentLink(Number(e.currentTarget.value));
  };

  const linkData: Array<NavigatorsProps> = [
    {
      currentSelected: currentLink,
      link: "profile",
      text_value: "Profile",
      id_value: 1,
      onClickHandler: changeLink,
    },
    {
      currentSelected: currentLink,
      link: "projects",
      text_value: "Projects",
      id_value: 2,
      onClickHandler: changeLink,
    },
    {
      currentSelected: currentLink,
      link: "skills",
      text_value: "Skills",
      id_value: 3,
      onClickHandler: changeLink,
    },
    {
      currentSelected: currentLink,
      link: "experience",
      text_value: "Experience",
      id_value: 4,
      onClickHandler: changeLink,
    },
    {
      currentSelected: currentLink,
      link: "contact",
      text_value: "Contact",
      id_value: 5,
      onClickHandler: changeLink,
    },
    {
      currentSelected: currentLink,
      link: "blog",
      text_value: "Blogs",
      id_value: 6,
      onClickHandler: changeLink,
    },
  ];

  const navElements = linkData.map((data) => {
    return (
      <Navigators
        currentSelected={data.currentSelected}
        link={data.link}
        text_value={data.text_value}
        id_value={data.id_value}
        onClickHandler={data.onClickHandler}
        key={data.text_value}
      />
    );
  });

  return (
    <div className="w-full flex justify-center items-center">
      <nav className={"w-full flex flex-row justify-end items-end grow shrink"}>
        {navElements}
        <div className="border-b-2 border-white grow shrink"></div>
      </nav>
    </div>
  );
};

export default Header;
