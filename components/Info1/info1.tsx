"use client";
import { Noto_Sans_KR } from "next/font/google";
import TypingEffect from "./typingEffect";
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export default function Introduction() {
  return (
    <div className={notoSansKr.className}>
      <div className="p-10">
        <div className="bg-blue-300 bg-opacity-10 p-[20px] rounded-md my-[15px] py-[30px]">
          <div className="flex w-full border-b-2 border-[#ffffff] pb-3">
            <div className="grow basis-0 text-2xl">
              <TypingEffect
                texts={["안녕하세요", "풀스택 개발자 이현정 입니다."]}
              />
            </div>
          </div>
          <div className="flex flex-col items-end pt-3">
            <p>
              저는 코드의 가독성과 효율성을 중시하며 협엽 시 적극적인
              커뮤니케이션을 통해 팀의 목표를 함께 달성해 나가고 있습니다.
            </p>
            <p>
              프론트엔드와 백엔드에서의 기술적 역량으로 직관적이고 매력적인 웹
              애플리케이션을 개발합니다.
            </p>
            <p>
              사용자에게 최상의 경험을 제공하고자 하는 팀과 함께 혁신적인
              솔루션을 만들어 나가기를 기대합니다!
            </p>
            <p>함께 성장하며 프로젝트를 성공적으로 완성하기를 바랍니다 😊</p>
          </div>
        </div>
      </div>
    </div>
  );
}
