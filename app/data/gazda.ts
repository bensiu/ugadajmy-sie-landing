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
        }
      ]
    },
    {
      label: 'Terapia dla par',
      key: 'terapia-dla-par',
      items: [
        {
          label: 'Terapia małżeńska',
          key: 'terapia-dla-par-malzenska-szczecin'
        },
        {
          label: 'Program „Razem czy osobno?"',
          key: 'program-razem-czy-osobno-szczecin'
        },
        {
          label: 'Warsztaty dla&nbsp;par',
          key: 'warsztaty-dla-par-szczecin'
        },
        {
          label: 'Konsultacje przedrozwodowe',
          key: 'terapia-dla-par-przedrozwodowa-szczecin'
        },
        {
          label: 'Terapia po&nbsp;zdradzie',
          key: 'terapia-dla-par-po-zdradzie-szczecin'
        }
      ]
    },
    {
      label: 'Coaching',
      key: 'coaching',
      items: [
        {
          label: 'Coaching kariery',
          key: 'coaching-kariery-szczecin'
        },
        {
          label: 'Coaching biznesowy',
          key: 'coaching-biznesowy-szczecin'
        },
        {
          label: 'Coaching konfliktów',
          key: 'coaching-konfliktow-szczecin'
        },
        {
          label: 'Coaching życiowy',
          key: 'coaching-zyciowy-szczecin'
        },
        {
          label: 'Coaching indywidualny',
          key: 'coaching-indywidualny-szczecin'
        }
      ]
    },
    {
      label: 'Szkolenia',
      key: 'szkolenia',
      items: [
        {
          label: 'Szkolenia dla&nbsp;firm',
          key: 'szkolenia-dla-firm-szczecin'
        },
        {
          label: 'Szkolenia z&nbsp;komunikacji',
          key: 'szkolenia-z-komunikacji-szczecin'
        },
        {
          label: 'Szkolenia z&nbsp;mediacji',
          key: 'szkolenia-z-mediacji-szczecin'
        },
        {
          label: 'Warsztaty rozwojowe',
          key: '/szkolenia-warsztaty-rozwojowe-szczecin'
        },
        {
          label: 'Program współpracy dla&nbsp;firm',
          key: '/szkolenia-program-wspolpracy-dla-firm-szczecin'
        }
      ]
    }
  ]
}
