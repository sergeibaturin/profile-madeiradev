import React from 'react'
import { Box } from '@mui/material'
import videoSrc from '../../assets/Identica.mp4'

interface BgrProps {
  overlayColor?: string
  overlayOpacity?: number
  showDots?: boolean
  dotColor?: string
  dotSize?: number
  dotGap?: number
  children?: React.ReactNode
  blur?: number
}

export const Bgr: React.FC<BgrProps> = ({
  overlayColor = '#000',
  overlayOpacity = 0.5,
  showDots = false,
  dotColor = 'rgba(255, 255, 255, 0.2)',
  dotSize = 1,
  dotGap = 4,
  children,
  blur = 0,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        minHeight: 'inherit',
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src={videoSrc}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: `blur(${blur}px)`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
          zIndex: 1,
        }}
      />

      {showDots && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent 0)`,
            backgroundSize: `${dotGap}px ${dotGap}px`,
            zIndex: 2,
          }}
        />
      )}

      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
