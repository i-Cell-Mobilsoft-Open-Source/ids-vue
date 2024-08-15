import { computed, inject, ToRef } from 'vue';
import { IdsMessageInjectedAttributes } from '@components/message/models/IdsMessageInjectedAttributes.interface';
import { addClassPrefix } from '@core/utils/AddClassPrefix';
import { Size, SizeType } from '@models/size.type';
import { MessageVariant, MessageVariantType } from '@components/message/models/IdsMessageVariant.type';
import { MessageAttributes } from '@core/utils/Keys';

export function useMessage(
  propsSize: ToRef<string | undefined>, 
  propsVariant: ToRef<string | undefined>, 
  propsDisabled: ToRef<boolean | undefined>, 
  componentClass: string, 
  componentTypeClass: string,
) {

  const { sizeValue, variantValue, disabledValue } = inject<IdsMessageInjectedAttributes>(MessageAttributes, {});

  const disabled = computed<boolean>(() => {
    return propsDisabled.value !== undefined ? propsDisabled.value : getParentIsDisabled();
  });

  const variant = computed<string>(() => {
    return propsVariant.value !== undefined ? propsVariant.value : getParentVariant();
  });

  const size = computed<string>(() => {
    return propsSize.value !== undefined ? propsSize.value : getParentSize();
  });

  const classObject = computed(() => ({
    [componentClass]: true,
    [componentTypeClass]: true,
    [addClassPrefix(componentClass, size.value)]: size.value,
    [addClassPrefix(componentClass, variant.value)]: variant.value,
    [addClassPrefix(componentClass, 'disabled')]: disabled.value,
  }));

  function getParentSize(): SizeType {
    return sizeValue ? sizeValue.value : Size.COMFORTABLE;
  };

  function getParentIsDisabled(): boolean {
    return disabledValue ? disabledValue.value : false;
  };

  function getParentVariant(): MessageVariantType {
    return variantValue ? variantValue.value : MessageVariant.SURFACE;
  };

  return {
    disabled,
    variant,
    size,
    classObject,
  };
}
