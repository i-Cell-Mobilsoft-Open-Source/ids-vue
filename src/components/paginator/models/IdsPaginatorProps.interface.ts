import { SizeType } from "@models/size.type";
import { PaginatorPageButtonAppearanceType } from "@components/paginator/models/IdsPaginatorAppearance.type";
import { PaginatorVariantType } from "@components/paginator/models/IdsPaginatorVariant.type";

/**
 * Props for the IdsPaginator component
 */
export interface IdsPaginatorProps {
  /**
   * The id of the paginator
   */
  id?: string;

  /**
   * The number of items to display per page
   */
  pageSize?: number;

  /**
   * Options for the number of items per page
   */
  pageSizeOptions?: number[];

  /**
   * Determines whether to show "First" and "Last" navigation buttons
   */
  showFirstLastButton?: boolean;

  /**
   * Determines whether to show page information (e.g., "Page 1 of 10")
   */
  showPageInfo?: boolean;

  /**
   * Determines whether to show page navigation buttons
   */
  showPageButtons?: boolean;

  /**
   * Determines whether to show all page numbers
   */
  showAllPages?: boolean;

  /**
   * Determines whether to show all "Previous" and "Next" navigation buttons label
   */
  showPrevNextLabel?: boolean;

  /**
   * The maximum number of page buttons to display at once
   */
  maxDisplayedItemCount?: number;

  /**
   * The total number of items across all pages
   */
  length: number;

  /**
   * The appearance style of the page buttons
   */
  pageButtonAppearance?: PaginatorPageButtonAppearanceType;

  /**
   * The size of the paginator component
   */
  size?: SizeType;

  /**
   * The variant/style of the paginator
   */
  variant?: PaginatorVariantType;

  /**
   * Determines if the paginator is disabled
   */
  disabled?: boolean;

  /**
   * Determines if the paginator should be displayed in compact form
   */
  isCompact?: boolean;
}
