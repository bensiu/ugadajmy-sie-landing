import type { DetailPageProps } from '~/types'

import { page as malzenska } from './malzenska'
import { page as przedrozwodowa } from './przedrozwodowa'
import { page as po_zdradzie } from './po-zdradzie'

export const pages: { [key: string]: DetailPageProps } = {
  malzenska,
  przedrozwodowa,
  po_zdradzie
}
