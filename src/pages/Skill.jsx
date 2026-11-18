import { FaReact, FaHtml5, FaGithub } from "react-icons/fa6";
import { SiFigma, SiNextdotjs, SiJavascript } from "react-icons/si";
import PageLayout from "../components/PageLayout.jsx";

const skills = [
  { name: "React", icon: FaReact, level: 80 },
  { name: "Figma", icon: SiFigma, level: 90 },
  { name: "HTML&CSS", icon: FaHtml5, level: 90 },
  { name: "NextJs", icon: SiNextdotjs, level: 70 },
  { name: "JavaScript", icon: SiJavascript, level: 80 },
  { name: "GitHub", icon: FaGithub, level: 80 },
];

export default function Skill() {
  return (
    <PageLayout>
      <h2 className="title">
        My <span className="accent">Skills</span>
      </h2>
      <div className="skills">
        {skills.map(({ name, icon: Icon, level }) => (
          <div className="skill" key={name}>
            <div className="skill__pill">
              <Icon />
              <span>{level}%</span>
            </div>
            <small>{name}</small>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
