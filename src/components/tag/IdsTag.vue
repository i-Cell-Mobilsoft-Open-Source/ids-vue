<script setup lang="ts">
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';
import { computed } from 'vue';
import IdsIcon from '@components/icon/IdsIcon.vue';
import { IdsTagSlots } from '@components/tag/models/IdsTagSlots.interface';
import { IdsTagProps } from '@components/tag/models/IdsTagProps.interface';
import { IdsTagAppearance } from '@components/tag/models/IdsTagAppearance.type';

const componentClass = 'ids-tag';
defineSlots<IdsTagSlots>();

const props = withDefaults(defineProps<IdsTagProps>(), {
  appearance: IdsTagAppearance.FILLED,
  size: Size.COMFORTABLE,
  variant: AllVariants.PRIMARY,
  leadingIcon: undefined,
  trailingIcon: undefined,
  interactive: false,
  link: undefined,
});

const hrefLink = computed(() => (props.interactive ? props.link : undefined));
const componentType = computed(() => (props.interactive  ? 'a' : 'div'));

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
}));

</script>

<template>
  <component
    :is="componentType" 
    :href="hrefLink" 
    :class="classObject"
  >
    <IdsIcon v-if="props.leadingIcon" :icon="props.leadingIcon" />
    <span class="ids-tag-label"><slot /></span>
    <IdsIcon v-if="props.trailingIcon" :icon="props.trailingIcon" />
  </component> 
</template>