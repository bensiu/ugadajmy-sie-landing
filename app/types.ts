import type {
  SectionVariant,
  MarkupSEO,
  SEO,
  BreadCrumbsItem,
  FeatureItemProps,
  SectionContentProps
} from '../../nuxt-layers/block-elements/types'

export type { CookieConsentBanerProps } from '../../nuxt-layers/cookie-consent/types'

export type {
  SectionVariant,
  MarkupSEO,
  SEO,
  BreadCrumbsItem,
  FeatureItemProps,
  SectionContentProps
}

export interface ProcessStep {
  title: string
  step?: string | number
  icon?: string
  description: string
}

export interface DetailPageProps {
  id: string
  seo: SEO
  breadCrumbsLabel?: string
  breadCrumbs?: BreadCrumbsItem[] | null
  title: string[]
  description: string
  backgroundImageClass?: string

  whatIsIt?: SectionContentProps
  kinds?: SectionContentProps
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
  email?: string
  address: string
  fullAddress: string
}

export interface NewsItem {
  id: string
  title: string
  content: string
  link?: string
  published: string
  approved?: boolean
}

export type NewsCardItem = NewsItem & {
  icon?: string
  ui?: {
    title?: string
  }
  toEdit?: boolean
}
