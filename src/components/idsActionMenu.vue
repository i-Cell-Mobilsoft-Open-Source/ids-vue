<script setup lang="ts">
  import { reactive, computed } from "vue";
  // import IdsButton from "../components/IdsButton.vue";
  // import IdsIconButton from "../components/IdsIconButton.vue";
  // import IdsActionItem from "../components/IdsActionItem.vue";
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

  const props = withDefaults(
    defineProps<{
      //buttonType?: "button" | "iconButton" | "actionItemButton",
      // actionPosition: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
      panelMode?: "filled" | "outlined" | "text";
      panelSize?: "compact" | "comfortable" | "spacious";
      position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
      // variant?:
      // | "primary"
      // | "secondary"
      // | "brand"
      // | "error"
      // | "success"
      // | "warning"
      // | "light"
      // | "dark"
      // | "surface";
      // leadingIcon?: object | undefined;
      // trailingIcon?: object | undefined;
      // isDisabled?: boolean;
    }>(),
    {
      panelMode: "filled",
      buttonType: "button",
      position: "topLeft",
      panelSize: "comfortable",
      // isDisabled: false,
      // variant: "primary",
      // leadingIcon: undefined,
      // trailingIcon: undefined,
    },
  );

  const actionPanelStyle = reactive({
    //enabled
    gap: `var(--ids-comp-action-panel-size-${props.panelSize}-gap)`,
    borderRadius:` var(--ids-comp-action-panel-size-${props.panelSize}-border-radius)`,
    background: `var(--ids-comp-action-panel-${props.panelMode}-color-bg-light-enabled)`,
    padding: `var(--ids-comp-action-panel-size-${props.panelSize}-padding-y)
    var(--ids-comp-action-panel-size-${props.panelSize}-padding-x)`,
    outlinedBorder: `var(--ids-comp-action-panel-size-${props.panelSize}-border) 
    solid var(--ids-comp-action-panel-${props.panelMode}-color-border-light-enabled)`,
  });

  const positionConfigs = computed(() => {
    const classes = {
      topLeft: "absolute bottom-0 left-0",
      topRight: "text-headline-large-prominent uppercase",
      bottomLeft: "text-headline-small-prominent",
      bottomRight: "whatever4",
      leftTop: "whatever5",
      leftBottom: "text-body-large-extra-prominent",
      rightTop: "text-body-large-extra-prominent",
      rightBottom: "text-body-large-extra-prominent",
    };
  return classes[props.position || "topLeft"];
});


</script>

<template>
  <Popover class="">    
    <PopoverButton as="div">
      <div class="relative">
        <div :class="positionConfigs">
          <slot name="action" />
        </div>
      </div>
    </PopoverButton>

    <transition      
      enter-active-class="custom-enter-active"
      enter-from-class="custom-enter-from"
      enter-to-class="custom-enter-to"
      leave-active-class="custom-leave-active"
      leave-from-class="custom-leave-from"
      leave-to-class="custom-leave-to"
    >
      <PopoverPanel :class="[panelMode, 'popover-panel']">
        <slot name="panel" />
      </PopoverPanel>
    </transition>
  </Popover>
</template> 

<style scoped lang="scss">

@mixin commonMixin {
  width: 365px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  gap: v-bind('actionPanelStyle.gap');
  padding: v-bind('actionPanelStyle.padding');
  background: v-bind('actionPanelStyle.background');
  border-radius: v-bind('actionPanelStyle.borderRadius');
}

:deep(button) {
  &:hover{
    border-color: transparent;
  }
  &:focus{
    outline: none !important;
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

/* Define your custom animations */
.custom-enter-active,
.custom-leave-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}

.custom-enter-from,
.custom-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.custom-enter-to,
.custom-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.relative {
  position: relative;
}
.absolute {
  position: absolute;
}

.top-0{
  top: 0px;
}

.left-0{
  left: 0px;
}

</style>
