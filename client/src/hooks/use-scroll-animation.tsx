import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: options.threshold || 0.1,
    once: options.once !== false,
    margin: options.margin || "0px 0px -100px 0px"
  });

  return { ref, isInView };
}

export function useStaggeredAnimation(count: number, delay: number = 0.1) {
  return Array.from({ length: count }, (_, i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }));
}
