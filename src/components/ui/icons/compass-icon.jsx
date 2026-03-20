"use client";;
import { cn } from "@/lib/utils";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const CompassIcon = forwardRef((
 {
  onMouseEnter,
  onMouseLeave,
  className,
  size = 40,
  duration = 1,
  isAnimated = true,
  ...props
 },
 ref,
) => {
 const controls = useAnimation();
 const reduced = useReducedMotion();
 const isControlled = useRef(false);

 useImperativeHandle(ref, () => {
  isControlled.current = true;
  return {
   startAnimation: () =>
    reduced ? controls.start("normal") : controls.start("animate"),
   stopAnimation: () => controls.start("normal"),
  };
 });

 const handleEnter = useCallback((e) => {
  if (!isAnimated || reduced) return;
  if (!isControlled.current) controls.start("animate");
  else onMouseEnter?.(e);
 }, [controls, reduced, isAnimated, onMouseEnter]);

 const handleLeave = useCallback((e) => {
  if (!isControlled.current) controls.start("normal");
  else onMouseLeave?.(e);
 }, [controls, onMouseLeave]);

 const circleVariants = {
  normal: { scale: 1 },
  animate: {
   scale: [1, 1.05, 0.98, 1],
   transition: { duration: 0.9 * duration, ease: "easeInOut" },
  },
 };

 const needleVariants = {
  normal: {
   rotate: 0,
   opacity: 1,
  },
  animate: {
   rotate: [0, 200, 170, 180],
   opacity: [0.9, 1],
   transition: {
    duration: 1 * duration,
    ease: "easeInOut",
   },
  },
 };

 return (
  <motion.div
   className={cn("inline-flex items-center justify-center", className)}
   animate={controls}
   {...props}>
   <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    animate={controls}
    initial="normal"
    variants={circleVariants}>
    <motion.path
     d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
     variants={needleVariants}
     style={{
      transformBox: "fill-box",
      transformOrigin: "center",
     }} />

    <motion.circle cx="12" cy="12" r="10" variants={circleVariants} initial="normal" />
   </motion.svg>
  </motion.div>
 );
});

CompassIcon.displayName = "CompassIcon";
export { CompassIcon };
