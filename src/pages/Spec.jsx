import { FiArrowUpRight } from "react-icons/fi";
import PageLayout from "../components/PageLayout.jsx";

const specs = [
  {
    title: "Front-end developer",
    text: "Build fast, responsive and accessible interfaces with React, modern CSS and clean component architecture.",
  },
  {
    title: "UX/UI Designer",
    text: "Design intuitive user flows, wireframes and high-fidelity prototypes in Figma that feel great to use.",
  },
  {
    title: "Graphic designer",
    text: "Create brand visuals, illustrations and layouts that communicate ideas clearly and beautifully.",
  },
];

export default function Spec() {
  return (
    <PageLayout>
      <h2 className="title">
        My <span className="accent">Specializations</span>
      </h2>
      <div className="speclist">
        {specs.map((s) => (
          <article className="speccard" key={s.title}>
            <h3>{s.title}</h3>
            <p className="muted">{s.text}</p>
            <FiArrowUpRight className="speccard__arrow" />
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
