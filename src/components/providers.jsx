"use client"
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from '@/components/theme-provider'

export function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ParallaxProvider>
                {children}
            </ParallaxProvider>
        </ThemeProvider>
    )
}