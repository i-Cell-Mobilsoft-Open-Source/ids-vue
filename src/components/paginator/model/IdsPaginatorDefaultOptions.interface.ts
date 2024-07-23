import { SizeType } from "@models/size.type"
import { PaginatorPageButtonAppearanceType } from "@components/paginator/model/IdsPaginatorAppearance.type"
import { PaginatorVariantType } from "@components/paginator/model/IdsPaginatorVariant.type"

export interface IdsPaginatorDefaultOptions {
  pageSize?: number
  pageSizeOptions?: number[]
  showFirstLastButton?: boolean
  showPageInfo?: boolean
  showPageButtons?: boolean
  showAllPages?: boolean
  maxDisplayedItemCount?: number
  size?: SizeType
  variant?: PaginatorVariantType
  pageButtonAppearance?: PaginatorPageButtonAppearanceType
}