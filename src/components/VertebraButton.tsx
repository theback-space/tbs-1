import { useState } from 'react'

interface VertebraButtonProps {
  id: string
  label: string
  isSelected: boolean
  onToggle: (id: string) => void
  region: 'cervical' | 'thoracic' | 'lumbar' | 'sacral' | 'coccygeal'
  yPosition: number
  width: number
  height: number
  curveOffset: number
  isSacrum?: boolean
  isCoccyx?: boolean
}

export function VertebraButton({ 
  id, 
  label, 
  isSelected, 
  onToggle, 
  yPosition, 
  width, 
  height, 
  curveOffset,
  isSacrum = false,
  isCoccyx = false
}: VertebraButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const centerX = 150
  const x = centerX - width / 2 + curveOffset
  
  const getVertebraPath = () => {
    if (isSacrum) {
      return `
        M ${x + width * 0.2} ${yPosition}
        Q ${x} ${yPosition + height * 0.3} ${x + width * 0.1} ${yPosition + height * 0.7}
        L ${x + width * 0.15} ${yPosition + height}
        L ${x + width * 0.85} ${yPosition + height}
        L ${x + width * 0.9} ${yPosition + height * 0.7}
        Q ${x + width} ${yPosition + height * 0.3} ${x + width * 0.8} ${yPosition}
        Z
      `
    }
    
    if (isCoccyx) {
      return `
        M ${x + width * 0.3} ${yPosition}
        Q ${x + width * 0.2} ${yPosition + height * 0.5} ${x + width * 0.35} ${yPosition + height}
        L ${x + width * 0.65} ${yPosition + height}
        Q ${x + width * 0.8} ${yPosition + height * 0.5} ${x + width * 0.7} ${yPosition}
        Z
      `
    }
    
    const bodyWidth = width * 0.55
    const bodyHeight = height * 0.5
    const bodyX = x + (width - bodyWidth) / 2
    const bodyY = yPosition
    
    const processWidth = width * 0.18
    const processHeight = height * 0.45
    const leftProcessX = x + width * 0.12
    const rightProcessX = x + width * 0.7
    const processY = yPosition + height * 0.15
    
    const spinalCanalWidth = bodyWidth * 0.35
    const spinalCanalHeight = bodyHeight * 0.6
    const canalX = bodyX + (bodyWidth - spinalCanalWidth) / 2
    const canalY = bodyY + bodyHeight * 0.2
    
    return `
      M ${bodyX + bodyWidth * 0.15} ${bodyY}
      Q ${bodyX} ${bodyY} ${bodyX} ${bodyY + bodyHeight * 0.3}
      L ${bodyX} ${bodyY + bodyHeight * 0.7}
      Q ${bodyX} ${bodyY + bodyHeight} ${bodyX + bodyWidth * 0.15} ${bodyY + bodyHeight}
      L ${bodyX + bodyWidth * 0.85} ${bodyY + bodyHeight}
      Q ${bodyX + bodyWidth} ${bodyY + bodyHeight} ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.7}
      L ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.3}
      Q ${bodyX + bodyWidth} ${bodyY} ${bodyX + bodyWidth * 0.85} ${bodyY}
      Z
      
      M ${leftProcessX} ${processY}
      L ${leftProcessX + processWidth * 0.3} ${processY}
      L ${leftProcessX + processWidth} ${processY + processHeight * 0.5}
      L ${leftProcessX + processWidth * 0.3} ${processY + processHeight}
      L ${leftProcessX} ${processY + processHeight}
      Z
      
      M ${rightProcessX} ${processY}
      L ${rightProcessX + processWidth * 0.7} ${processY}
      L ${rightProcessX + processWidth} ${processY + processHeight}
      L ${rightProcessX + processWidth * 0.7} ${processY + processHeight}
      L ${rightProcessX} ${processY + processHeight * 0.5}
      Z
      
      M ${canalX} ${canalY}
      Q ${canalX - spinalCanalWidth * 0.1} ${canalY + spinalCanalHeight * 0.5} ${canalX} ${canalY + spinalCanalHeight}
      L ${canalX + spinalCanalWidth} ${canalY + spinalCanalHeight}
      Q ${canalX + spinalCanalWidth * 1.1} ${canalY + spinalCanalHeight * 0.5} ${canalX + spinalCanalWidth} ${canalY}
      Z
    `
  }
  
  return (
    <g
      onClick={() => onToggle(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
      className="transition-all duration-150"
    >
      <path
        d={getVertebraPath()}
        fill={isSelected ? 'url(#subluxationGradient)' : 'url(#boneGradient)'}
        stroke={isSelected ? 'oklch(0.45 0.22 25)' : isHovered ? 'oklch(0.6 0.03 70)' : 'oklch(0.75 0.025 65)'}
        strokeWidth={isHovered ? 2.5 : 2}
        className="transition-all duration-150"
        style={{
          filter: isHovered ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))' : 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: `${centerX}px ${yPosition + height/2}px`
        }}
      />
      
      <text
        x={centerX}
        y={yPosition + height / 2 + (isCoccyx ? 3 : 4)}
        textAnchor="middle"
        className="pointer-events-none select-none font-bold uppercase"
        style={{
          fontSize: isCoccyx ? '9px' : isSacrum ? '10px' : '11px',
          fill: isSelected ? 'white' : 'oklch(0.3 0.015 70)',
          letterSpacing: '0.5px'
        }}
      >
        {label}
      </text>
    </g>
  )
}
