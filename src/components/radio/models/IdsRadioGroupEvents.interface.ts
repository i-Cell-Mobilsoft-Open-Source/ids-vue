/**
 * Events for the IdsRadioGroup component
 */
export interface IdsRadioGroupEvents {
  /**
   * Emitted when the radio group value is updated.
   * @event update:modelValue
   * @type {unknown}
   */
  (e: 'update:modelValue', value: unknown): void;
}