<script setup lang="ts">
import { Size, SizeType } from '@models/size.type';
import { MessageVariant, MessageVariantType } from '@components/message/models/IdsMessageVariant.type.ts';
import { IdsMessageProps } from '@components/message/models/IdsMessageProps.interface.ts';
import { ComponentInternalInstance, computed, getCurrentInstance } from 'vue';
import { addClassPrefix } from '@core/utils/AddClassPrefix';

  const componentClass = 'ids-message';
  const componentTypeClass = 'ids-hint-message';
  const parent: ComponentInternalInstance | null | undefined = getCurrentInstance()?.parent;

  const props = withDefaults(
    defineProps<IdsMessageProps>(),{
        size: undefined,
        variant: undefined,
        disabled: undefined
    },
  );

  const disabled = computed<boolean>(() => {
    return props.disabled !== undefined ? 
      props.disabled : parent && parent.props['disabled'] ? 
      parent.props['disabled'] as boolean : false;
  });

  const variant = computed<string>(() => {
    return props.variant !== undefined ? 
      props.variant : parent && parent.props['variant'] ? 
      parent.props['variant'] as unknown as MessageVariantType : MessageVariant.SURFACE;
  });

  const size = computed<string>(() => {
    return props.size !== undefined ? 
      props.size : parent && parent.props['size'] ? 
      parent.props['size'] as SizeType : Size.COMFORTABLE;
  });

  const classObject = computed(() => ({
  [componentClass]: true,
  [componentTypeClass]: true,
  [addClassPrefix(componentClass, size.value)]: size.value,
  [addClassPrefix(componentClass, variant.value)]: variant.value,
  [addClassPrefix(componentClass, 'disabled')]: disabled.value,
}));
</script>
<template>
  <div :class="classObject">
    <div v-if="$slots.idsMessagePrefix" class="ids-message__prefix">
      <slot name="idsMessagePrefix" />
    </div>
    <div class="ids-message__text">
      <slot />
    </div>
    <div v-if="$slots.idsMessageSuffix" class="ids-message__suffix">
      <slot name="idsMessageSuffix" />
    </div>
  </div>
</template>