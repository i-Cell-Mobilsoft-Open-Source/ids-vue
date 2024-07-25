export interface PaginatorPageEvent {
  pageIndex: number;
  previousPageIndex?: number;
  pageSize: number;
  length: number;
}

/**
 * Events for the IdsPagination component
 */
export interface IdsPaginationEvents {
  /**
   * Emitted when the pagination value is updated.
   * @event page
   * @type {PaginatorPageEvent}
   */
  (e: 'page', value: PaginatorPageEvent): void;
}