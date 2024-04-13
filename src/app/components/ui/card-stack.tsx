"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  company?: string;
  role?: string;
};

interface CardStackProps {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  flipInterval?: number;
}

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  flipInterval = 5000,
}: CardStackProps) => {
  const [cards, setCards] = useState<Card[]>(items);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const startFlipping = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, flipInterval);
  }, [flipInterval]);

  const stopFlipping = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (!hovering) {
      startFlipping();
    } else {
      stopFlipping();
    }

    return () => stopFlipping();
  }, [hovering, startFlipping, stopFlipping]);

  return (
    <div className="relative md:h-96 h-[500px] w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white md:h-96 h-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
          role="presentation"
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <div className="text-neutral-500 font-medium dark:text-white flex gap-2">
              {card.name}{" "}
              <Link href={card.designation}>
                <SiLinkedin className="inline-block w-5 h-5" />
              </Link>
            </div>
            <div className="text-neutral-500 dark:text-white">
              {card.company} - {card.role}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
