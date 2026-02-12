import { type FC } from "react";
import type React from "react";
import Navigators from "../Navigators/Navigators";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  __noPropsAllowed?: never;
}

export interface LinkInterface {
  link: string;
  text_value: string;
  id_value: number;
}

const Header: FC<HeaderProps> = () => {
  const location = useLocation();

  const changeLink = (_e: React.MouseEvent<HTMLButtonElement>) => {
    // void
  };

  const linkData: Array<LinkInterface> = [
    {
      link: "profile",
      text_value: "Profile",
      id_value: 1,
    },
    {
      link: "projects",
      text_value: "Projects",
      id_value: 2,
    },
    {
      link: "skills",
      text_value: "Skills",
      id_value: 3,
    },
    {
      link: "experience",
      text_value: "Experience",
      id_value: 4,
    },
    {
      link: "contact",
      text_value: "Contact",
      id_value: 5,
    },
    {
      link: "blog",
      text_value: "Blogs",
      id_value: 6,
    },
  ];

  const currentLink =
    linkData.find(
      (x) =>
        x.link.toLowerCase() === location.pathname.split("/")[1].toLowerCase(),
    )?.id_value || 1;

  const navElements = linkData.map((data) => {
    return (
      <Navigators
        currentSelected={currentLink}
        link={data.link}
        text_value={data.text_value}
        id_value={data.id_value}
        onClickHandler={changeLink}
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
