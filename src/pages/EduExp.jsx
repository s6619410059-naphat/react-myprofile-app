import PageLayout from "../components/PageLayout.jsx";

const entries = [
  {
    period: "2022 - Present",
    title: "UI/UX Designer",
    sub: "Fullstack Web Developer",
    place: "Freelance",
  },
  {
    period: "2022 - 2025",
    title: "Computer Engineering",
    place: "Southeast Asia University",
  },
  {
    period: "2019 - 2021",
    title: "High school",
    place: "Natural Science-Mathematics Program",
  },
];

export default function EduExp() {
  return (
    <PageLayout>
      <h2 className="title">
        Education &amp; <span className="accent">Experience</span>
      </h2>
      <ol className="timeline">
        {entries.map((e) => (
          <li key={e.period + e.title}>
            <span className="timeline__period accent">{e.period}</span>
            <h3>{e.title}</h3>
            {e.sub && <h3>{e.sub}</h3>}
            <p className="muted">{e.place}</p>
          </li>
        ))}
      </ol>
    </PageLayout>
  );
}
