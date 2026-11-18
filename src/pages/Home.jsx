import PageLayout from "../components/PageLayout.jsx";
import { profile, lorem } from "../data/profile.js";

export default function Home() {
  return (
    <PageLayout>
      <p className="eyebrow">
        Lets Work <span className="accent">Together !</span>
      </p>
      <h1 className="headline">
        Hi From <span className="accent">{profile.firstName} ,</span> Interactive Designer &amp;
        Fullstack Web Developer
      </h1>
      <p className="muted">{lorem}</p>
      <div className="stats">
        <div className="stat">
          <strong>
            3<span className="accent">+</span>
          </strong>
          <small>
            Years of
            <br />
            Experience
          </small>
        </div>
        <div className="stat">
          <strong>
            10<span className="accent">+</span>
          </strong>
          <small>
            Projects
            <br />
            Completed
          </small>
        </div>
      </div>
    </PageLayout>
  );
}
