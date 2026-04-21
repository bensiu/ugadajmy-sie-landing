export default function<T>(url: string) {
  const itemsData = ref<T[]>([])
  const uniqueKey = ref<number>(0)
  const itemEditId = ref<string | null>(null)
  const itemEditItem = ref<T | null>(null)
  const itemLoading = ref<boolean>(false)

  const pullItems = async (value: string | number, all: boolean = true) => {
    itemLoading.value = true
    await $fetch(url, { query: { subject: value, all } })
      .then((response) => {
        itemsData.value = response as unknown as T[] || []
      })

    itemEditItem.value = null
    itemEditId.value = null
    itemLoading.value = false
    uniqueKey.value++
  }

  const handleSubmitOfItem = (submitted: boolean, silosId: string) => {
    if (submitted) {
      itemEditItem.value = null
      itemEditId.value = null
      uniqueKey.value++
      pullItems(silosId)
    }
  }

  const handleEditOfItem = (item: T & { silos: string }) => {
    itemEditItem.value = item
    itemEditId.value = item.silos
    uniqueKey.value++
  }

  return {
    itemsData,
    itemEditId,
    itemEditItem,
    itemLoading,

    pullItems,
    handleSubmitOfItem,
    handleEditOfItem,
    uniqueKey
  }
}
