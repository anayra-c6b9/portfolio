import { useEffect, useState, type FC } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import styles from "./projects.module.css";

interface ProjectsProps {
  __noPropsAllowed?: never;
}

interface ProjectLink {
  linkTitle: string;
  linkUrl: string;
}
export interface ProjectInterface {
  projectTitle: string;
  projectPlatform: string;
  projectTechstack: string[];
  projectDescription: string;
  projectLinks: Array<ProjectLink>;
}

const Projects: FC<ProjectsProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // project data
  const projectData: Array<ProjectInterface> = [
    {
      projectTitle: "Retro Chain",
      projectPlatform: "Web",
      projectTechstack: [
        "Typescript",
        "Tailwind",
        "React",
        "Go",
        "PostgresSQL",
        "Supabase",
      ],
      projectDescription:
        "Retro Chain is a modern restaurant management and ordering platform built to simplify how food businesses operate, serve, and grow. It combines a clean digital ordering experience for customers with a powerful control system for restaurant staff, all wrapped in a minimal and scalable architecture.",
      projectLinks: [
        {
          linkTitle: "React+vite Frontend Code",
          linkUrl: "https://github.com/anayra-c6b9/retro_chain_frontend.git",
        },
        {
          linkTitle: "Go Backend Code",
          linkUrl: "https://github.com/anayra-c6b9/retro_chain_backend.git",
        },
      ],
    },
    {
      projectTitle: "Mashup Studio",
      projectPlatform: "Web",
      projectTechstack: ["Typescript", "Tailwind", "React", "Go"],
      projectDescription:
        "Mashup Studio is an interactive web-based music collaboration platform where users can create or join virtual jam rooms to listen to music using a unique room code. Within each jam room, users can select and queue songs from a preloaded music library, which are then played synchronously across all connected devices, enabling a shared listening experience in real time.",
      projectLinks: [
        {
          linkTitle: "React+vite Frontend Code",
          linkUrl: "https://github.com/anayra-c6b9/mashup-studio-frontend.git",
        },
        {
          linkTitle: "Go Backend Code",
          linkUrl: "https://github.com/anayra-c6b9/mashup-studio-backend.git",
        },
      ],
    },
    {
      projectTitle: "Git Air",
      projectPlatform: "CLI (MAC/Linux terminal)",
      projectTechstack: ["C", "C++"],
      projectDescription:
        "Git air is a TUI based application designed to simplify the use of git in terminal by creating a visual representation of commands that can be performed to execute operations on a user's github repos.",
      projectLinks: [
        {
          linkTitle: "Git Air Code",
          linkUrl: "https://github.com/anayra-c6b9/mashup-studio-frontend.git",
        },
      ],
    },
  ];
  const [loadedData, setLoadedData] = useState<ProjectInterface[]>(projectData);

  function onSelectChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.currentTarget.value.toLowerCase();
    if (!selectedValue) return;
    setSelectedCategory(selectedValue);
    // setSelected(selectedValue)
    if (selectedValue == "all") {
      setLoadedData(projectData);
      return;
    }

    const newLoad: Array<ProjectInterface> = projectData.filter((item) =>
      item.projectPlatform.toLowerCase().includes(selectedValue.toLowerCase()),
    );
    setLoadedData(newLoad);
  }

  function onSearchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const st = e.currentTarget.value.toLowerCase().trim();
    if (searchTerm === st) return;
    setSearchTerm(st);

    const filteredItems: Array<ProjectInterface> = projectData.filter(
      (item) => {
        const isCategorized =
          selectedCategory === "all" ||
          item.projectPlatform
            .toLowerCase()
            .includes(selectedCategory.toLowerCase());

        if (!st) return isCategorized;

        const all_data = [
          item.projectTitle.toLowerCase(),
          item.projectPlatform.toLowerCase(),
          item.projectLinks.map((l) => `${l.linkTitle} ${l.linkUrl}`).join(" "),
          item.projectTechstack.map((l) => l.toLowerCase()).join(" "),
          item.projectDescription.toLowerCase(),
        ].join(" ");

        return isCategorized && all_data.includes(st);
      },
    );

    setLoadedData(filteredItems);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <section className="mb-6">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search keyword"
            className="border border-white px-3 py-2 mr-12"
            onChange={onSearchHandler}
          />
          <div className="relative inline-block">
            <label htmlFor="category">Select Category: </label>
            <select
              name="category"
              id="category"
              className="border border-white px-3 pr-12  py-2 appearance-none"
              defaultValue={"all"}
              onChange={onSelectChangeHandler}
              aria-selected
            >
              <option value="all">All</option>
              <option value="web">Web</option>
              <option value="cli">CLI</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              ▼
            </div>
          </div>
        </form>
      </section>
      <section className="w-full flex flex-col gap-6 ">
        {loadedData.map((data, i) => (
          <ProjectCard
            element_id={i}
            projectTitle={data.projectTitle}
            projectDescription={data.projectDescription}
            projectPlatform={data.projectPlatform}
            projectTechstack={data.projectTechstack}
            projectLinks={data.projectLinks}
            key={String(i)}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
