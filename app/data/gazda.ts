interface AdminPageStructure {
  sections: {
    label: string
    key: string
    items: {
      label: string
      key: string
    }[]
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
          key: 'program-razem-czy-osobno'
        },
        {
          label: 'Warsztaty dla par',
          key: 'warsztaty-dla-par'
        },
        {
          label: 'Konsultacje przedrozwodowe',
          key: 'terapia-dla-par-przedrozwodowa'
        },
        {
          label: 'Terapia po zdradzie',
          key: 'terapia-dla-par-po-zdradzie'
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
        }
      ]
    }
  ]
}
