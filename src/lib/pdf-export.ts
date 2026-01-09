import { jsPDF } from 'jspdf'
import { getVertebraById } from './vertebrae-data'
import { CarePlan, frequencyOptions, durationOptions } from './care-plan-data'

interface ExportData {
  selectedVertebrae: string[]
  carePlan: CarePlan
  patientName?: string
  assessmentDate?: string
}

export function exportAssessmentToPDF(data: ExportData) {
  const pdf = new jsPDF()
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - (margin * 2)
  let yPosition = margin

  const primaryColor: [number, number, number] = [69, 104, 178]
  const accentColor: [number, number, number] = [203, 108, 72]
  const textColor: [number, number, number] = [51, 51, 51]
  const lightGray: [number, number, number] = [150, 150, 150]

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(24)
  pdf.setTextColor(...primaryColor)
  pdf.text('ChiroAssess', margin, yPosition)
  
  pdf.setFontSize(12)
  pdf.setFont('helvetica', 'normal')
  pdf.setTextColor(...lightGray)
  yPosition += 8
  pdf.text('Spinal Subluxation Assessment & Care Plan', margin, yPosition)

  yPosition += 15
  pdf.setDrawColor(...lightGray)
  pdf.setLineWidth(0.5)
  pdf.line(margin, yPosition, pageWidth - margin, yPosition)

  yPosition += 12
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(10)
  pdf.setTextColor(...textColor)
  
  const assessmentDate = data.assessmentDate || new Date().toLocaleDateString()
  pdf.text(`Assessment Date: ${assessmentDate}`, margin, yPosition)
  
  if (data.patientName) {
    yPosition += 6
    pdf.text(`Patient: ${data.patientName}`, margin, yPosition)
  }

  yPosition += 15
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(16)
  pdf.setTextColor(...primaryColor)
  pdf.text('Assessment Summary', margin, yPosition)

  yPosition += 10
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(10)
  pdf.setTextColor(...textColor)
  
  const vertebraeCount = data.selectedVertebrae.length
  pdf.text(
    `${vertebraeCount} vertebra${vertebraeCount !== 1 ? 'e' : ''} identified with subluxation:`,
    margin,
    yPosition
  )
  
  yPosition += 8
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(...accentColor)
  pdf.text(data.selectedVertebrae.join(', '), margin, yPosition)

  yPosition += 15
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(16)
  pdf.setTextColor(...primaryColor)
  pdf.text('Detailed Subluxation Report', margin, yPosition)

  yPosition += 10

  data.selectedVertebrae.forEach((vertebraId, index) => {
    const vertebra = getVertebraById(vertebraId)
    if (!vertebra) return

    if (yPosition > pageHeight - 80) {
      pdf.addPage()
      yPosition = margin
    }

    pdf.setFillColor(245, 245, 250)
    pdf.roundedRect(margin, yPosition - 5, contentWidth, 8, 2, 2, 'F')

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(12)
    pdf.setTextColor(...primaryColor)
    pdf.text(vertebra.id, margin + 3, yPosition)

    yPosition += 10

    const columnWidth = (contentWidth - 10) / 2
    const leftColX = margin
    const rightColX = margin + columnWidth + 10

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(10)
    pdf.setTextColor(...accentColor)
    pdf.text('Nerve Functions', leftColX, yPosition)
    pdf.text('Possible Symptoms', rightColX, yPosition)

    yPosition += 6

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor(...textColor)

    const maxLines = Math.max(vertebra.nerveFunctions.length, vertebra.symptoms.length)
    
    for (let i = 0; i < maxLines; i++) {
      if (yPosition > pageHeight - 30) {
        pdf.addPage()
        yPosition = margin
      }

      if (i < vertebra.nerveFunctions.length) {
        const nerveFunctionText = `• ${vertebra.nerveFunctions[i]}`
        const lines = pdf.splitTextToSize(nerveFunctionText, columnWidth - 5)
        pdf.text(lines, leftColX, yPosition)
      }

      if (i < vertebra.symptoms.length) {
        const symptomText = `• ${vertebra.symptoms[i]}`
        const lines = pdf.splitTextToSize(symptomText, columnWidth - 5)
        pdf.text(lines, rightColX, yPosition)
      }

      yPosition += 5
    }

    yPosition += 8
  })

  if (yPosition > pageHeight - 100) {
    pdf.addPage()
    yPosition = margin
  } else {
    yPosition += 10
  }

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(16)
  pdf.setTextColor(...primaryColor)
  pdf.text('Recommended Care Plan', margin, yPosition)

  yPosition += 12

  const stages = [
    { key: 'initialCare', stage: data.carePlan.initialCare },
    { key: 'correctiveCare', stage: data.carePlan.correctiveCare },
    { key: 'wellnessCare', stage: data.carePlan.wellnessCare }
  ]

  stages.forEach((item, index) => {
    if (yPosition > pageHeight - 50) {
      pdf.addPage()
      yPosition = margin
    }

    pdf.setFillColor(245, 245, 250)
    pdf.roundedRect(margin, yPosition - 5, contentWidth, 30, 2, 2, 'F')

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(12)
    pdf.setTextColor(...primaryColor)
    pdf.text(item.stage.name, margin + 3, yPosition)

    yPosition += 8

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(10)
    pdf.setTextColor(...textColor)

    const freqOption = frequencyOptions.find(f => f.value === item.stage.frequency)
    const durOption = durationOptions.find(d => d.value === item.stage.duration)

    pdf.text(`Frequency: ${freqOption?.label || item.stage.frequency}`, margin + 3, yPosition)
    yPosition += 6
    pdf.text(`Duration: ${durOption?.label || item.stage.duration}`, margin + 3, yPosition)

    yPosition += 15
  })

  yPosition = pageHeight - 15
  pdf.setFont('helvetica', 'italic')
  pdf.setFontSize(8)
  pdf.setTextColor(...lightGray)
  pdf.text(
    `Generated by ChiroAssess on ${new Date().toLocaleString()}`,
    pageWidth / 2,
    yPosition,
    { align: 'center' }
  )

  const fileName = `ChiroAssess_${data.patientName ? data.patientName.replace(/\s+/g, '_') + '_' : ''}${new Date().toISOString().split('T')[0]}.pdf`
  pdf.save(fileName)
}
