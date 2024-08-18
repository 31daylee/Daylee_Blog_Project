import { Suspense } from "react";
import Info1 from "@/components/Info1/info1";
import TopInfo from "@/components/TopInfo/top-info";
import Info2 from "@/components/info2/info2";
import Skills from "@/components/skills/skills";
import SkillsChart from "@/components/skills/skill-donut-chart";
import Projects from "@/components/projects";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="w-full flex flex-col">
      <MarginContainer>
        <TopInfo />
      </MarginContainer>
      <Suspense fallback={"<div>...</div>"}>
        <Info1 />
      </Suspense>
      <MarginContainer>
        <Info2 />
      </MarginContainer>
      <BgWhiteContainer>
        <Skills />
        <Projects />
      </BgWhiteContainer>
      <BgBlueContainer>
        <div>test</div>
      </BgBlueContainer>
    </div>
  );
}

function MarginContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-6xl px-6 py-10 mx-auto">{children}</div>;
}
function BgWhiteContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col bg-white opacity-[90%] ">
      {children}
    </div>
  );
}
function BgBlueContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col bg-[#004aad] opacity-[90%]">
      {children}
    </div>
  );
}
