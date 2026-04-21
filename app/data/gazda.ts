export interface SectionItem {
  label: string
  key: string
}

interface AdminPageStructure {
  sections: {
    label: string
    key: string
    items: SectionItem[]
  }[]
}

export const page: AdminPageStructure = {
  sections: [
    {
      label: 'Mediacje',
      key: 'mediacje',
      items: [
        {
          label: 'Mediacje rodzinne',
          key: 'mediacje-rodzinne'
        },
        {
          label: 'Mediacje okołorozwodowe',
          key: 'mediacje-okolorozwodowe'
        },
        {
          label: 'Mediacje rozwodowe',
          key: 'mediacje-rozwodowe'
        },
        {
          label: 'Mediacje gospodarcze',
          key: 'mediacje-gospodarcze'
        },
        {
          label: 'Mediacje cywilne',
          key: 'mediacje-cywilne'
        },
        {
          label: 'Mediacje spadkowe',
          key: 'mediacje-spadkowe'
        },
        {
          label: 'Mediacje sąsiedzkie',
          key: 'mediacje-sasiedzkie'
        },
        {
          label: 'Mediacje dla firm',
          key: 'mediacje-dla-firm'
        },
        {
          label: 'Mediacje z udziałem dzieci',
          key: 'mediacje-z-udzialem-dzieci'
        },
        {
          label: 'Mediacje online',
          key: 'mediacje-online'
        },
        {
          label: 'Mediacje',
          key: 'mediacje'
        }
      ]
    },
    {
      label: 'Terapia dla par',
      key: 'terapia-dla-par',
      items: [
        {
          label: 'Terapia małżeńska',
          key: 'terapia-dla-par-malzenska'
        },
        {
          label: 'Program „Razem czy osobno?"',
          key: 'terapia-dla-par-program-razem-czy-osobno'
        },
        {
          label: 'Warsztaty dla par',
          key: 'terapia-dla-par-warsztaty-dla-par'
        },
        {
          label: 'Konsultacje przedrozwodowe',
          key: 'terapia-dla-par-przedrozwodowa'
        },
        {
          label: 'Terapia po zdradzie',
          key: 'terapia-dla-par-po-zdradzie'
        },
        {
          label: 'Terapia dla par',
          key: 'terapia-dla-par'
        }
      ]
    },
    {
      label: 'Coaching',
      key: 'coaching',
      items: [
        {
          label: 'Coaching kariery',
          key: 'coaching-kariery'
        },
        {
          label: 'Coaching biznesowy',
          key: 'coaching-biznesowy'
        },
        {
          label: 'Coaching konfliktów',
          key: 'coaching-konfliktow'
        },
        {
          label: 'Coaching życiowy',
          key: 'coaching-zyciowy'
        },
        {
          label: 'Coaching indywidualny',
          key: 'coaching-indywidualny'
        },
        {
          label: 'Coaching',
          key: 'coaching'
        }
      ]
    },
    {
      label: 'Szkolenia',
      key: 'szkolenia',
      items: [
        {
          label: 'Szkolenia dla firm',
          key: 'szkolenia-dla-firm'
        },
        {
          label: 'Szkolenia z komunikacji',
          key: 'szkolenia-z-komunikacji'
        },
        {
          label: 'Szkolenia z mediacji',
          key: 'szkolenia-z-mediacji'
        },
        {
          label: 'Warsztaty rozwojowe',
          key: 'szkolenia-warsztaty-rozwojowe'
        },
        {
          label: 'Program współpracy dla firm',
          key: 'szkolenia-program-wspolpracy-dla-firm'
        },
        {
          label: 'Szkolenia',
          key: 'szkolenia'
        }
      ]
    }
  ]
}

export const flattenSections = page.sections.reduce(
  (results: SectionItem[], section) => ([...results, ...section.items]),
  []
)

export const getSilosName = (silos: string): string => {
  const result = flattenSections.find(
    item => item.key === silos
  )

  return result?.label || ''
}

export const enhanceServiceLink = (key: string, url: string) => {
  const link = flattenSections.find(item => item.key === key)

  return {
    ...link,
    href: `/${url}${link?.key}-szczecin`,
    title: link?.label || ''
  }
}
