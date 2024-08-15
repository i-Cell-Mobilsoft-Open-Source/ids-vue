import { Slot } from "vue";

/**
 * Slots available for the IdsSegmentedControlItem component
 */
export interface IdsSegmentedControlItemSlots {
  /**
   * Slot for adding an icon to the segmented control item
   */
  icon?: Slot<unknown>;

  /**
   * Slot for adding suffix content (e.g. additional text) to the segmented control item
   */
  suffixContent?: Slot<unknown>;
}
