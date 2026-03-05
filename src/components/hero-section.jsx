'use client'

import { useState, useEffect } from 'react'
import { videoConfig, getCurrentVideoInfo } from '../config/video-config'
import RotatingText from './RotatingText';

const professions = [
    "Aşpaz",
    "Qənnadçı",
    "Qrafik dizayner",
    "Moda dizayneri",
    "Bərbər-vizajist",
    "Manikür ustası",
    "Turizm təşkilatçısı",
    "Turizm sahəsində işçi",
    "Mühasib",
    "Kompüter operatoru",
    "Telekommunikasiya texniki",
    "Veb proqramçı"
];

const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
)

const PauseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
)

const VolumeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
)

const VolumeOffIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
)

export default function HeroSection() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)

    const togglePlayPause = () => {
        const video = document.getElementById('hero-video')
        if (video) {
            if (isPlaying) {
                video.pause()
            } else {
                video.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        const video = document.getElementById('hero-video')
        if (video) {
            video.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    useEffect(() => {
        const video = document.getElementById('hero-video')
        if (video) {
            video.muted = true
            video.playsInline = true
            const playPromise = video.play()
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log('Autoplay failed (normal on mobile):', error)
                    setIsPlaying(false)
                })
            }
        }
    }, [])

    return (
        <section className="relative h-[calc(100vh-90px)] sm:h-[calc(100vh-100px)] md:h-[calc(100vh-105px)] lg:h-[calc(100vh-110px)] overflow-hidden top-[90px] sm:top-[100px] md:top-[105px] lg:top-[110px]">
            {/* Video Background */}
            <video
                id="hero-video"
                autoPlay={videoConfig.heroVideo.autoplay}
                muted={videoConfig.heroVideo.muted}
                loop={videoConfig.heroVideo.loop}
                playsInline={videoConfig.heroVideo.playsInline}
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={videoConfig.heroVideo.src} type={videoConfig.heroVideo.type} />
            </video>

            <div className={`absolute inset-0 bg-linear-to-br z-10 ${videoConfig.overlay.gradient}`}></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
                <h1 className="text-5xl md:text-7xl text-shadow-lg font-bold text-white mb-6 leading-tight">
                    Gələcəyini peşə ilə qur:
                </h1>

                <div className="flex items-center gap-3 text-4xl md:text-6xl font-bold">
                    <RotatingText
                        texts={professions}
                        mainClassName="px-2 md:px-3 bg-my-bg text-[#40294a] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-130%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-3 pt-1"
                        transition={{ type: "spring", damping: 50, stiffness: 400 }}
                        rotationInterval={3000}
                        loop={true}
                        auto={true}
                    />
                    <span>ol!</span>
                </div>
            </div>

            {/* Video Controls */}
            {videoConfig.overlay.showControls && (
                <div className="absolute bottom-8 right-8 z-30 flex gap-3">
                    <button
                        onClick={togglePlayPause}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform border border-white/30"
                    >{isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 transform border border-white/30"
                    > {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
                    </button>
                </div>
            )}

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}