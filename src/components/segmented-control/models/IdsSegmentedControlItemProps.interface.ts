/**
 * Props for the IdsSegmentedControlItem component
 */
export interface IdsSegmentedControlItemProps {
  /**
   * The unique identifier for the segmented control item
   */
  id?: string;

  /**
   * The name of the segmented control item, useful for form submissions
   */
  name?: string;

  /**
   * The label displayed on the segmented control item
   */
  label?: string;

  /**
   * The value associated with the segmented control item
   */
  value: unknown;

  /**
   * The ARIA label for accessibility purposes
   */
  ariaLabel?: string;

  /**
   * The ID of the element that labels this segmented control item (ARIA labelledby)
   */
  ariaLabelledBy?: string;

  /**
   * The ID of the element that provides additional description for this segmented control item (ARIA describedby)
   */
  ariaDescribedBy?: string;

  /**
   * The tabindex attribute for keyboard navigation
   */
  tabindex?: number;

  /**
   * Determines if the segmented control item is disabled
   */
  disabled?: boolean;
}
