<script setup lang="ts">
import { reactive } from "vue";
const props = withDefaults(
  defineProps<{
    mode?: "filled" | "outlined" | "elevated",
    size?: "dense" | "compact" | "comfortable" | "spacious",
    variant?:
    | "primary"
    | "secondary"
    | "surface"
    | "brand"
    | "error"
    | "success"
    | "warning"
    | "light"
    | "dark",
    leadingIcon?: object | undefined,
    trailingIcon?: object | undefined,
    isDisabled?: boolean,
  }>(),
  {
    mode: "filled",
    isDisabled: false,
    variant: "surface",
    size: "comfortable",
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const cardStyle = reactive({
  gap: `var(--ids-comp-size-cards-container-size-gap-${props.size}, 24px)`,
  padding: `var(--ids-comp-size-cards-container-size-padding-top-${props.size}, 24px) 
  var(--ids-comp-size-cards-container-size-padding-right-${props.size}, 0px) 
  var(--ids-comp-size-cards-container-size-padding-bottom-${props.size}, 24px) 
  var( --ids-comp-size-cards-container-size-padding-left-${props.size}, 0px)`,
  background: `var(--ids-comp-cards-filled-color-bg-${props.variant}-enabled, #003CFF)`,
  borderRadius: `var(--ids-comp-size-cards-container-size-border-radius-${props.size}, 32px)`,
  border: `var(--ids-comp-size-cards-container-size-border-none-${props.size}, 0px) solid var(--ids-comp-cards-filled-color-border-primary-enabled, #A3BAFF)`,
})
</script>

<template>
  <div class="ids-card">
    <div v-if="$slots.cardHeader" class="w-full">
      <slot name="cardHeader" />
    </div>
    <div v-if="$slots.cardMedia" class="w-full">
      <slot name="cardMedia" />
    </div>
    <div v-if="$slots.cardBody" class="w-full">
      <slot name="cardBody" />
    </div>
    <div v-if="$slots.cardFooter" class="w-full">
      <slot name="cardFooter" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ids-card {
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  gap: v-bind("cardStyle.gap");
  border: v-bind("cardStyle.border");
  padding: v-bind("cardStyle.padding");
  background: v-bind("cardStyle.background");
  border-radius: v-bind("cardStyle.borderRadius");
}
</style>