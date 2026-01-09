import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface VertebraButtonProps {
  id: string
  label: string
  isSelected: boolean
  onToggle: (id: string) => void
  region: 'cervical' | 'thoracic' | 'lumbar' | 'sacral' | 'coccygeal'
}

const regionColors = {
  cervical: 'bg-[oklch(0.88_0.03_95)]',
  thoracic: 'bg-[oklch(0.82_0.04_65)]',
  lumbar: 'bg-[oklch(0.78_0.05_280)]',
  sacral: 'bg-[oklch(0.75_0.04_15)]',
  coccygeal: 'bg-[oklch(0.72_0.03_30)]'
}

export function VertebraButton({ id, label, isSelected, onToggle, region }: VertebraButtonProps) {
  return (
    <motion.button
      onClick={() => onToggle(id)}
      className={cn(
        'relative px-4 py-3 rounded-md font-bold text-xs uppercase tracking-wide transition-all duration-150',
        'border-2 min-w-[80px] hover:scale-105 active:scale-95',
        'shadow-sm hover:shadow-md',
        isSelected
          ? 'bg-[var(--subluxation-red)] text-white border-red-800'
          : cn(regionColors[region], 'text-gray-800 border-gray-400 hover:border-gray-600')
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isSelected ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.button>
  )
}
