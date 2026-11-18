import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa6";
import { profile } from "../data/profile.js";

const socials = [
  { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: FaXTwitter, label: "X", href: "https://x.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaGoogle, label: "Google", href: "https://google.com" },
];

export default function MyCard() {
  return (
    <aside className="mycard">
      <div className="mycard__brand">
        <span>N</span>
        {profile.firstName.slice(1)}
      </div>
      <img className="mycard__photo" src={profile.avatar} alt={profile.firstName} />
      <div className="mycard__id">STU ID: {profile.studentId}</div>
      <div className="mycard__role">{profile.role}</div>
      <div className="mycard__socials">
        {socials.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
      <Link className="btn btn--block" to="/contactme">
        HIRE ME !
      </Link>
    </aside>
  );
}
