export const videoLibrary = {
  // 'aarav-investment': {
  //   src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //   name: 'Big Buck Bunny',
  //   description: 'Just a demo video',
  //   duration: '30s',
  // },

  'my-video': {
    src: '/videos/video.mp4',
    name: 'My Custom Video',
    description: 'Description of the video',
    duration: '45s',
  },
}

export const ACTIVE_VIDEO = 'my-video'

export const videoConfig = {
  heroVideo: {
    src: videoLibrary[ACTIVE_VIDEO].src,
    type: 'video/mp4',
    autoplay: true,
    loop: true,
    muted: true, 
    playsInline: true, 
  },
  
  overlay: {
    gradient: 'from-black/40 via-transparent to-black/60',
    showControls: true, 
  }
}

export const getCurrentVideoInfo = () => videoLibrary[ACTIVE_VIDEO]