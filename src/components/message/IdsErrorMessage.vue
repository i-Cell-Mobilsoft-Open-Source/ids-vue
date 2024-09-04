<script setup lang="ts">
import IdsAlertIcon from '@assets/IdsAlertIcon.vue';
import { IdsMessageProps } from '@components/message/models/IdsMessageProps.interface.ts';
import { useMessage } from '@components/message/composables/useMessage';
import { toRef } from 'vue';
import { IdsMessageSlots } from '@components/message/models/IdsMessageSlots.interface';

  const componentClass = 'ids-message';
  const componentTypeClass = 'ids-error-message';
  defineSlots<IdsMessageSlots>();

  const props = withDefaults(
    defineProps<IdsMessageProps>(),{
        size: undefined,
        variant: undefined,
        disabled: undefined
    },
  );

  const { classObject } = useMessage(
    toRef(() => props.size),
    toRef(() => props.variant),
    toRef(() => props.disabled),
    componentClass, 
    componentTypeClass
  );

</script>
<template>
  <div :class="classObject">
    <div class="ids-message__prefix">
      <slot name="idsMessagePrefix">
        <IdsAlertIcon />
      </slot>
    </div>
    <div class="ids-message__text">
      <slot />
    </div>
    <div v-if="$slots.idsMessageSuffix" class="ids-message__suffix">
      <slot name="idsMessageSuffix" />
    </div>
  </div>
</template>
