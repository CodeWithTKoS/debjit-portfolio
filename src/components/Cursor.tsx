import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const cursorLoop = () => {
      if (!hover) {
        const delay = 8;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`;
      }
      requestAnimationFrame(cursorLoop);
    };
    cursorLoop();

    const mouseHandler = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    document.addEventListener("mousemove", mouseHandler);

    const hoverHandler = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      if (target.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        cursor.style.transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`;
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      } else if (target.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const outHandler = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", hoverHandler);
      element.addEventListener("mouseout", outHandler);
    });

    return () => {
      document.removeEventListener("mousemove", mouseHandler);
      document.querySelectorAll("[data-cursor]").forEach((item) => {
        const element = item as HTMLElement;
        element.removeEventListener("mouseover", hoverHandler);
        element.removeEventListener("mouseout", outHandler);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
