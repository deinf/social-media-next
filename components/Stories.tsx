"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { storiesData } from "@/public/data"; // Adjust path if needed

const Stories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide cursor-grab select-none"
    >
      <div className="flex gap-8 w-max">
        {storiesData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
            <Image
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full ring-2 object-cover"
              width={80}
              height={80}
            />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
