import styles from "../../app/styles/scroll-down.module.css";
export default function ScrollDown() {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className={`text-lg text-[#6B7280] ${styles["animate-blink"]}`}>
        Scroll down please :)
      </div>
      <div className="w-[3px] h-[30px] px-[10px] py-[15px] border-solid border-2 border-gray-400 rounded-[25px] box-content opacity-75">
        <div className="w-[3px] h-[10px] rounded-[25%] bg-gray-400 animate-[scroll_2.2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}
