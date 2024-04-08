<script setup lang="ts">
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    mode?: "filled" | "outlined" | "elevated";
    size?: "compact";
    variant?: "light";
  }>(),
  {
    mode: "filled",
    variant: "light",
    size: "compact",
  },
);

const actionPanelStyle = reactive({
  //enabled
  gap: `var(--ids-comp-size-action-panel-size-gap-${props.size})`,
  borderRadius: ` var(--ids-comp-size-action-panel-size-border-radius-${props.size})`,
  background: `var(--ids-comp-action-panel-${props.mode}-color-bg-light-enabled)`,
  padding: `var(--ids-comp-size-action-panel-size-padding-y-${props.size})
    var(--ids-comp-size-action-panel-size-padding-x-${props.size})`,
  outlinedBorder: `var(--ids-comp-action-panel-size-${props.size}-border) 
    solid var(--ids-comp-action-panel-${props.mode}-color-border-light-enabled)`,
});

</script>

<template>
  <div :class="[mode, '[&>*]:w-full']">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@mixin commonMixin {
  display: flex;
  width: 365px;
  flex-direction: column;
  align-items: flex-start;
  gap: v-bind('actionPanelStyle.gap');
  padding: v-bind('actionPanelStyle.padding');
  background: v-bind('actionPanelStyle.background');
  border-radius: v-bind('actionPanelStyle.borderRadius');
}

:deep(button) {
  &:hover {
    border-color: transparent;
  }

  &:focus {
    outline: none !important;
  }
}

.filled {
  @include commonMixin;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
}

.outlined {
  @include commonMixin;
  border: v-bind('actionPanelStyle.outlinedBorder');
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
}

.elevated {
  @include commonMixin;
  box-shadow:
    var(--ids-smc-reference-container-effects-tw-shadow-horizontal-none) var(--ids-smc-reference-container-effects-tw-shadow-vertical-xxl) var(--ids-smc-reference-container-effects-tw-shadow-blur-xxxl) var(--ids-smc-reference-container-effects-tw-shadow-spread-xxs) var(--ids-smc-reference-container-effects-tw-shadow-color-dark-darker);
}
</style>