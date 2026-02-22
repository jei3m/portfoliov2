'use client'; // Add this directive at the top of the file

import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface ScrollLinkProps {
  id: string; // The ID of the element to scroll to
  children: ReactNode; // The content inside the link
}

function ScrollLink({ id, children }: ScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Find the element by ID
    const element = document.getElementById(id);
    if (element) {
      // Get the computed scroll-margin-top value
      const scrollMarginTop =
        window.getComputedStyle(element).scrollMarginTop;

      // Convert scroll-margin-top to a number (e.g., "28px" -> 28)
      const scrollMarginTopValue =
        parseFloat(scrollMarginTop);

      // Calculate the target position with scroll-margin-top
      const targetPosition =
        element.offsetTop - scrollMarginTopValue;

      // Custom smooth scroll function
      smoothScrollTo(targetPosition, 1000); // 1000ms = 1 second duration
    }
  };

  // Custom smooth scroll function
  const smoothScrollTo = (
    targetPosition: number,
    duration: number
  ) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration)
        requestAnimationFrame(animation);
    };

    // Easing function for smooth acceleration and deceleration
    const easeInOutQuad = (
      t: number,
      b: number,
      c: number,
      d: number
    ) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <Link href={`#${id}`} passHref>
      <div onClick={handleClick}>{children}</div>
    </Link>
  );
}

export default ScrollLink;
