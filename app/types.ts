export interface ProcessStep {
  title: string
  step?: string | number
  description: string
}

export interface DetailPageProps {
  id: string
  title: string[]
  description: string

  whatIsIt?: {
    title: string
    description: string[]
  }
  kinds?: {
    title: string
    description: string
    items: {
      title: string
      path: string
      description: string
      icon: string
    }[]
  }
  whenToUse?: {
    title: string
    situations: string[]
  }
  howProcess?: {
    title: string
    steps: ProcessStep[]
  }
  listOfBenefits?: {
    title: string
    items: string[]
  }
  frequentlyAskedQuestions?: {
    title: string
    questions: {
      label: string
      content: string
    }[]
  }
  callToAction?: {
    title: string
  }
}
