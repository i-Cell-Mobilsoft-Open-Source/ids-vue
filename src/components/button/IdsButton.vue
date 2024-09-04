<script setup lang="ts">
import { Size } from "@models/size.type";
import { AllVariants } from "@models/variants";
import { computed } from "vue";
import { addClassPrefix } from "@core/utils/AddClassPrefix";
import IdsIcon from "@components/icon/IdsIcon.vue";
import { IdsButtonProps } from "@components/button/models/IdsButtonProps.interface";
import { IdsButtonTypeAttribute } from "@components/button/models/IdsButtonTypeAttribute.type";
import { IdsButtonAppearance } from "@components/button/models/IdsButtonAppearance.type";
import { IdsButtonSlots } from "@components/button//models/IdsButtonSlots.interface";

const componentClass = 'ids-button';
defineSlots<IdsButtonSlots>();

const props = withDefaults(
  defineProps<IdsButtonProps>(),
  {
    type: IdsButtonTypeAttribute.BUTTON,
    appearance: IdsButtonAppearance.FILLED,
    variant: AllVariants.PRIMARY,
    disabled: false,
    size: Size.COMFORTABLE,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
}));
</script>

<template>
  <button
    :type="type" 
    :disabled="props.disabled" 
    :class="classObject"
    :aria-disabled="props.disabled ? 'true' : undefined"
  >
    <IdsIcon v-if="props.leadingIcon" :icon="props.leadingIcon" />
    <span class="ids-button-label"><slot /></span>
    <IdsIcon v-if="props.trailingIcon" :icon="props.trailingIcon" />
  </button>
</template>
