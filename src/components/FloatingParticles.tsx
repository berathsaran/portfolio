import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function FloatingParticles() {
  const { theme } = useTheme()
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationRef = useRef<number>()

  // Initialize particle dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Create particles based on dimensions
  useEffect(() => {
    if (dimensions.width === 0) return

    // Calculate particle count based on screen size (sparse density)
    const particleCount = Math.floor((dimensions.width * dimensions.height) / 15000)
    
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: 2 + Math.random() * 2, // 2-4px
      speedX: (Math.random() - 0.5) * 0.5, // Slow speed
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: 0.12 + Math.random() * 0.13 // 0.1-0.2 opacity
    }))

    setParticles(newParticles)
  }, [dimensions])

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return

    const animate = () => {
      setParticles(prev =>
        prev.map(p => {
          let newX = p.x + p.speedX
          let newY = p.y + p.speedY
          let newSpeedX = p.speedX
          let newSpeedY = p.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            newSpeedX = -p.speedX
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newSpeedY = -p.speedY
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          return {
            ...p,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY
          }
        })
      )
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => animationRef.current && cancelAnimationFrame(animationRef.current)
  }, [particles.length, dimensions])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      >
        {particles.map(particle => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={theme === 'dark' ? 'hsl(198,100%,45%)' : 'hsl(198,100%,35%)'}
            style={{
              opacity: particle.opacity,
              transition: 'opacity 0.5s'
            }}
          />
        ))}
      </svg>
    </div>
  )
}