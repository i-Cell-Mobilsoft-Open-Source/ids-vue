<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const slotRef = ref<HTMLElement | undefined>(undefined);
const horizontalPanelPosition = ref<string>('0px')
const verticalPanelPostion = ref<string>('0px')

const props = withDefaults(
  defineProps<{
    firstPanel?: boolean;
    panelMode?: "filled" | "outlined" | "text";
    panelSize?: "compact" | "comfortable" | "spacious";
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
  }>(),
  {
    firstPanel: true,
    panelMode: "filled",
    buttonType: "button",
    position: "topLeft",
    panelSize: "comfortable",
  },
);

const actionPanelStyle = reactive({
  //enabled
  gap: `var(--ids-comp-size-action-panel-size-gap-${props.panelSize})`,
  borderRadius: ` var(--ids-comp-size-action-panel-size-border-radius-${props.panelSize})`,
  background: `var(--ids-comp-action-panel-${props.panelMode}-color-bg-light-enabled)`,
  padding: `var(--ids-comp-size-action-panel-size-padding-y-${props.panelSize})
      var(--ids-comp-size-action-panel-size-padding-x-${props.panelSize})`,
  outlinedBorder: `var(--ids-comp-action-panel-size-${props.panelSize}-border) 
      solid var(--ids-comp-action-panel-${props.panelMode}-color-border-light-enabled)`,
});

const panelPositions = computed(() => {
  const classes = {
    bottomLeft: "absolute",
    bottomRight: "absolute right-0",
    topLeft: "absolute bottom-vertical",
    topRight: "absolute bottom-vertical right-0",
    leftBottom: "absolute right-horizontal top-0",
    rightTop: "absolute bottom-0 left-horizontal ",
    leftTop: "absolute bottom-0 right-horizontal",
    rightBottom: "absolute top-0 left-horizontal",
  };
  return classes[props.position || "topLeft"];
});

onMounted(() => {
  if (slotRef?.value instanceof HTMLElement) {
    horizontalPanelPosition.value = slotRef?.value?.offsetWidth + 'px';
    verticalPanelPostion.value = slotRef?.value?.offsetHeight + 'px';
    console.log(horizontalPanelPosition.value);
    console.log(slotRef?.value?.offsetHeight);
  }
});

</script>

<template>
  <div class="relative w-fit">
    <Popover>
      <PopoverButton as="div">
        <div ref="slotRef" :class="[]">
          <slot name="action" />
        </div>
      </PopoverButton>

      <transition enter-active-class="custom-enter-active" enter-from-class="custom-enter-from"
        enter-to-class="custom-enter-to" leave-active-class="custom-leave-active" leave-from-class="custom-leave-from"
        leave-to-class="custom-leave-to">
        <PopoverPanel :class="[panelMode, panelPositions, '[&>*]:w-full']">
          <template v-if="firstPanel">
            <slot name="panel" />
          </template>
          <template v-else>
            <div>
              <slot name="panel" />
            </div>
          </template>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
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

.w-fit {
  width: fit-content;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.top-0 {
  top: 0px;
}

.bottom-0 {
  bottom: 0px;
}

.right-0 {
  right: 0px;
}

.bottom-vertical {
  bottom: v-bind('verticalPanelPostion');
}

.left-horizontal {
  left: v-bind('horizontalPanelPosition');
}

.right-horizontal {
  right: v-bind('horizontalPanelPosition');
}
</style>
