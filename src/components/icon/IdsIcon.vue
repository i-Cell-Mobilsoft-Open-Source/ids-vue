<script setup lang="ts">
import { Size, SizeType } from '@models/size.type';
import { IdsIconProps } from '@components/icon/models/IdsIconProps.interface';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { ComponentInternalInstance, computed, getCurrentInstance } from 'vue';

  const componentClass = 'ids-icon';
  const parent: ComponentInternalInstance | null | undefined = getCurrentInstance()?.parent;
  
  const props = withDefaults(
  defineProps<IdsIconProps>(),
  {
    iconComponent: undefined,
    size: undefined,
  });

  const size = computed<string>(() => {
    return props.size !== undefined ? props.size : getParentSize();
  });

  const classObject = computed(() => ({
    [componentClass]: true,
    [addClassPrefix(componentClass, size.value)]: !!size.value,
  }));

  function getParentSize(): string {
    return parent && parent.props['size'] ? parent.props['size'] as SizeType : Size.COMFORTABLE;
  }
  
</script>
<template>
  <component :is="icon" :class="classObject" />
</template>
<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;

.ids-icon {
  color: currentColor;
  fill: currentColor;

  @each $size in $sizes {
    &.ids-icon-#{$size} {
      // FIXME: using icon-button's icon size tokens for now
      width: var(--ids-comp-icon-button-size-icon-#{$size});
      height: var(--ids-comp-icon-button-size-icon-#{$size});
    }
  }
}
</style>