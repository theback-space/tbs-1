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
        viewBox="0 0 350 1000"
        className="w-full max-w-[320px]"
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
              yPosition={45 + index * 32}
              width={105 + index * 4}
              height={28}
              curveOffset={-18 + index * 2}
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
              yPosition={280 + index * 34}
              width={130 + index * 2}
              height={30}
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
              yPosition={700 + index * 40}
              width={160 - index * 5}
              height={35}
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
              yPosition={910 + index * 36}
              width={128}
              height={32}
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
              yPosition={950 + index * 22}
              width={66}
              height={24}
              curveOffset={-6}
              isCoccyx={true}
            />
          ))}
        </g>

        <text x="10" y="30" className="fill-muted-foreground text-xs font-semibold uppercase">Cervical</text>
        <text x="10" y="265" className="fill-muted-foreground text-xs font-semibold uppercase">Thoracic</text>
        <text x="10" y="685" className="fill-muted-foreground text-xs font-semibold uppercase">Lumbar</text>
        <text x="10" y="895" className="fill-muted-foreground text-xs font-semibold uppercase">Sacral</text>
      </svg>
    </div>
  )
}
