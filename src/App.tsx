import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { SpineDiagram } from '@/components/SpineDiagram'
import { SubluxationReport } from '@/components/SubluxationReport'
import { CarePlanForm } from '@/components/CarePlanForm'
import { ExportPDFDialog } from '@/components/ExportPDFDialog'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { defaultCarePlan, type CarePlan } from '@/lib/care-plan-data'
import { FirstAid, ListChecks, X } from '@phosphor-icons/react'

function App() {
  const [selectedVertebrae, setSelectedVertebrae] = useKV<string[]>('selected-vertebrae', [])
  const [carePlan, setCarePlan] = useKV<CarePlan>('care-plan', defaultCarePlan)
  const [activeTab, setActiveTab] = useState('assessment')

  const handleToggleVertebra = (id: string) => {
    setSelectedVertebrae((current) => {
      const currentArray = current || []
      if (currentArray.includes(id)) {
        return currentArray.filter(v => v !== id)
      } else {
        return [...currentArray, id]
      }
    })
  }

  const handleClearSelections = () => {
    setSelectedVertebrae([])
    toast.success('Assessment cleared')
  }

  const handleUpdateCarePlan = (updates: Partial<CarePlan>) => {
    setCarePlan((current) => ({
      ...(current || defaultCarePlan),
      ...updates
    }))
  }

  const handleGenerateCarePlan = () => {
    if (!selectedVertebrae || selectedVertebrae.length === 0) {
      toast.error('Please select at least one vertebra before generating a care plan')
      return
    }
    setActiveTab('care-plan')
    toast.success('Care plan ready for review')
  }

  const handleSaveAssessment = () => {
    toast.success('Assessment and care plan saved successfully')
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <FirstAid className="w-8 h-8 text-primary" weight="fill" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                ChiroAssess
              </h1>
              <p className="text-sm text-muted-foreground">
                Spinal Subluxation Assessment & Care Planning
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="care-plan">Care Plan</TabsTrigger>
          </TabsList>

          <TabsContent value="assessment" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 overflow-visible">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Spine Diagram</h2>
                  {selectedVertebrae && selectedVertebrae.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleClearSelections}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Clear All
                    </Button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Click on vertebrae to mark subluxations
                </p>
                <SpineDiagram
                  selectedVertebrae={selectedVertebrae || []}
                  onToggleVertebra={handleToggleVertebra}
                />
              </Card>

              <div className="space-y-4">
                <SubluxationReport selectedVertebrae={selectedVertebrae || []} />
                
                <div className="flex gap-3">
                  {selectedVertebrae && selectedVertebrae.length > 0 && (
                    <>
                      <Button
                        onClick={handleGenerateCarePlan}
                        className="flex-1"
                        size="lg"
                      >
                        <ListChecks className="w-5 h-5 mr-2" />
                        Generate Care Plan
                      </Button>
                      <ExportPDFDialog
                        selectedVertebrae={selectedVertebrae}
                        carePlan={carePlan || defaultCarePlan}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="care-plan" className="mt-6">
            <div className="max-w-3xl mx-auto space-y-6">
              {!selectedVertebrae || selectedVertebrae.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground mb-4">
                    No vertebrae selected for assessment
                  </p>
                  <Button onClick={() => setActiveTab('assessment')}>
                    Return to Assessment
                  </Button>
                </Card>
              ) : (
                <>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Assessment Summary</h2>
                    <p className="text-muted-foreground">
                      {selectedVertebrae.length} vertebra{selectedVertebrae.length !== 1 ? 'e' : ''} identified with subluxation:{' '}
                      <span className="font-semibold text-foreground">
                        {selectedVertebrae.join(', ')}
                      </span>
                    </p>
                  </div>

                  <CarePlanForm
                    carePlan={carePlan || defaultCarePlan}
                    onUpdateCarePlan={handleUpdateCarePlan}
                  />

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab('assessment')}
                      className="flex-1"
                    >
                      Back to Assessment
                    </Button>
                    <ExportPDFDialog
                      selectedVertebrae={selectedVertebrae}
                      carePlan={carePlan || defaultCarePlan}
                    />
                    <Button
                      onClick={handleSaveAssessment}
                      className="flex-1"
                    >
                      Save Assessment
                    </Button>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App
