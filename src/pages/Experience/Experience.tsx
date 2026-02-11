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
      range: "2023-2023",
      institute: "Green Woods Digital",
      position: "Intern Software Developer",
      role: [
        "Developed and maintained responsive web applications",
        "Assisted in building RESTful APIs and integrating frontend with backend services",
        "Debugged and resolved UI/UX issues across multiple browsers",
        "Wrote clean and maintainable code following best practices",
      ],
    },
    {
      range: "2024-2025",
      institute: "Salesian college, siliguri campus",
      position: "Frontend developer",
      role: [
        "Contributed to frontend development of the college ERP system using Angular",
        "Built and maintained reusable UI components",
        "Integrated frontend features with backend APIs under senior guidance",
        "Fixed bugs and improved existing ERP modules",
        "Performed database-related operations on production MySQL server",
        "Provided technical support to faculty and administrative staff",
      ],
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
              className="grid grid-cols-[140px_1fr] gap-6 mb-8"
            >
              <div className="relative">
                <div className="text-sm text-blue-300">{it.range}</div>

                {i !== items.length - 1 && (
                  <span className="absolute left-2/6 top-6 bottom-[-28px] w-px bg-white/60" />
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
      <section className="mt-8">
        <div className="text-xl font-normal underline mb-6">Experience</div>
        <ul className="text-base text-sm">
          {exp.map((it, i) => (
            <li
              key={it.range}
              className="grid grid-cols-[140px_1fr] gap-6 mb-8"
            >
              <div className="relative">
                <div className="text-sm text-green-300">[{it.range}]</div>

                {i !== exp.length - 1 && (
                  <span className="absolute left-2/6 top-6 bottom-[-28px] w-px bg-white/60" />
                )}
              </div>

              <div className="space-y-1">
                <div className="text-base text-white">{it.institute}</div>
                <div className="text-xs italic font-extralight text-gray-300">
                  {it.position}
                </div>
                <div className="text-sm font-extralight italics">
                  <ul className="list-disc ml-4">
                    {it.role.map((rl) => (
                      <li key={rl.slice(0, 20)}>{rl}</li>
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
