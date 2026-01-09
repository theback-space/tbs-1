export interface CareStage {
  name: string
  frequency: string
  duration: string
}

export interface CarePlan {
  initialCare: CareStage
  correctiveCare: CareStage
  wellnessCare: CareStage
}

export const frequencyOptions = [
  { value: '1', label: '1 session per week' },
  { value: '2', label: '2 sessions per week' },
  { value: '3', label: '3 sessions per week' },
  { value: '4', label: '4 sessions per week' },
  { value: '5', label: '5 sessions per week' },
  { value: '6', label: '6 sessions per week' }
]

export const durationOptions = [
  { value: '2w', label: '2 weeks' },
  { value: '3w', label: '3 weeks' },
  { value: '4w', label: '4 weeks' },
  { value: '6w', label: '6 weeks' },
  { value: '8w', label: '8 weeks' },
  { value: '12w', label: '12 weeks' },
  { value: '3m', label: '3 months' },
  { value: '4m', label: '4 months' },
  { value: '6m', label: '6 months' },
  { value: '9m', label: '9 months' },
  { value: '12m', label: '12 months' }
]

export const defaultCarePlan: CarePlan = {
  initialCare: {
    name: 'Initial Intensive Care',
    frequency: '3',
    duration: '4w'
  },
  correctiveCare: {
    name: 'Corrective Care',
    frequency: '2',
    duration: '12w'
  },
  wellnessCare: {
    name: 'Wellness Maintenance',
    frequency: '1',
    duration: '6m'
  }
}
