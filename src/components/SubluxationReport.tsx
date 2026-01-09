import { motion } from 'framer-motion'
import { getVertebraById } from '@/lib/vertebrae-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Warning } from '@phosphor-icons/react'

interface SubluxationReportProps {
  selectedVertebrae: string[]
}

export function SubluxationReport({ selectedVertebrae }: SubluxationReportProps) {
  if (selectedVertebrae.length === 0) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-xl">Subluxation Summary</CardTitle>
          <CardDescription>Select vertebrae to view associated nerve functions and symptoms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Warning className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Click on vertebrae in the spine diagram to document subluxations
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">Subluxation Summary</CardTitle>
        <CardDescription>
          {selectedVertebrae.length} {selectedVertebrae.length === 1 ? 'vertebra' : 'vertebrae'} selected
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            {selectedVertebrae.map((vertebraId, index) => {
              const vertebra = getVertebraById(vertebraId)
              if (!vertebra) return null

              return (
                <motion.div
                  key={vertebra.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className="text-sm font-bold px-3 py-1">
                        {vertebra.label}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Nerve Functions
                        </h4>
                        <ul className="space-y-1">
                          {vertebra.nerveFunctions.map((func, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0">
                              {func}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Possible Symptoms
                        </h4>
                        <ul className="space-y-1">
                          {vertebra.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0">
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {index < selectedVertebrae.length - 1 && (
                    <Separator className="mt-6" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
