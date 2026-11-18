import { useState } from "react";
import PageLayout from "../components/PageLayout.jsx";
import project from "../assets/img1.png"

const projects = [
  {
    name: "Manage Task App - fullstack web development",
    text: "Manage your daily tasks with boards, tags and deadlines. Built with React, Node.js and a REST API, deployed on Vercel.",
    image: project,
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const p = projects[index];

  return (
    <PageLayout>
      <h2 className="title">
        Featured <span className="accent">Projects</span>
      </h2>
      <h4 className="project__name">{p.name}</h4>
      <p className="muted">{p.text}</p>
      <div className="project__shot">
        <img src={p.image} alt={p.name} />
      </div>
      <div className="dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={i === index ? "is-active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </PageLayout>
  );
}
