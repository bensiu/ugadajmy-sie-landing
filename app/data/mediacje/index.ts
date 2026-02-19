import type { DetailPageProps } from '~/types'

import { page as gospodarcze } from './gospodarcze'
import { page as okolorozwodowe } from './okolorozwodowe'
import { page as rozwodowe } from './rozwodowe'
import { page as spadkowe } from './spadkowe'
import { page as rodzinne } from './rodzinne'
import { page as cywilne } from './cywilne'
import { page as sasiedzkie } from './sasiedzkie'
import { page as dla_firm } from './dla-firm'
import { page as z_udzialem_dzieci } from './z-udzialem-dzieci'
import { page as online } from './online'

import { addBreadCrumbs } from '../add-bread-crumbs'

export const interPage = { label: 'Mediacje', href: 'mediacje-szczecin' }

export const pages: { [key: string]: DetailPageProps } = {
  gospodarcze: addBreadCrumbs(gospodarcze, interPage),
  okolorozwodowe: addBreadCrumbs(okolorozwodowe, interPage),
  rozwodowe: addBreadCrumbs(rozwodowe, interPage),
  spadkowe: addBreadCrumbs(spadkowe, interPage),
  rodzinne: addBreadCrumbs(rodzinne, interPage),
  cywilne: addBreadCrumbs(cywilne, interPage),
  sasiedzkie: addBreadCrumbs(sasiedzkie, interPage),
  dla_firm: addBreadCrumbs(dla_firm, interPage),
  z_udzialem_dzieci: addBreadCrumbs(z_udzialem_dzieci, interPage),
  online: addBreadCrumbs(online, interPage)
}
