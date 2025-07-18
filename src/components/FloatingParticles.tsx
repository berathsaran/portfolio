import { useEffect, useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  direction: number
}

export function FloatingParticles() {
  const { theme } = useTheme()
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Initialize particles
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
      opacity: 0.1 + Math.random() * 0.1, // 0.1-0.2 opacity
      direction: Math.random() * Math.PI * 2
    }))

    setParticles(newParticles)
  }, [dimensions])

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY
          let newSpeedX = particle.speedX
          let newSpeedY = particle.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            newSpeedX = -particle.speedX
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newSpeedY = -particle.speedY
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          // Subtle opacity animation
          const time = Date.now() * 0.001
          const baseOpacity = 0.1 + Math.random() * 0.1
          const opacityVariation = Math.sin(time + particle.id) * 0.05
          const newOpacity = Math.max(0.05, Math.min(0.25, baseOpacity + opacityVariation))

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            opacity: newOpacity
          }
        })
      )
    }

    const interval = setInterval(animateParticles, 50) // 20fps for smooth but not intensive animation
    return () => clearInterval(interval)
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
            className={theme === 'dark' ? 'fill-primary-glow' : 'fill-primary'}
            style={{
              opacity: particle.opacity,
              filter: theme === 'dark' 
                ? 'drop-shadow(0 0 2px hsl(var(--primary-glow) / 0.3))' 
                : 'none'
            }}
          >
            {/* Gentle pulsing animation */}
            <animate
              attributeName="r"
              values={`${particle.size};${particle.size * 1.2};${particle.size}`}
              dur={`${3 + Math.random() * 2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
              dur={`${4 + Math.random() * 3}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}