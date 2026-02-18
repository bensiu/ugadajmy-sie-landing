export interface ProcessStep {
  title: string
  step?: string | number
  icon?: string
  description: string
}

export type SectionVariant = 'default' | 'subtle' | 'primary'

export interface DetailPageProps {
  id: string
  title: string[]
  description: string

  whatIsIt?: {
    title: string
    description: string[]
    variant?: SectionVariant
  }
  kinds?: {
    title: string
    description: string
    variant?: SectionVariant
    class?: string
    items: {
      title: string
      path: string
      description: string
      icon: string
      items?: string[]
    }[]
  }
  whenToUse?: {
    title: string
    variant?: SectionVariant
    situations: string[]
  }
  howProcess?: {
    title: string
    variant?: SectionVariant
    steps: ProcessStep[]
  }
  listOfBenefits?: {
    title: string
    variant?: SectionVariant
    items: string[]
  }
  frequentlyAskedQuestions?: {
    title: string
    variant?: SectionVariant
    questions: {
      label: string
      content: string
    }[]
  }
  callToAction?: {
    variant?: SectionVariant
    title: string
    description?: string
  }
}
