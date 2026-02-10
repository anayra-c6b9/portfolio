import type { FC } from "react";
// import styles from "./experience.module.css";

interface ExperienceProps {
  __noPropsAllowed?: never;
}

const Experience: FC<ExperienceProps> = () => {
  interface EducationData {
    range: string;
    school: string;
    address: string;
    subject: string;
  }

  interface ExperienceData {
    range: string;
    institute: string;
    position: string;
    role: string[];
  }

  const items: Array<EducationData> = [
    {
      range: "[2017-2019]",
      school: "B.S.F. Senior Senior Secondary High School",
      address: "Kadamtala, Darjeeling, west bengal, India",
      subject: "high school graduate in Physics, Chemistry, Maths and Computer",
    },
    {
      range: "[2020-2023]",
      school: "Salesian College, Siliguri Campus",
      address: "Siliguri, Darjeeling, west bengal, india",
      subject: "bachelors in computer science",
    },

    {
      range: "[2025-2027]",
      school: "Kyoto college of graduate studies in Informatics",
      address: "hyakumanben, kyoto city, kyoto, japan",
      subject: "masters in informatics (major in web development)",
    },
  ];

  const exp: Array<ExperienceData> = [
    {
      range: "2024-2025",
      institute: "Salesian college, siliguri campus",
      position: "Frontend developer",
      role: ["Frontend developement", "Database operations", "Support tasks"],
    },
  ];

  return (
    <div className="font-extralight text-xs capitalize">
      <section className="mt-4">
        <div className="text-xl font-normal underline mb-6">Education</div>
        <ul className="text-base text-sm">
          {items.map((it, i) => (
            <li
              key={it.range}
              className="grid grid-cols-[140px_1fr] gap-6 mb-4"
            >
              <div className="relative">
                <div className="text-sm text-neutral-300">{it.range}</div>

                {i !== items.length - 1 && (
                  <span className="absolute left-1/4 top-6 bottom-[-8px] w-px bg-white/60" />
                )}
              </div>

              <div className="space-y-1">
                <div className="text-base text-white">{it.school}</div>
                <div className="text-xs italic font-extralight text-gray-300">
                  {it.address}
                </div>
                <div className="text-sm font-extralight italics">
                  {it.subject}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-4">
        <div className="text-xl font-normal underline mb-6">Experience</div>
        <ul className="text-base text-sm">
          {exp.map((it, i) => (
            <li
              key={it.range}
              className="grid grid-cols-[140px_1fr] gap-6 mb-4"
            >
              <div className="relative">
                <div className="text-sm text-neutral-300">{it.range}</div>

                {i !== items.length - 1 && (
                  <span className="absolute left-1/4 top-6 bottom-[-8px] w-px bg-white/60" />
                )}
              </div>

              <div className="space-y-1">
                <div className="text-base text-white">{it.institute}</div>
                <div className="text-xs italic font-extralight text-gray-300">
                  {it.position}
                </div>
                <div className="text-sm font-extralight italics">
                  <ul>
                    {it.role.map((rl) => (
                      <li>{rl}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Experience;
