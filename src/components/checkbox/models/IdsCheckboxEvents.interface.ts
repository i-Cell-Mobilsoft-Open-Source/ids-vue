/**
 * Events for the IdsCheckbox component
 */
export interface IdsCheckboxEvents {
  /**
   * Emitted when the checkbox value is updated.
   * @event update:modelValue
   * @type {boolean | Array<unknown>}
   */
  (e: 'update:modelValue', value: boolean | Array<unknown>): void;
  /**
   * Emitted when the checkbox receives focus.
   * @event focus
   * @type {Event}
   */
  (e: 'focus', event: Event): void;
  /**
   * Emitted when the checkbox loses focus.
   * @event blur
   * @type {Event}
  */
  (e: 'blur', value: Event): void;
  /**
   * Emitted when the indeterminate state of the checkbox is updated.
   * @event update:indeterminate
   * @type {boolean}
   */
  (e: 'update:indeterminate', value: boolean): void;
}