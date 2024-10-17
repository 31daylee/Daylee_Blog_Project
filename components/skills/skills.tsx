"use client";
import { Noto_Sans_KR } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export default function Skills() {
  const imageNames = [
    'java_logo.png',
    'spring_logo.png',
    'nextjs_logo.png',
    'html_logo.png',
    'mysql_logo.png',
    'servicenow_logo.png',
    'github_logo.png',
    'aws_logo.png',
    'jira_logo.png',
  ];

  const images = imageNames
    .filter(name => name.endsWith('_logo.png'))
    .map(name => `/img/${name}`);

  const [hoveredLevel, setHoveredLevel] = useState<'Advanced' | 'Intermediate' | 'Beginner' | ''>('');

  const handleMouseEnter = (level: 'Advanced' | 'Intermediate' | 'Beginner') => {
    setHoveredLevel(level);
  };

  const handleMouseLeave = () => {
    setHoveredLevel('');
  };

  const levelImages: Record<'Advanced' | 'Intermediate' | 'Beginner', string[]> = {
    Advanced: ['java_logo.png', 'servicenow_logo.png','github_logo.png'],
    Intermediate: ['spring_logo.png', 'nextjs_logo.png','html_logo.png','mysql_logo.png','jira_logo.png'],
    Beginner: ['aws_logo.png'],
  };

  return (
    <div className="container mx-auto mb-20">
      <h1 className="block antialiased tracking-normal text-5xl font-semibold leading-tight mb-4 p-10">
        Technical Skills
        <p className="block antialiased text-xl font-normal leading-relaxed text-inherit mx-auto !text-gray-500">
          Here are some tech skills categorized by expertise:
          <span 
            className="cursor-pointer text-blue-500 hover:underline ml-2" 
            onMouseEnter={() => handleMouseEnter('Advanced')}
            onMouseLeave={handleMouseLeave}
          >
            Advanced
          </span>, 
          <span 
            className="cursor-pointer text-blue-500 hover:underline ml-2" 
            onMouseEnter={() => handleMouseEnter('Intermediate')}
            onMouseLeave={handleMouseLeave}
          >
            Intermediate
          </span>, 
          <span 
            className="cursor-pointer text-blue-500 hover:underline ml-2" 
            onMouseEnter={() => handleMouseEnter('Beginner')}
            onMouseLeave={handleMouseLeave}
          >
            Beginner
          </span>.
        </p>
      </h1>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {images.map((src, index) => {
          const logoName = src.split('/').pop() || ''; 
          const isHovered = hoveredLevel && levelImages[hoveredLevel].includes(logoName);

          return (
            <div key={index} className="flex justify-center items-center">
              <Image 
                src={src} 
                alt={`Image ${index + 1}`} 
                width={150} 
                height={150} 
                className={`transition-transform duration-300 filter ${isHovered ? 'grayscale-0 scale-105' : 'grayscale'}`}
              />
            </div>
          );
        })}
      
      </div>
      <h1 className="block antialiased tracking-normal text-5xl font-semibold leading-tight mb-4 p-10 mt-8">
          Soft Skills
          <div className={notoSansKr.className}>
            <ul className="block antialiased text-xl font-normal leading-relaxed text-inherit mx-auto !text-gray-500 list-disc pl-5 leading-10">
              <li className="group font-semibold">
                Problem-solving
                <p className="text-gray-500 text-lg font-normal group-hover:text-blue-500">발견된 버그에 대해 해결할 수 있는 능력을 갖췄습니다. 한국어와 영어를 이용한 구글링으로 좀 더 빠르고 똑똑하게 정보를 습득합니다.</p>
              </li>
              <li className="group font-semibold">
                Communication
                <p className="text-gray-500 text-lg font-normal group-hover:text-blue-500">개발자는 컴퓨터와 소통뿐만 아니라 협업 개발자들과의 소통도 원활하게 이루어져야 한다고 생각합니다. 대학시절부터 4년 동안 총 11 곳의 서비스직을 경험하면서 의사소통의 힘을 길렀습니다.</p>
              </li>
              <li className="group font-semibold">
                Project management
                <p className="text-gray-500 text-lg font-normal group-hover:text-blue-500">매 프로젝트마다 비즈니스 요구사항을 고려하여 우선순위를 정합니다. 이를 토대로 점진적으로 개발하며, 이 과정 중 등장하는 새로운 기술을 개인 Notion에 매일 정리합니다. 또한 프로젝트 진행사항을 모니터링 할 수 있는 Spreadsheet를 작성하여 팀 전체의 작업 능률을 높이는데 도움을 줍니다.</p>
              </li>
              <li className="group font-semibold">
                Attention to detail
                <p className="text-gray-500 text-lg font-normal group-hover:text-blue-500">작업에 있어 놓치기 쉬운 부분도 잘 캐치하는 편입니다. 동료들로부터 꼼꼼하단 소리를 자주 듣고, 종종 동료 테스트(Peer Testing)를 해주곤 합니다.</p>
              </li>
              <li className="group font-semibold">
                Critical thinking
                <p className="text-gray-500 text-lg font-normal group-hover:text-blue-500">개발 과정에서 발생할 수 있는 다양한 문제와 Side Effect를 신속하게 식별하고, 여러 대안 중에서 최적의 해결책을 찾아 적용하려고 노력합니다.</p>
              </li>
            </ul>
          </div>    
      </h1>
    </div>
  );
}
