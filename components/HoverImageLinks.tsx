'use client';

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="max-w-6xl min-h-screen">
      <div className="mx-auto">
        <h2 className='title text-4xl font-semibold border-b-2 border-neutral-700 pb-4'>Featured Projects.</h2>
        <Projects
          heading="AI-Ponics"
          subheading="Learn what we do here"
          imgSrc="/img/aiponics2.png"
          href="#"
        />
        <Projects
          heading="AI-Ponics"
          subheading="Learn what we do here"
          imgSrc="/img/aiponics2.png"
          href="#"
        />
        <Projects
          heading="AI-Ponics"
          subheading="Learn what we do here"
          imgSrc="/img/aiponics2.png"
          href="#"
        />
        <button className="mt-8 flex mx-auto">
          <a href="/projects" className="text-4xl font-normal text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200">
            View All...
          </a>
        </button>
      </div>
    </section>
  );
};

interface ProjectsProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Projects = ({ heading, imgSrc, subheading, href }: ProjectsProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-normal text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-4xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "0" },
          whileHover: { scale: 0.4, rotate: "0" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 rounded-lg object-cover"
        alt={`Image representing a link for ${heading}`}
      />

      <div className="relative z-10 p-4">
        <FiArrowRight className="text-5xl text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50" />
      </div>
    </motion.a>
  );
};