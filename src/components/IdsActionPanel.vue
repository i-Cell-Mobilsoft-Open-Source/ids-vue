<script setup lang="ts">

import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    mode?: "filled" | "outlined" | "elevated";
    size?: "compact" | "comfortable" | "spacious";
    variant?: "light";
  }>(),
  {
    mode: "filled",
    variant: "light",
    size: "comfortable",
  },
);

const actionPanelStyle = reactive({
  //enabled
  gap: `var(--ids-comp-action-panel-size-${props.size}-gap)`,
  borderRadius:` var(--ids-comp-action-panel-size-${props.size}-border-radius)`,
  background: `var(--ids-comp-action-panel-${props.mode}-color-bg-light-enabled)`,
  padding: `var(--ids-comp-action-panel-size-${props.size}-padding-y)
   var(--ids-comp-action-panel-size-${props.size}-padding-x)`,
  outlinedBorder: `var(--ids-comp-action-panel-size-${props.size}-border) 
  solid var(--ids-comp-action-panel-${props.mode}-color-border-light-enabled)`,

  //items
  itemsGap: `var(--comp-menu-item-size-${props.size}-gap)`,
  itemsHeight: `var(--comp-menu-item-size-${props.size}-height)`,
  itemsPadding: `var(--comp-menu-item-size-${props.size}-padding-y) var(--comp-menu-item-size-${props.size}-padding-x)`,

  //icon sizes
  iconWidthHeight: `var(--ids-comp-buttons-size-${props.size}-icon)`,
});

</script>

<template>
  <div :class="[mode, 'items-container']">
    <slot class="items" />
  </div>
</template>

<style scoped lang="scss">

@mixin commonMixin {
  // display: flex;
  min-width: 100px;
  // flex-direction: column;
  // align-items: flex-start;  
  gap: v-bind('actionPanelStyle.gap');
  background: v-bind('actionPanelStyle.background');
  border-radius: v-bind('actionPanelStyle.borderRadius');
}

::v-deep button {
  &:hover{
    border-color: transparent;
  }
  &:focus{
    outline: none;
  }
}
  


.filled {
  @include commonMixin;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
}

.outlined{
  @include commonMixin;
  border: v-bind('actionPanelStyle.outlinedBorder');
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
}

.elevated{
  @include commonMixin;
  box-shadow: 
  var(--ids-smc-reference-container-effects-tw-shadow-horizontal-none)
  var(--ids-smc-reference-container-effects-tw-shadow-vertical-xxl) 
  var(--ids-smc-reference-container-effects-tw-shadow-blur-xxxl) 
  var(--ids-smc-reference-container-effects-tw-shadow-spread-xxs) 
  var(--ids-smc-reference-container-effects-tw-shadow-color-dark-darker);
}

.items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--comp-action-panel-size-compact-gap, 8px);
  align-self: stretch;
  width: 356px;
  padding: var(--comp-action-panel-size-compact-padding-y, 8px) var(--comp-action-panel-size-compact-padding-x, 8px);
  gap: var(--comp-action-panel-size-compact-gap, 8px);
}

.items {
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: v-bind('actionPanelStyle.itemsGap');
  height: v-bind('actionPanelStyle.itemsHeight');
  padding: v-bind('actionPanelStyle.itemsPadding');
  background: var(--ids-comp-menu-item-color-bg-enabled);
  border: 1px solid var(--ids-comp-menu-item-color-border-enabled);
  border-radius: var(--ids-comp-menu-item-size-spacious-border-radius);
 
}

</style>