"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Python</li>
        <li>Figma</li>
        <li>MySQL</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>React Js</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>BSC in Computer Science and Engineering</strong>
          <br />
          Stamford University Bangladesh
          <br />
          CGPA - 3.20 out of 4.00
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Android App Development</strong>
          <br />
          Govt. ICT Training BD
          <br />
          Year - 2020
        </li>
        <li className="mt-2">
          <strong>Full-Stack Web Development</strong>
          <br />
          Programming Hero Online
          <br />
          Year - 2025
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Senior Executive SEO Support</strong>
          <br />
          Aan-Nahl Software
          <br />
          March 2022 to June 2024
        </li>
        <li className="mt-2">
          <strong>Jr. Software Engineer</strong>
          <br />
          Birds of Eden
          <br />
          July 2024 to Running...
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack web developer with a passion for creating
            interactive, responsive, and dynamic web applications. With
            experience working across the stack, I am proficient in HTML, CSS,
            TailwindCSS, JavaScript, TypeScript, React.js, Next.js, and Python.
            I specialize in building scalable and efficient applications using
            Node.js, Express, MongoDB, MySQL, and PostgreSQL. I also have a
            strong background in SEO and am an expert in Figma for designing
            intuitive user interfaces. As a quick learner and a problem-solver,
            I am always looking to expand my skill set and stay updated with the
            latest trends in the web development world. I am a team player and
            enjoy collaborating with others to bring creative ideas to life and
            build amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
