import { Slot } from "vue";

/**
 * Slots for the IdsCheckbox component
 */
export interface IdsCheckboxSlots {
  /**
   * The default slot content.
   * @slot default
   */
  default?: Slot<unknown>;
  /**
   * Content for the error message slot.
   * @slot IdsErrorMsg
   */
  IdsErrorMsg?: Slot<unknown>;
  /**
   * Content for the hint message slot.
   * @slot IdsHintMsg
   */
  IdsHintMsg?: Slot<unknown>;
}