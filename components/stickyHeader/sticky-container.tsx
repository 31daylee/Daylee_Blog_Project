import Info2 from "@/components/info2/info2";
import Info1 from "@/components/Info1/info1";

export default function StickyContainer() {
  return (
    <section className={"w-full border-t-2 border-[#004aad]"}>
      <StickyContent title="WHO AM I">
        <div>
          <Info1 />
        </div>
        <div>
          <Info2 />
        </div>
      </StickyContent>
      <StickyContent title="HOW I WORK">
        <div className={"flex gap-x-10 border-t-2 border-[#004aad]"}>
          <div className="order-last flex justify-center items-center text-[3rem]">
            Test
          </div>
          <div className="">
            <h1>Test content</h1>
            <div className="whitespace-pre">
              Test1
              <br />
              Test2
              <br />
              Test3
              <br />
            </div>
          </div>
        </div>
      </StickyContent>
      <StickyContent title="CERTIFICATION">
        <div className={"flex gap-x-10 border-t-2 border-[#004aad]"}>
          <div>2</div>
          <div>1</div>
          <div>3</div>
        </div>
      </StickyContent>
      <StickyContent title="SKILLS">
        <div className={"flex gap-x-10 border-t-2 border-[#004aad]"}>
          <div>2</div>
          <div>1</div>
          <div>3</div>
        </div>
      </StickyContent>
    </section>
  );
}

function StickyContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative flex justify-start items-start pb-[160px]`}>
      <div className={`sticky top-0 h-[160px]`}>
        <div
          className={`transform rotate-90 w-[320px] h-[320px] flex justify-center items-center text-5xl font-semibold text-[#004aad]`}
        >
          {title}
        </div>
      </div>
      <div
        className={`absolute left-[320px] top-0 w-[1.8px] bg-[#004aad] h-full`}
      ></div>
      <div className="grow basis-0 px-auto min-h-[100px] text-black">
        {children}
      </div>
    </div>
  );
}
