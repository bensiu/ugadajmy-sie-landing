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

export const pages: { [key: string]: DetailPageProps } = {
  gospodarcze,
  okolorozwodowe,
  rozwodowe,
  spadkowe,
  rodzinne,
  cywilne,
  sasiedzkie,
  dla_firm,
  z_udzialem_dzieci,
  online
}
