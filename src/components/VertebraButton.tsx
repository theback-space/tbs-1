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
}

export function VertebraButton({ 
  id, 
  label, 
  isSelected, 
  onToggle, 
  region,
  yPosition, 
  width, 
  height, 
  curveOffset
}: VertebraButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const centerX = 175
  const x = centerX - width / 2 + curveOffset
  
  const getVertebraPath = () => {
    if (region === 'sacral') {
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
    
    if (region === 'coccygeal') {
      return `
        M ${x + width * 0.3} ${yPosition}
        Q ${x + width * 0.2} ${yPosition + height * 0.5} ${x + width * 0.35} ${yPosition + height}
        L ${x + width * 0.65} ${yPosition + height}
        Q ${x + width * 0.8} ${yPosition + height * 0.5} ${x + width * 0.7} ${yPosition}
        Z
      `
    }
    
    if (region === 'cervical') {
      const bodyWidth = width * 0.45
      const bodyHeight = height * 0.85
      const bodyX = x + (width - bodyWidth) / 2
      const bodyY = yPosition
      
      const processWidth = width * 0.22
      const processHeight = height * 0.55
      const leftProcessX = x + width * 0.08
      const rightProcessX = x + width * 0.7
      const processY = yPosition + height * 0.25
      
      const spinalCanalWidth = bodyWidth * 0.45
      const spinalCanalHeight = bodyHeight * 0.4
      const canalX = bodyX + (bodyWidth - spinalCanalWidth) / 2
      const canalY = bodyY + bodyHeight * 0.3
      
      return `
        M ${bodyX + bodyWidth * 0.2} ${bodyY}
        Q ${bodyX} ${bodyY + bodyHeight * 0.1} ${bodyX} ${bodyY + bodyHeight * 0.4}
        L ${bodyX} ${bodyY + bodyHeight * 0.6}
        Q ${bodyX} ${bodyY + bodyHeight * 0.9} ${bodyX + bodyWidth * 0.2} ${bodyY + bodyHeight}
        L ${bodyX + bodyWidth * 0.8} ${bodyY + bodyHeight}
        Q ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.9} ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.6}
        L ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.4}
        Q ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.1} ${bodyX + bodyWidth * 0.8} ${bodyY}
        Z
        
        M ${leftProcessX} ${processY}
        L ${leftProcessX + processWidth * 0.4} ${processY}
        L ${leftProcessX + processWidth} ${processY + processHeight * 0.3}
        L ${leftProcessX + processWidth} ${processY + processHeight * 0.7}
        L ${leftProcessX + processWidth * 0.4} ${processY + processHeight}
        L ${leftProcessX} ${processY + processHeight}
        Z
        
        M ${rightProcessX} ${processY}
        L ${rightProcessX + processWidth * 0.6} ${processY}
        L ${rightProcessX + processWidth} ${processY + processHeight}
        L ${rightProcessX + processWidth * 0.6} ${processY + processHeight}
        L ${rightProcessX} ${processY + processHeight * 0.7}
        L ${rightProcessX} ${processY + processHeight * 0.3}
        Z
        
        M ${canalX} ${canalY}
        Q ${canalX - spinalCanalWidth * 0.15} ${canalY + spinalCanalHeight * 0.5} ${canalX} ${canalY + spinalCanalHeight}
        L ${canalX + spinalCanalWidth} ${canalY + spinalCanalHeight}
        Q ${canalX + spinalCanalWidth * 1.15} ${canalY + spinalCanalHeight * 0.5} ${canalX + spinalCanalWidth} ${canalY}
        Z
      `
    }
    
    if (region === 'thoracic') {
      const bodyWidth = width * 0.5
      const bodyHeight = height * 0.85
      const bodyX = x + (width - bodyWidth) / 2
      const bodyY = yPosition
      
      const processWidth = width * 0.15
      const processHeight = height * 0.75
      const leftProcessX = x + width * 0.15
      const rightProcessX = x + width * 0.7
      const processY = yPosition + height * 0.15
      
      const spinalCanalWidth = bodyWidth * 0.4
      const spinalCanalHeight = bodyHeight * 0.45
      const canalX = bodyX + (bodyWidth - spinalCanalWidth) / 2
      const canalY = bodyY + bodyHeight * 0.25
      
      return `
        M ${bodyX + bodyWidth * 0.15} ${bodyY}
        Q ${bodyX} ${bodyY + bodyHeight * 0.05} ${bodyX} ${bodyY + bodyHeight * 0.35}
        L ${bodyX} ${bodyY + bodyHeight * 0.65}
        Q ${bodyX} ${bodyY + bodyHeight * 0.95} ${bodyX + bodyWidth * 0.15} ${bodyY + bodyHeight}
        L ${bodyX + bodyWidth * 0.85} ${bodyY + bodyHeight}
        Q ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.95} ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.65}
        L ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.35}
        Q ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.05} ${bodyX + bodyWidth * 0.85} ${bodyY}
        Z
        
        M ${leftProcessX} ${processY}
        L ${leftProcessX + processWidth * 0.3} ${processY}
        L ${leftProcessX + processWidth * 0.6} ${processY + processHeight * 0.2}
        L ${leftProcessX + processWidth} ${processY + processHeight * 0.4}
        L ${leftProcessX + processWidth} ${processY + processHeight * 0.6}
        L ${leftProcessX + processWidth * 0.6} ${processY + processHeight * 0.8}
        L ${leftProcessX + processWidth * 0.3} ${processY + processHeight}
        L ${leftProcessX} ${processY + processHeight}
        Z
        
        M ${rightProcessX} ${processY}
        L ${rightProcessX + processWidth * 0.7} ${processY}
        L ${rightProcessX + processWidth} ${processY + processHeight}
        L ${rightProcessX + processWidth * 0.7} ${processY + processHeight}
        L ${rightProcessX + processWidth * 0.4} ${processY + processHeight * 0.8}
        L ${rightProcessX} ${processY + processHeight * 0.6}
        L ${rightProcessX} ${processY + processHeight * 0.4}
        L ${rightProcessX + processWidth * 0.4} ${processY + processHeight * 0.2}
        Z
        
        M ${canalX} ${canalY}
        Q ${canalX - spinalCanalWidth * 0.12} ${canalY + spinalCanalHeight * 0.5} ${canalX} ${canalY + spinalCanalHeight}
        L ${canalX + spinalCanalWidth} ${canalY + spinalCanalHeight}
        Q ${canalX + spinalCanalWidth * 1.12} ${canalY + spinalCanalHeight * 0.5} ${canalX + spinalCanalWidth} ${canalY}
        Z
      `
    }
    
    if (region === 'lumbar') {
      const bodyWidth = width * 0.55
      const bodyHeight = height * 0.85
      const bodyX = x + (width - bodyWidth) / 2
      const bodyY = yPosition
      
      const processWidth = width * 0.2
      const processHeight = height * 0.6
      const leftProcessX = x + width * 0.1
      const rightProcessX = x + width * 0.7
      const processY = yPosition + height * 0.2
      
      const spinalCanalWidth = bodyWidth * 0.35
      const spinalCanalHeight = bodyHeight * 0.5
      const canalX = bodyX + (bodyWidth - spinalCanalWidth) / 2
      const canalY = bodyY + bodyHeight * 0.2
      
      return `
        M ${bodyX + bodyWidth * 0.12} ${bodyY}
        Q ${bodyX} ${bodyY + bodyHeight * 0.08} ${bodyX} ${bodyY + bodyHeight * 0.3}
        L ${bodyX} ${bodyY + bodyHeight * 0.7}
        Q ${bodyX} ${bodyY + bodyHeight * 0.92} ${bodyX + bodyWidth * 0.12} ${bodyY + bodyHeight}
        L ${bodyX + bodyWidth * 0.88} ${bodyY + bodyHeight}
        Q ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.92} ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.7}
        L ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.3}
        Q ${bodyX + bodyWidth} ${bodyY + bodyHeight * 0.08} ${bodyX + bodyWidth * 0.88} ${bodyY}
        Z
        
        M ${leftProcessX} ${processY}
        L ${leftProcessX + processWidth * 0.35} ${processY}
        L ${leftProcessX + processWidth} ${processY + processHeight * 0.35}
        L ${leftProcessX + processWidth} ${processY + processHeight * 0.65}
        L ${leftProcessX + processWidth * 0.35} ${processY + processHeight}
        L ${leftProcessX} ${processY + processHeight}
        Z
        
        M ${rightProcessX} ${processY}
        L ${rightProcessX + processWidth * 0.65} ${processY}
        L ${rightProcessX + processWidth} ${processY + processHeight}
        L ${rightProcessX + processWidth * 0.65} ${processY + processHeight}
        L ${rightProcessX} ${processY + processHeight * 0.65}
        L ${rightProcessX} ${processY + processHeight * 0.35}
        Z
        
        M ${canalX} ${canalY}
        Q ${canalX - spinalCanalWidth * 0.1} ${canalY + spinalCanalHeight * 0.5} ${canalX} ${canalY + spinalCanalHeight}
        L ${canalX + spinalCanalWidth} ${canalY + spinalCanalHeight}
        Q ${canalX + spinalCanalWidth * 1.1} ${canalY + spinalCanalHeight * 0.5} ${canalX + spinalCanalWidth} ${canalY}
        Z
      `
    }
    
    return ''
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
        y={yPosition + height / 2 + (region === 'coccygeal' ? 3 : 5)}
        textAnchor="middle"
        className="pointer-events-none select-none font-bold uppercase"
        style={{
          fontSize: region === 'coccygeal' ? '10px' : region === 'sacral' ? '11px' : region === 'cervical' ? '12px' : '13px',
          fill: isSelected ? 'white' : 'oklch(0.3 0.015 70)',
          letterSpacing: '0.5px'
        }}
      >
        {label}
      </text>
    </g>
  )
}
