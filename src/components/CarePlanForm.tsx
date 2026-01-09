import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { frequencyOptions, durationOptions, type CarePlan } from '@/lib/care-plan-data'
import { Pulse, CalendarBlank } from '@phosphor-icons/react'

interface CarePlanFormProps {
  carePlan: CarePlan
  onUpdateCarePlan: (updates: Partial<CarePlan>) => void
}

export function CarePlanForm({ carePlan, onUpdateCarePlan }: CarePlanFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Care Plan Recommendations</CardTitle>
        <CardDescription>Configure treatment frequency and duration for each phase</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['initial', 'corrective', 'wellness']} className="w-full">
          <AccordionItem value="initial">
            <AccordionTrigger className="text-base font-semibold">
              Phase 1: Initial Intensive Care
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="grid gap-2">
                  <Label htmlFor="initial-frequency" className="flex items-center gap-2">
                    <Pulse className="w-4 h-4" />
                    Session Frequency
                  </Label>
                  <Select
                    value={carePlan.initialCare.frequency}
                    onValueChange={(value) => 
                      onUpdateCarePlan({
                        initialCare: { ...carePlan.initialCare, frequency: value }
                      })
                    }
                  >
                    <SelectTrigger id="initial-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencyOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="initial-duration" className="flex items-center gap-2">
                    <CalendarBlank className="w-4 h-4" />
                    Duration
                  </Label>
                  <Select
                    value={carePlan.initialCare.duration}
                    onValueChange={(value) => 
                      onUpdateCarePlan({
                        initialCare: { ...carePlan.initialCare, duration: value }
                      })
                    }
                  >
                    <SelectTrigger id="initial-duration">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="corrective">
            <AccordionTrigger className="text-base font-semibold">
              Phase 2: Corrective Care
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="grid gap-2">
                  <Label htmlFor="corrective-frequency" className="flex items-center gap-2">
                    <Pulse className="w-4 h-4" />
                    Session Frequency
                  </Label>
                  <Select
                    value={carePlan.correctiveCare.frequency}
                    onValueChange={(value) => 
                      onUpdateCarePlan({
                        correctiveCare: { ...carePlan.correctiveCare, frequency: value }
                      })
                    }
                  >
                    <SelectTrigger id="corrective-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencyOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="corrective-duration" className="flex items-center gap-2">
                    <CalendarBlank className="w-4 h-4" />
                    Duration
                  </Label>
                  <Select
                    value={carePlan.correctiveCare.duration}
                    onValueChange={(value) => 
                      onUpdateCarePlan({
                        correctiveCare: { ...carePlan.correctiveCare, duration: value }
                      })
                    }
                  >
                    <SelectTrigger id="corrective-duration">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wellness">
            <AccordionTrigger className="text-base font-semibold">
              Phase 3: Wellness Maintenance
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="grid gap-2">
                  <Label htmlFor="wellness-frequency" className="flex items-center gap-2">
                    <Pulse className="w-4 h-4" />
                    Session Frequency
                  </Label>
                  <Select
                    value={carePlan.wellnessCare.frequency}
                    onValueChange={(value) => 
                      onUpdateCarePlan({
                        wellnessCare: { ...carePlan.wellnessCare, frequency: value }
                      })
                    }
                  >
                    <SelectTrigger id="wellness-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencyOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="wellness-duration" className="flex items-center gap-2">
                    <CalendarBlank className="w-4 h-4" />
                    Duration
                  </Label>
                  <Select
                    value={carePlan.wellnessCare.duration}
                    onValueChange={(value) => 
                      onUpdateCarePlan({
                        wellnessCare: { ...carePlan.wellnessCare, duration: value }
                      })
                    }
                  >
                    <SelectTrigger id="wellness-duration">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
