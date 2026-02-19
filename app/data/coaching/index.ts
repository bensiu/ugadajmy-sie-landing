import type { DetailPageProps } from '~/types'

import { page as kariery } from './kariery'
import { page as biznesowy } from './biznesowy'
import { page as konfliktow } from './konfliktow'
import { page as zyciowy } from './zyciowy'
import { page as indywidualny } from './indywidualny'

import { addBreadCrumbs } from '../add-bread-crumbs'

export const interPage = { label: 'Coaching', href: 'coaching-szczecin' }

export const pages: { [key: string]: DetailPageProps } = {
  kariery: addBreadCrumbs(kariery, interPage),
  biznesowy: addBreadCrumbs(biznesowy, interPage),
  konfliktow: addBreadCrumbs(konfliktow, interPage),
  zyciowy: addBreadCrumbs(zyciowy, interPage),
  indywidualny: addBreadCrumbs(indywidualny, interPage)
}
