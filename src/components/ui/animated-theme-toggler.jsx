"use client";
import { useCallback, useRef, useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}) => {
  const { resolvedTheme, setTheme } = useTheme()
  const buttonRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const isDark = resolvedTheme === "dark"
  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return
    const applyTheme = () => {
      setTheme(isDark ? "light" : "dark")
    }
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document)
    ) {
      applyTheme()
      return
    }
    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })
    const ready = transition?.ready
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        const button = buttonRef.current
        if (!button) return
        const { top, left, width, height } =
          button.getBoundingClientRect()
        const x = left + width / 2
        const y = top + height / 2
        const maxRadius = Math.hypot(
          Math.max(left, window.innerWidth - left),
          Math.max(top, window.innerHeight - top)
        )
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
    }
  }, [isDark, duration, setTheme])
  if (!mounted) return null
  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >{isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}