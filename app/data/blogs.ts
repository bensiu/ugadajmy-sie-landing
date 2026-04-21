import type { SectionItem } from './gazda'
import { page } from './gazda'

export interface BlogPagesDetails {
  id: string
  title: string
  description: string
  parent?: string
  breadCrumbsLabel: string
  services: string[]
}

const getSilosLabel = (key: string): string => {
  const result = page.sections.find(item => item.key === key)

  return result ? result.label : ''
}

const getServices = (sections: {
  label: string
  key: string
  items: SectionItem[]
}[], index: number): string[] => {
  return [
    ...new Set([
      sections[index]?.key as string,
      ...(sections[index]?.items as SectionItem[]).map(
        item => item.key
      )
    ])
  ]
}

export const pages: Record<string, BlogPagesDetails> = {
  'mediacje': {
    id: 'mediacje',
    title: 'Artykuły o mediacjach',
    description: 'Praktyczne artykuły o&nbsp;mediacjach – jak się przygotować, czego&nbsp;oczekiwać i&nbsp;jak wybrać najlepszą drogę rozwiązania konfliktu.',
    breadCrumbsLabel: getSilosLabel('mediacje'),
    services: getServices(page.sections, 0)
  },
  'coaching': {
    id: 'coaching',
    title: 'Artykuły o coachingu',
    description: 'Artykuły o rozwoju osobistym, karierze i&nbsp;zarządzaniu konfliktami. Inspiracje i&nbsp;narzędzia do&nbsp;pracy nad&nbsp;sobą.',
    breadCrumbsLabel: getSilosLabel('coaching'),
    services: getServices(page.sections, 2)
  },
  'szkolenia': {
    id: 'szkolenia',
    title: 'Artykuły o szkoleniach',
    description: 'Artykuły o komunikacji, rozwiązywaniu konfliktów w&nbsp;firmie i&nbsp;rozwoju kompetencji interpersonalnych.',
    breadCrumbsLabel: getSilosLabel('szkolenia'),
    services: getServices(page.sections, 3)
  },
  'terapia-dla-par': {
    id: 'terapia-dla-par',
    title: 'Artykuły o terapii dla par',
    description: 'Artykuły o relacjach, komunikacji w&nbsp;związku i&nbsp;tym, jak odbudować bliskość. Porady eksperta z&nbsp;wieloletnim doświadczeniem.',
    breadCrumbsLabel: getSilosLabel('terapia-dla-par'),
    services: getServices(page.sections, 1)
  }
}
