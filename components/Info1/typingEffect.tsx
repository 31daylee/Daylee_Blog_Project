"use client";
import React, { useEffect, useState } from "react";

type TypingEffectProps = {
  texts: string[];
};

export default function TypingEffect({ texts }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingDelay = 60;
  const deletingDelay = 30;
  const endDelay = 1500;

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer: NodeJS.Timeout;

    const typeChar = () => {
      setDisplayText(currentText.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    };

    const deleteChar = () => {
      setDisplayText(currentText.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    };

    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(typeChar, typingDelay);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(deleteChar, deletingDelay);
    } else if (isDeleting) {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else {
      timer = setTimeout(() => setIsDeleting(true), endDelay);
    }
    return () => clearTimeout(timer);
  }, [texts, textIndex, charIndex, isDeleting]);

  return (
    <div className="h-[25px]">
      {displayText.split("이현정").map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < displayText.split("이현정").length - 1 && (
            <strong>이현정</strong>
          )}
        </React.Fragment>
      ))}
      <span />
    </div>
  );
}
