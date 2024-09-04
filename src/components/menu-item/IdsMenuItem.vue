<script setup lang="ts">
import { computed } from "vue";
import { IdsMenuItemProps } from "@components/menu-item/models/IdsMenuItemProps.interface";
import { addClassPrefix } from "@core/utils/AddClassPrefix";
import IdsIcon from "@components/icon/IdsIcon.vue";
import { IdsMenuItemSlots } from "@components/menu-item/models/IdsMenuItemSlots.interface";
import { Size } from "@models/size.type";
import { IdsMenuItemVariant } from "@components/menu-item/models/IdsMenuItemVariant.type";
import { IdsMenuItemAppearance } from "@components/menu-item/models/IdsMenuItemAppearance.type";
import { IdsMenuItemTypeAttribute } from "@components/menu-item/models/IdsMenuItemTypeAttribute.type";

const componentClass = 'ids-action-item';
defineSlots<IdsMenuItemSlots>();

const props = withDefaults(
  defineProps<IdsMenuItemProps>(),    
  {
    type: IdsMenuItemTypeAttribute.BUTTON,
    link: undefined,
    isActive: false,
    disabled: false,
    variant: IdsMenuItemVariant.SURFACE,
    appearance: IdsMenuItemAppearance.TEXT,
    size: Size.COMFORTABLE,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
);

const hrefLink = computed(() => (props.type === IdsMenuItemTypeAttribute.LINK ? props.link : undefined));
const componentType = computed(() => (props.type === IdsMenuItemTypeAttribute.BUTTON ? 'button' : 'a'));
const buttonType = computed(() => (props.type === IdsMenuItemTypeAttribute.BUTTON ? 'button' : undefined));

const classObject = computed(() => ({
  [componentClass]: true,
  [addClassPrefix(componentClass, props.size)]: !!props.size,
  [addClassPrefix(componentClass, props.appearance)]: !!props.appearance,
  [addClassPrefix(componentClass, props.variant)]: !!props.variant,
  [addClassPrefix(componentClass, 'active')]: props.isActive,
}));

</script>

<template>
  <component
    :is="componentType" 
    :type="buttonType" 
    :href="hrefLink"
    :class="classObject"
    :disabled="props.disabled" 
    :aria-disabled="props.disabled ? 'true' : undefined"
  >
    <IdsIcon v-if="props.leadingIcon" :icon="props.leadingIcon" />
    <span class="ids-action-item-label"><slot /></span>
    <IdsIcon v-if="props.trailingIcon" :icon="props.trailingIcon" />
  </component>
</template>
