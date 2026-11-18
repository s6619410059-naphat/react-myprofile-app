import MyCard from "./MyCard.jsx";
import SideMenu from "./SideMenu.jsx";

export default function PageLayout({ children, narrow = false }) {
  return (
    <main className="stage">
      <div className="frame">
        <MyCard />
        <section className={"content" + (narrow ? " content--narrow" : "")}>{children}</section>
        <SideMenu />
      </div>
    </main>
  );
}
