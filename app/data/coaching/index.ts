import type { DetailPageProps } from '~/types'

import { page as kariery } from './kariery'
import { page as biznesowy } from './biznesowy'
import { page as konfliktow } from './konfliktow'
import { page as zyciowy } from './zyciowy'
import { page as indywidualny } from './indywidualny'

export const pages: { [key: string]: DetailPageProps } = {
  kariery,
  biznesowy,
  konfliktow,
  zyciowy,
  indywidualny
}
