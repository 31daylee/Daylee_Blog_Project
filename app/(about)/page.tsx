import Info1 from "../components/info1";
import TopInfo from "../components/top-info";
import Info2 from "../components/info2";
import Skills from "../components/skills";
import SkillsChart from "../components/skill-donut-chart";
import Projects from "../components/projects";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="block w-full max-w-6xl px-6 py-10 mx-auto">
      <TopInfo />
      <Info1 />
      <Info2 />
      <Skills />
      <SkillsChart />
      <Projects />
    </div>
  );
}
