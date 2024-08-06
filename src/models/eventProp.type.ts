import { PropType } from "vue";

export type EventProp<T extends unknown[] = unknown[], F = (...args: T) => void> = F;
export const EventProp = <T extends unknown[] = unknown[]>() => [Function, Array] as PropType<EventProp<T>>