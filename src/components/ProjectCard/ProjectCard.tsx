import type { FC } from "react";
import type { ProjectInterface } from "../../pages/Projects/Projects";

interface ProjectCardProps extends ProjectInterface {
  element_id: number;
}

const ProjectCard: FC<ProjectCardProps> = (
  projectCardData: ProjectCardProps,
) => {
  return (
    <div
      className="border-2 border-white text-sm font-extralight"
      id={String(projectCardData.element_id)}
    >
      <section className="px-3 py-2">
        <div className="text-lg font-normal">
          {projectCardData.projectTitle}
        </div>
        <div className="italic text-xs">
          Platform:{" "}
          <span className="text-cyan-300">
            {projectCardData.projectPlatform}
          </span>
        </div>
      </section>
      <hr />
      <div className="px-3 py-2">
        <section className="mb-2 text-base">
          {projectCardData.projectDescription}
        </section>
        <section className="text-xs">
          Techstack:{" "}
          <span className="text-green-300">
            {projectCardData.projectTechstack.join(", ")}
          </span>
        </section>
      </div>
      <hr />
      <div className="px-3 py-4">
        <div className="mb-2">
          <span className="italic underline text-base">links</span>
        </div>
        <ul className="flex flex-col gap-1">
          {projectCardData.projectLinks.map((proj, it) => (
            <li className="" key={it}>
              <span className="font-normal">{proj.linkTitle}</span> :{" "}
              <a
                className={" hover-beam text-amber-200 visited:text-violet-400"}
                href={proj.linkUrl}
                data-text={proj.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"link to " + proj.linkTitle}
              >
                {proj.linkUrl}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
