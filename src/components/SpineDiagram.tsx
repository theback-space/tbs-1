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
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Cervical
        </h3>
        <div className="flex flex-col gap-1">
          {cervical.map(vertebra => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Thoracic
        </h3>
        <div className="flex flex-col gap-1">
          {thoracic.map(vertebra => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Lumbar
        </h3>
        <div className="flex flex-col gap-1">
          {lumbar.map(vertebra => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Sacral & Coccygeal
        </h3>
        <div className="flex flex-col gap-1">
          {sacral.map(vertebra => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
            />
          ))}
          {coccygeal.map(vertebra => (
            <VertebraButton
              key={vertebra.id}
              id={vertebra.id}
              label={vertebra.id}
              isSelected={selectedVertebrae.includes(vertebra.id)}
              onToggle={onToggleVertebra}
              region={vertebra.region}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
