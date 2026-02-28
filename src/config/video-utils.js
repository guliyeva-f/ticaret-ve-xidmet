import { videoLibrary, ACTIVE_VIDEO } from './video-config'

export const getAllVideos = () => {
  return Object.entries(videoLibrary).map(([key, video]) => ({
    key,
    ...video,
    isActive: key === ACTIVE_VIDEO
  }))
}

export const getVideoByKey = (key) => {
  return videoLibrary[key]
}

export const videoExists = (key) => {
  return key in videoLibrary
}

export const getActiveVideo = () => {
  return {
    key: ACTIVE_VIDEO,
    ...videoLibrary[ACTIVE_VIDEO]
  }
}

export const getVideoPath = (filename) => {
  return `/videos/${filename}`
}

export const validateVideoSpecs = {
  isMP4: (filename) => filename.toLowerCase().endsWith('.mp4'),
  hasValidSize: (sizeInMB) => sizeInMB <= 50,
  hasValidDuration: (durationInSeconds) => durationInSeconds >= 10 && durationInSeconds <= 60,
}

export const listVideos = () => {
  console.log('🎥 Available Videos:')
  getAllVideos().forEach(video => {
    console.log(`${video.isActive ? '▶️' : '⏸️'} ${video.key}: ${video.name} (${video.duration})`)
  })
}