export interface VertebraData {
  id: string
  label: string
  region: 'cervical' | 'thoracic' | 'lumbar' | 'sacral' | 'coccygeal'
  nerveFunctions: string[]
  symptoms: string[]
}

export const vertebraeData: VertebraData[] = [
  {
    id: 'C1',
    label: 'C1 (Atlas)',
    region: 'cervical',
    nerveFunctions: [
      'Blood supply to the head',
      'Pituitary gland',
      'Scalp',
      'Inner and middle ear'
    ],
    symptoms: [
      'Headaches',
      'Migraines',
      'Nervousness',
      'Insomnia',
      'Head colds',
      'High blood pressure',
      'Dizziness'
    ]
  },
  {
    id: 'C2',
    label: 'C2 (Axis)',
    region: 'cervical',
    nerveFunctions: [
      'Eyes',
      'Optic nerves',
      'Auditory nerves',
      'Sinuses',
      'Forehead'
    ],
    symptoms: [
      'Sinus problems',
      'Allergies',
      'Eye troubles',
      'Earaches',
      'Fainting spells',
      'Certain cases of blindness'
    ]
  },
  {
    id: 'C3',
    label: 'C3',
    region: 'cervical',
    nerveFunctions: [
      'Cheeks',
      'Outer ear',
      'Face bones',
      'Teeth'
    ],
    symptoms: [
      'Neuralgia',
      'Neuritis',
      'Acne',
      'Eczema',
      'Trigeminal neuralgia'
    ]
  },
  {
    id: 'C4',
    label: 'C4',
    region: 'cervical',
    nerveFunctions: [
      'Nose',
      'Lips',
      'Mouth',
      'Eustachian tubes'
    ],
    symptoms: [
      'Hay fever',
      'Catarrh',
      'Hearing loss',
      'Adenoids'
    ]
  },
  {
    id: 'C5',
    label: 'C5',
    region: 'cervical',
    nerveFunctions: [
      'Vocal cords',
      'Neck glands',
      'Pharynx'
    ],
    symptoms: [
      'Laryngitis',
      'Hoarseness',
      'Throat conditions',
      'Croup'
    ]
  },
  {
    id: 'C6',
    label: 'C6',
    region: 'cervical',
    nerveFunctions: [
      'Neck muscles',
      'Shoulders',
      'Tonsils'
    ],
    symptoms: [
      'Stiff neck',
      'Upper arm pain',
      'Tonsillitis',
      'Whooping cough'
    ]
  },
  {
    id: 'C7',
    label: 'C7',
    region: 'cervical',
    nerveFunctions: [
      'Thyroid gland',
      'Shoulders',
      'Elbows'
    ],
    symptoms: [
      'Bursitis',
      'Colds',
      'Thyroid conditions'
    ]
  },
  {
    id: 'T1',
    label: 'T1',
    region: 'thoracic',
    nerveFunctions: [
      'Forearms',
      'Hands',
      'Wrists',
      'Fingers'
    ],
    symptoms: [
      'Asthma',
      'Coughing',
      'Difficult breathing',
      'Forearm and hand pain'
    ]
  },
  {
    id: 'T2',
    label: 'T2',
    region: 'thoracic',
    nerveFunctions: [
      'Heart',
      'Coronary arteries'
    ],
    symptoms: [
      'Functional heart conditions',
      'Chest pains'
    ]
  },
  {
    id: 'T3',
    label: 'T3',
    region: 'thoracic',
    nerveFunctions: [
      'Lungs',
      'Bronchial tubes',
      'Pleura',
      'Chest'
    ],
    symptoms: [
      'Bronchitis',
      'Pleurisy',
      'Pneumonia',
      'Influenza'
    ]
  },
  {
    id: 'T4',
    label: 'T4',
    region: 'thoracic',
    nerveFunctions: [
      'Gallbladder',
      'Common bile duct'
    ],
    symptoms: [
      'Gallbladder conditions',
      'Jaundice',
      'Shingles'
    ]
  },
  {
    id: 'T5',
    label: 'T5',
    region: 'thoracic',
    nerveFunctions: [
      'Liver',
      'Solar plexus',
      'Blood circulation'
    ],
    symptoms: [
      'Liver conditions',
      'Fevers',
      'Low blood pressure',
      'Anemia',
      'Circulation problems'
    ]
  },
  {
    id: 'T6',
    label: 'T6',
    region: 'thoracic',
    nerveFunctions: [
      'Stomach'
    ],
    symptoms: [
      'Stomach troubles',
      'Indigestion',
      'Heartburn',
      'Dyspepsia'
    ]
  },
  {
    id: 'T7',
    label: 'T7',
    region: 'thoracic',
    nerveFunctions: [
      'Pancreas',
      'Duodenum'
    ],
    symptoms: [
      'Ulcers',
      'Gastritis',
      'Diabetes'
    ]
  },
  {
    id: 'T8',
    label: 'T8',
    region: 'thoracic',
    nerveFunctions: [
      'Spleen',
      'Diaphragm'
    ],
    symptoms: [
      'Hiccups',
      'Lowered resistance'
    ]
  },
  {
    id: 'T9',
    label: 'T9',
    region: 'thoracic',
    nerveFunctions: [
      'Adrenal glands'
    ],
    symptoms: [
      'Allergies',
      'Hives',
      'Fatigue'
    ]
  },
  {
    id: 'T10',
    label: 'T10',
    region: 'thoracic',
    nerveFunctions: [
      'Kidneys'
    ],
    symptoms: [
      'Kidney troubles',
      'Hardening of arteries',
      'Chronic fatigue'
    ]
  },
  {
    id: 'T11',
    label: 'T11',
    region: 'thoracic',
    nerveFunctions: [
      'Kidneys',
      'Ureters'
    ],
    symptoms: [
      'Skin conditions',
      'Acne',
      'Pimples',
      'Eczema',
      'Boils'
    ]
  },
  {
    id: 'T12',
    label: 'T12',
    region: 'thoracic',
    nerveFunctions: [
      'Small intestine',
      'Lymph circulation'
    ],
    symptoms: [
      'Rheumatism',
      'Gas pains',
      'Infertility'
    ]
  },
  {
    id: 'L1',
    label: 'L1',
    region: 'lumbar',
    nerveFunctions: [
      'Large intestine',
      'Inguinal rings'
    ],
    symptoms: [
      'Constipation',
      'Colitis',
      'Dysentery',
      'Diarrhea',
      'Hernias'
    ]
  },
  {
    id: 'L2',
    label: 'L2',
    region: 'lumbar',
    nerveFunctions: [
      'Appendix',
      'Abdomen',
      'Upper leg'
    ],
    symptoms: [
      'Cramps',
      'Appendicitis',
      'Difficult breathing',
      'Acidosis',
      'Varicose veins'
    ]
  },
  {
    id: 'L3',
    label: 'L3',
    region: 'lumbar',
    nerveFunctions: [
      'Sex organs',
      'Uterus',
      'Bladder',
      'Knees'
    ],
    symptoms: [
      'Bladder troubles',
      'Menstrual troubles',
      'Miscarriages',
      'Knee pains',
      'Impotency'
    ]
  },
  {
    id: 'L4',
    label: 'L4',
    region: 'lumbar',
    nerveFunctions: [
      'Prostate gland',
      'Lower back muscles',
      'Sciatic nerve'
    ],
    symptoms: [
      'Sciatica',
      'Lumbago',
      'Difficult, painful urination',
      'Backaches'
    ]
  },
  {
    id: 'L5',
    label: 'L5',
    region: 'lumbar',
    nerveFunctions: [
      'Lower legs',
      'Ankles',
      'Feet'
    ],
    symptoms: [
      'Poor circulation in legs',
      'Swollen ankles',
      'Weak ankles',
      'Cold feet',
      'Leg cramps'
    ]
  },
  {
    id: 'Sacrum',
    label: 'Sacrum',
    region: 'sacral',
    nerveFunctions: [
      'Hip bones',
      'Buttocks'
    ],
    symptoms: [
      'Sacroiliac conditions',
      'Spinal curvatures'
    ]
  },
  {
    id: 'Coccyx',
    label: 'Coccyx',
    region: 'coccygeal',
    nerveFunctions: [
      'Rectum',
      'Anus'
    ],
    symptoms: [
      'Hemorrhoids',
      'Pruritis',
      'Pain when sitting'
    ]
  }
]

export const getVertebraById = (id: string): VertebraData | undefined => {
  return vertebraeData.find(v => v.id === id)
}

export const getVertebraeByRegion = (region: string): VertebraData[] => {
  return vertebraeData.filter(v => v.region === region)
}
