import type { FC } from "react";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Clogo from "../../assets/c-logo.svg";
import Reactlogo from "../../assets/react-logo.svg";
import Nodelogo from "../../assets/node-logo.svg";
import Gologo from "../../assets/go-logo.svg";
import Tailwindlogo from "../../assets/tailwind-logo.svg";
import AWSlogo from "../../assets/aws-logo.svg";
import Postgreslogo from "../../assets/postgres-logo.svg";
import Supabaselogo from "../../assets/supabase-logo.png";
import Dockerlogo from "../../assets/docker-logo.svg";
import Linuxlogo from "../../assets/linux-logo.svg";
import type React from "react";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  __noPropsAllowed?: never;
}

const Profile: FC<ProfileProps> = () => {
  const navigate = useNavigate();
  const currentProject = {
    projectName: "Retro Chain",
    projectElementId: "0",
    projectSummary:
      "Retro Chain is an in-restaurant ordering system focusing on simplifying operations and delivering scalable features.",
  };

  function jumpToWorkHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    navigate(`../projects#${currentProject.projectElementId}`);
  }

  return (
    <div className="w-full">
      <div className={"w-full grid grid-cols-3 grid-rows-3 gap-4"}>
        <div className="row-span-2 row-start-1 col-start-1">
          <ProfileImage />
        </div>
        <article className="row-start-3 col-start-1 text-start">
          <section>
            <span className="font-bold text-lg">&gt; Aryan Gurung</span>
          </section>
          <section>
            <span className="font-extralight text-sm">FullStack Engineer</span>
          </section>
          <section className="pt-3">
            <span className="font-extralight text-sm cursor-pointer">
              ✧&nbsp;
              <a
                href="https://github.com/anayra-c6b9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github profile of Aryan Gurung"
                className="underline"
              >
                my_github_profile
              </a>
            </span>
          </section>
        </article>
        <div className="col-span-2 row-span-3 text-base font-extralight">
          <p>
            I am a full stack developer focused on building scalable web systems
            and backend infrastructure.
          </p>
          <p>
            I primarily design and implement APIs using Go and Postgres, deploy
            applications using Docker and cloud platforms, and build clean
            interfaces with React.
          </p>
          <p>
            I enjoy understanding how systems work under the hood, from database
            pipelines to building software that is reliable, maintainable and
            production-ready.
          </p>
        </div>
      </div>
      <hr className="border-white my-6" />
      <div className={"w-full grid grid-cols-4 grid-rows-5 gap-4"}>
        <div className="col-span-3 row-span-3 col-start-1 row-start-1 text-base font-extralight">
          <p className="text-lg mb-2 font-normal">Current Focus...</p>
          <p>
            Designing and building reliable systems that solve real operational
            problems.
          </p>
          <p className="pt-1">
            Deepening my understanding of web architecture, backend services,
            and how distributed components work together to deliver scalable
            applications.
          </p>
          <p className="pt-1">
            Currently developing a multi-tenant restaurant SaaS platform focused
            on streamlining operations, improving order flow, and delivering
            real-time business insights.
          </p>
        </div>
        <div className="col-span-3 col-start-2 row-span-2 row-start-4 text-base font-extralight text-right">
          <p className="font-normal text-lg mb-2">Problems I enjoy solving</p>
          <p>
            I’m drawn to problems that require understanding the system as a
            whole. Where architecture, performance, and trade-offs matter more
            than just writing code.
          </p>
          <p className="pt-1">
            I enjoy challenging assumptions, refining designs, and building
            solutions that remain maintainable as complexity grows.
          </p>
        </div>
      </div>
      <hr className="border-white my-6" />
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="font-extralight text-base">
          <p className="text-lg font-normal">Tech Stack</p>
          <section className="grid grid-cols-4 grid-rows-3 gap-3 py-6">
            <span id="react-logo" className="w-16 h-16">
              <img src={Reactlogo} alt="react logo" />
            </span>
            <span id="node-logo" className="w-16 h-16">
              <img src={Nodelogo} alt="nodejs logo" />
            </span>
            <span id="go-logo" className="w-16 h-16">
              <img src={Gologo} alt="go logo" />
            </span>
            <span id="tailwind-logo" className="w-16 h-16">
              <img src={Tailwindlogo} alt="tailwind logo" />
            </span>
            <span id="c-logo" className="w-16 h-16">
              <img src={Clogo} alt="C logo" />
            </span>
            <span id="aws-logo" className="w-16 h-16">
              <img src={AWSlogo} alt="AWS logo" />
            </span>
            <span id="postgres-logo" className="w-16 h-16">
              <img src={Postgreslogo} alt="postgres logo" />
            </span>
            <span id="supabase-logo" className="w-16 h-16">
              <img src={Supabaselogo} alt="supabase logo" />
            </span>
            <span id="docker-logo" className="w-16 h-16">
              <img src={Dockerlogo} alt="docker logo" />
            </span>
            <span id="linux-logo" className="w-16 h-16">
              <img src={Linuxlogo} alt="linux logo" />
            </span>
          </section>
        </div>
        <div>
          <p>Currently working on...</p>
          <div>
            <p className="text-lg mt-6">
              {"> "}
              {currentProject.projectName}
            </p>
            <p className="text-sm font-extralight mt-3">
              {currentProject.projectSummary}
            </p>
            <button
              type="submit"
              className="
                  group relative ml-auto mr-8 mt-8 block select-none
                  px-6 py-2 text-lg font-normal
                  bg-transparent text-black

                  after:content-['']
                  after:absolute after:inset-0
                  after:border after:border-white
                  after:translate-x-2 after:translate-y-2
                  after:z-0
                  after:pointer-events-none

                  before:content-['']
                  before:absolute before:inset-0
                  before:bg-white
                  before:z-[1]
                  before:transition-transform before:duration-75
                  before:pointer-events-none
                  active:before:translate-x-2 active:before:translate-y-2
                "
              onClick={jumpToWorkHandler}
            >
              <span className="relative z-[2] inline-block transition-transform duration-75 group-active:translate-x-2 group-active:translate-y-2">
                Click for details!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
