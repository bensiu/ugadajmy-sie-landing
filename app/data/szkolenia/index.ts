import type { DetailPageProps } from '~/types'

import { page as dla_firm } from './dla-firm'
import { page as z_komunikacji } from './z-komunikacji'
import { page as z_mediacji } from './z-mediacji'
import { page as warsztaty_rozwojowe } from './warsztaty-rozwojowe'
import { page as program_wspolpracy_dla_firm } from './program-wspolpracy-dla-firm'

import { addBreadCrumbs } from '../add-bread-crumbs'

export const interPage = { label: 'Szkolenia', href: 'szkolenia-szczecin' }

export const pages: { [key: string]: DetailPageProps } = {
  dla_firm: addBreadCrumbs(dla_firm, interPage),
  z_komunikacji: addBreadCrumbs(z_komunikacji, interPage),
  z_mediacji: addBreadCrumbs(z_mediacji, interPage),
  warsztaty_rozwojowe: addBreadCrumbs(warsztaty_rozwojowe, interPage),
  program_wspolpracy_dla_firm: addBreadCrumbs(program_wspolpracy_dla_firm, interPage)
}
