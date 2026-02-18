import type { BreadCrumbsItem, DetailPageProps } from '~/types'

export const addBreadCrumbs = (data: DetailPageProps, interPage?: BreadCrumbsItem): DetailPageProps => {
  if (!data.breadCrumbsLabel) return data

  return {
    ...data,
    breadCrumbs: interPage
      ? [
          { label: 'Strona Główna', href: '/' },
          interPage,
          { label: data.breadCrumbsLabel }
        ]
      : [
          { label: 'Strona Główna', href: '/' },
          { label: data.breadCrumbsLabel }
        ]
  }
}
