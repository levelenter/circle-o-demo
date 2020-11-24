
type BreadcrumbItem = {
  id: string
  name: string
}

export function getJsonLdBreadcrumbList(items: BreadcrumbItem[]) {
  if (!items) {
    throw new Error('require items')
  }
  const itemList = []
  for (let i = 0; i < items.length; i++) {
    itemList.push({
      '@type': 'ListItem',
      position: i,
      item: {
        '@id': items[i].id,
        name: items[i].name
      }
    })
  }
  return {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemList
  }
}
