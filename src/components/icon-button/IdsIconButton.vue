<script setup lang="ts">
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import IdsIcon from '@components/icon/IdsIcon.vue';
import { computed } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { IdsIconButtonProps } from '@components/icon-button/models/IdsIconButtonProps.interface';
import { IdsIconButtonAppearance } from '@components/icon-button/models/IdsIconButtonAppearance.type';
import { IdsIconButtonTypeAttribute } from '@components/icon-button/models/IdsButtonTypeAttribute.type';

const componentClass = 'ids-icon-button';

const props = withDefaults(defineProps<IdsIconButtonProps>(), {
  type: IdsIconButtonTypeAttribute.BUTTON,
  appearance: IdsIconButtonAppearance.FILLED,
  icon: undefined,
  disabled: false,
  variant: AllVariants.PRIMARY,
  size: Size.COMFORTABLE,
});

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
    :disabled="disabled" 
    :class="classObject"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <IdsIcon v-if="props.icon" :icon="props.icon" />
  </button>
</template>
