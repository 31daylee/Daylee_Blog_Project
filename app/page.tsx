import TopInfo from "@/components/TopInfo/top-info";
import Projects from "@/components/projects";
import StickyContainer from "@/components/stickyHeader/sticky-container";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div>
      <BgWhiteContainer>
        <TopInfo />
      </BgWhiteContainer>
    </div>
  );
}

function PaddingContainer({ children }: { children: React.ReactNode }) {
  return <div className="p-[1%] bg-blue-400">{children}</div>;
}
function BgWhiteContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-full flex flex-col bg-white">{children}</div>;
}
function BgBlueContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col bg-blue-600 opacity-[90%] h-[350px]">
      {children}
    </div>
  );
}
