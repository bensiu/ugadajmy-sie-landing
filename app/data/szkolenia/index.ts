import type { DetailPageProps } from '~/types'

import { page as dla_firm } from './dla-firm'
import { page as z_komunikacji } from './z-komunikacji'
import { page as z_mediacji } from './z-mediacji'
import { page as warsztaty_rozwojowe } from './warsztaty-rozwojowe'
import { page as program_wspolpracy_dla_firm } from './program-wspolpracy-dla-firm'

export const pages: { [key: string]: DetailPageProps } = {
  dla_firm,
  z_komunikacji,
  z_mediacji,
  warsztaty_rozwojowe,
  program_wspolpracy_dla_firm
}
