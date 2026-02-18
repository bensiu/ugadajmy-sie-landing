import type { DetailPageProps } from '~/types'

import { page as malzenska } from './malzenska'
import { page as przedrozwodowa } from './przedrozwodowa'
import { page as po_zdradzie } from './po-zdradzie'

import { addBreadCrumbs } from '../add-bread-crumbs'

export const interPage = { label: 'Terapia dla par', href: 'terapia-dla-par-szczecin' }

export const pages: { [key: string]: DetailPageProps } = {
  malzenska: addBreadCrumbs(malzenska, interPage),
  przedrozwodowa: addBreadCrumbs(przedrozwodowa, interPage),
  po_zdradzie: addBreadCrumbs(po_zdradzie, interPage)
}
