import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { exportAssessmentToPDF } from '@/lib/pdf-export'
import { CarePlan } from '@/lib/care-plan-data'
import { FilePdf } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface ExportPDFDialogProps {
  selectedVertebrae: string[]
  carePlan: CarePlan
  disabled?: boolean
}

export function ExportPDFDialog({ selectedVertebrae, carePlan, disabled }: ExportPDFDialogProps) {
  const [open, setOpen] = useState(false)
  const [patientName, setPatientName] = useState('')

  const handleExport = () => {
    try {
      exportAssessmentToPDF({
        selectedVertebrae,
        carePlan,
        patientName: patientName.trim() || undefined,
        assessmentDate: new Date().toLocaleDateString()
      })
      toast.success('PDF exported successfully')
      setOpen(false)
      setPatientName('')
    } catch (error) {
      console.error('PDF export error:', error)
      toast.error('Failed to export PDF')
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className="gap-2"
        >
          <FilePdf className="w-4 h-4" />
          Export PDF
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Assessment as PDF</DialogTitle>
          <DialogDescription>
            Generate a comprehensive PDF report including subluxation assessment and care plan recommendations.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="patient-name">Patient Name (Optional)</Label>
            <Input
              id="patient-name"
              placeholder="Enter patient name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleExport()
                }
              }}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">The PDF will include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>{selectedVertebrae.length} selected vertebra{selectedVertebrae.length !== 1 ? 'e' : ''}</li>
              <li>Nerve functions and symptoms for each</li>
              <li>Complete care plan with all three stages</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport}>
            <FilePdf className="w-4 h-4 mr-2" />
            Generate PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
