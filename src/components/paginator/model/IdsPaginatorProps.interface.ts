import { SizeType } from "@models/size.type";
import { PaginatorPageButtonAppearanceType } from "@components/paginator/model/IdsPaginatorAppearance.type";
import { PaginatorVariantType } from "@components/paginator/model//IdsPaginatorVariant.type";

export interface IdsPaginatorProps {
  id?: string;
  pageSize?: number;
  pageSizeOptions?: number[];
  showFirstLastButton?: boolean;
  showPageInfo?: boolean;
  showAllPages?: boolean;
  maxDisplayedItemCount?: number;
  length: number;
  pageButtonAppearance?: PaginatorPageButtonAppearanceType;
  size?: SizeType;
  variant?: PaginatorVariantType;
  disabled?: boolean;
  isCompact?: boolean;
}