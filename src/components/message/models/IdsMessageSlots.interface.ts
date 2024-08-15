import { Slot } from "vue";

/**
 * Slots available for the message component
 */
export interface IdsMessageSlots {
  /**
   * Slot for adding prefix content, which can only be icon
   */
  idsMessagePrefix?: Slot<unknown>;

  /**
   * The default slot content.
   */
  default?: Slot<unknown>;

  /**
   * Slot for adding suffix content
   */
  idsMessageSuffix?: Slot<unknown>;
}