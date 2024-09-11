interface Props {
  children: React.ReactNode;
}

export default function StickyContainer({ children }: Props) {
  return (
    <section className={"w-full"}>
      <StickyContent title="test1">
        <div className={"flex gap-x-10"}>
          <div>2</div>
          <div>1</div>
          <div>3</div>
        </div>
      </StickyContent>
      <StickyContent title="test2">
        <div className={"flex gap-x-3"}>
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
  const titleSize = 100;
  return (
    <div
      className={`relative flex justify-start items-start pb-[${titleSize}px]`}
    >
      <div className={`sticky top-0 h-[${titleSize}px]`}>
        <div
          className={`transform rotate-90 w-[${titleSize * 2}px] h-[${
            titleSize * 2
          }px] flex justify-center items-center bg-slate-300 text-[3rem]`}
        >
          {title}
        </div>
      </div>
      <div
        className={`absolute left-[${
          2 * titleSize
        }px] top-0 w-[1px] bg-[#004aad] h-full`}
      ></div>
      <div className="grow basis-0 px-auto bg-slate-600 min-h-[600px] text-white">
        {children}
      </div>
    </div>
  );
}
