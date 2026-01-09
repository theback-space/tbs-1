import { vertebraeData } from '@/lib/vertebrae-data'
import { VertebraButton } from './VertebraButton'

interface SpineDiagramProps {
  selectedVertebrae: string[]
  onToggleVertebra: (id: string) => void
}

export function SpineDiagram({ selectedVertebrae, onToggleVertebra }: SpineDiagramProps) {
  const cervical = vertebraeData.filter(v => v.region === 'cervical')
  const thoracic = vertebraeData.filter(v => v.region === 'thoracic')
  const lumbar = vertebraeData.filter(v => v.region === 'lumbar')
  const sacral = vertebraeData.filter(v => v.region === 'sacral')
  const coccygeal = vertebraeData.filter(v => v.region === 'coccygeal')

  return (
    <div className="relative flex justify-center py-8">
      <svg
        viewBox="0 0 300 900"
        className="w-full max-w-[280px]"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <linearGradient id="boneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'oklch(0.92 0.02 70)', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'oklch(0.88 0.02 70)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'oklch(0.85 0.025 65)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="subluxationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'oklch(0.60 0.22 25)', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'oklch(0.55 0.22 25)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'oklch(0.50 0.22 25)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <g id="cervical-region">
          {cervical.map((vertebra, index) => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
              yPosition={40 + index * 28}
              width={85 + index * 3}
              height={24}
              curveOffset={-15 + index * 2}
            />
          ))}
        </g>

        <g id="thoracic-region">
          {thoracic.map((vertebra, index) => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
              yPosition={240 + index * 30}
              width={105 + index * 2}
              height={26}
              curveOffset={index < 6 ? 0 + index * 3 : 18 - (index - 6) * 2}
            />
          ))}
        </g>

        <g id="lumbar-region">
          {lumbar.map((vertebra, index) => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
              yPosition={600 + index * 35}
              width={130 - index * 4}
              height={30}
              curveOffset={6 - index * 2}
            />
          ))}
        </g>

        <g id="sacral-region">
          {sacral.map((vertebra, index) => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
              yPosition={780 + index * 32}
              width={105}
              height={28}
              curveOffset={-4}
              isSacrum={true}
            />
          ))}
        </g>

        <g id="coccygeal-region">
          {coccygeal.map((vertebra, index) => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
              yPosition={815 + index * 20}
              width={55}
              height={20}
              curveOffset={-6}
              isCoccyx={true}
            />
          ))}
        </g>

        <text x="10" y="25" className="fill-muted-foreground text-xs font-semibold uppercase">Cervical</text>
        <text x="10" y="225" className="fill-muted-foreground text-xs font-semibold uppercase">Thoracic</text>
        <text x="10" y="585" className="fill-muted-foreground text-xs font-semibold uppercase">Lumbar</text>
        <text x="10" y="765" className="fill-muted-foreground text-xs font-semibold uppercase">Sacral</text>
      </svg>
    </div>
  )
}
