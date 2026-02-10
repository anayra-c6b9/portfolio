import type { FC } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
// import styles from "./home.module.css";

interface HomeProps {
  __noPropsAllowed?: never;
}

const Home: FC<HomeProps> = () => {
  return (
    <div
      className={
        "bg-black text-white h-screen w-screen my-0 mx-auto flex justify-center px-8 font-terminal"
      }
    >
      <div className="w-full h-screen max-w-200 min-w-150 grow shrink flex flex-col justify-center items-center">
        <Header />
        <div className="w-full border-2 border-white border-t-0 h-5/6 overflow-y-scroll px-6 py-5 no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
