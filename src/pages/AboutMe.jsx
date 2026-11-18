import PageLayout from "../components/PageLayout.jsx";
import { lorem } from "../data/profile.js";

export default function AboutMe() {
  return (
    <PageLayout>
      <h2 className="title">
        About <span className="accent">Me</span>
      </h2>
      <h1 className="headline">
        I find fulfillment in blending visual design with the power of coding to create meaningful
        experiences.
      </h1>
      <p className="muted">{lorem}</p>
      <p className="muted">{lorem}</p>
    </PageLayout>
  );
}
