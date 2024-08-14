/**
 * Events for the IdsSegmentedControl component
 */
export interface IdsSegmentedControlEvents {
  /**
   * Emitted when the segmented control value is updated.
   * @event update:modelValue
   * @type {unknown}
   */
  (e: 'update:modelValue', value: unknown): void;
}