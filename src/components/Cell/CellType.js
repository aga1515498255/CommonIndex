import { defineAsyncComponent, shallowRef } from 'vue'

export const allCellType = {
  CardCell: '@/components/Cell/CardCell.vue',
  RowCell: '@/components/Cell/RowCell.vue',
  CarouselCell: '@/components/Cell/CarouselCell.vue',
  InfoCell: '@/components/Cell/InfoCell.vue'
}

export function useCellType() {
  const cellTypes = shallowRef({
    CardCell: defineAsyncComponent(() => import('@/components/Cell/CellItems/CardCell.vue')),
    RowCell: defineAsyncComponent(() => import('@/components/Cell/CellItems/RowCell.vue')),
    CarouselCell: defineAsyncComponent(
      () => import('@/components/Cell/CellItems/CarouselCell.vue')
    ),
    InfoCell: defineAsyncComponent(() => import('@/components/Cell/CellItems/InfoCell.vue'))
  })

  return { cellTypes }
}
