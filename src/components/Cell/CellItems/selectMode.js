import { computed } from 'vue'

export function useSelectMode(selectedItems) {
  //

  //   const seletedItems = seletedItems

  const isSelected = (articleId) => {
    return computed(() => {
      if (selectedItems.value == undefined) {
        return false
      } else {
        return selectedItems.value.includes(articleId)
      }
    })
  }

  const handleClickItem = (articleId) => {
    //点击item触发编辑
    console.log('in handle click item')
    if (isSelected(articleId).value) {
      console.log('in isSelected')

      for (let i = 0; i < selectedItems.value.length; ++i) {
        if (selectedItems.value[i] == articleId) {
          const t = selectedItems.value[i]
          selectedItems.value[i] = selectedItems.value[0]
          selectedItems.value[0] = t
          break
        }
      }
      selectedItems.value.shift()
    } else {
      console.log('in isNotSelected')
      selectedItems.value.push(articleId)
    }

    console.log(selectedItems.value)
  }

  return { isSelected, handleClickItem }
}
