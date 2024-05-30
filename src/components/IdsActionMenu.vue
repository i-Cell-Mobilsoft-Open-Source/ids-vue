<script setup lang="ts">
import { ref, reactive, computed, onMounted, defineProps, withDefaults, onBeforeUnmount } from "vue";

const emit = defineEmits(['update:show']);

const panelRef = ref<HTMLElement | undefined>(undefined);
const slotRef = ref<HTMLElement | undefined>(undefined);
const horizontalPanelPosition = ref<string>('0px')
const verticalPanelPosition = ref<string>('0px')

const props = withDefaults(
  defineProps<{
    show?: boolean,
    firstPanel?: boolean,
    panelMode?: "filled" | "outlined" | "elevated",
    panelSize?: "dense" | "compact" | "comfortable" | "spacious",
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom",
  }>(),
  {
    show: false,
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
  outlinedBorder: `var(--ids-comp-size-action-panel-size-border-${props.panelSize}) 
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

const openMenu = (event: MouseEvent) => {
  event.stopPropagation();
  emit('update:show', true);
  document.addEventListener('click', closeMenu);
};

const closeMenu = (event?: MouseEvent) => {
  if (event && panelRef.value?.contains(event.target as Node)) {
    return;
  }
  emit('update:show', false);
  document.removeEventListener('click', closeMenu);

};

const handleClickInside = () => {
  emit('update:show', false); 
  document.removeEventListener('click', closeMenu);
};

onMounted(() => {
  if (slotRef.value instanceof HTMLElement) {
    horizontalPanelPosition.value = slotRef.value.offsetWidth + 'px';
    verticalPanelPosition.value = slotRef.value.offsetHeight + 'px';
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu);
});

</script>

<template>
  <div class="relative" @click="openMenu">
    <div ref="slotRef">
      <slot name="action" />
    </div>

    <transition name="panel-fade">
      <div v-if="show" ref="panelRef" :class="[props.panelMode, panelPositions, '[&>*]:w-full z-20']">
        <template v-if="props.firstPanel">
          <div class="[&>*]:w-full" @click.stop="handleClickInside">
            <slot name="panel" />
          </div>
        </template>
        <template v-else>
          <div class="[&>*]:w-full" @click.stop="handleClickInside">
            <slot name="panel" />
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@mixin commonMixin {
  width: max-content;
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
}

.outlined {
  @include commonMixin;
  border: v-bind('actionPanelStyle.outlinedBorder');
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
}

.elevated {
  @include commonMixin;
  box-shadow:
    var(--ids-smc-reference-container-effects-shadow-horizontal-none) 
    var(--ids-smc-reference-container-effects-shadow-vertical-xxl) 
    var(--ids-smc-reference-container-effects-shadow-blur-xxxl) 
    var(--ids-smc-reference-container-effects-shadow-spread-xxs) 
    var(--ids-smc-reference-container-effects-shadow-color-dark-default);
}

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
}

.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.panel-fade-enter-to,
.panel-fade-leave-from {
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
  bottom: v-bind('verticalPanelPosition');
}

.left-horizontal {
  left: v-bind('horizontalPanelPosition');
}

.right-horizontal {
  right: v-bind('horizontalPanelPosition');
}
</style>
