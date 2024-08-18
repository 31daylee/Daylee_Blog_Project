import { useEffect, useState } from "react";
import styles from "../../app/styles/scroll-down.module.css";

export default function ScrollDownArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.scroll} ${visible ? styles.show : ""}`}></div>
  );
}
