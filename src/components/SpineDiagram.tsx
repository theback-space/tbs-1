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
        viewBox="0 0 350 1400"
        className="w-full max-w-[350px]"
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
              yPosition={50 + index * 45}
              width={100 + index * 5}
              height={40}
              curveOffset={-20 + index * 2.5}
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
              yPosition={380 + index * 48}
              width={135 + index * 2.5}
              height={44}
              curveOffset={index < 6 ? 0 + index * 3.5 : 21 - (index - 6) * 2.5}
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
              yPosition={970 + index * 52}
              width={168 - index * 6}
              height={48}
              curveOffset={8 - index * 2.5}
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
              yPosition={1240 + index * 42}
              width={135}
              height={38}
              curveOffset={-5}
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
              yPosition={1325 + index * 30}
              width={72}
              height={28}
              curveOffset={-8}
            />
          ))}
        </g>

        <text x="10" y="35" className="fill-muted-foreground text-xs font-semibold uppercase tracking-wide">Cervical</text>
        <text x="10" y="365" className="fill-muted-foreground text-xs font-semibold uppercase tracking-wide">Thoracic</text>
        <text x="10" y="955" className="fill-muted-foreground text-xs font-semibold uppercase tracking-wide">Lumbar</text>
        <text x="10" y="1225" className="fill-muted-foreground text-xs font-semibold uppercase tracking-wide">Sacral</text>
      </svg>
    </div>
  )
}
