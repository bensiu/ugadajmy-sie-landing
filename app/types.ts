export interface ProcessStep {
  title: string
  step?: string | number
  icon?: string
  description: string
}

export type SectionVariant = 'default' | 'subtle' | 'primary'

export interface MarkupSEO {
  serviceType: string
  name?: string
  description?: string
}

export interface SEO {
  title: string
  description: string
  author?: string
  markup?: MarkupSEO
}

export interface BreadCrumbsItem {
  label: string
  href?: string
}

export interface DetailPageProps {
  id: string
  seo: SEO
  breadCrumbsLabel?: string
  breadCrumbs?: BreadCrumbsItem[] | null
  title: string[]
  description: string
  backgroundImageClass?: string

  whatIsIt?: {
    title: string
    description: string[]
    variant?: SectionVariant
  }
  kinds?: {
    lead?: string
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
  options?: {
    title: string
    variant?: SectionVariant
    items: {
      title: string
      description?: string
      detail?: string
    }[]
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

export interface ConfigItems {
  phone: string
  email: string
  address: string
}
