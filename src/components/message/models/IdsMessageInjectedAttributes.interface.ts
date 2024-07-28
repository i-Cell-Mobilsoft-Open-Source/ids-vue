import { SizeType } from "@models/size.type";
import { MessageVariantType } from "@components/message/models/IdsMessageVariant.type.ts";
import type { DeepReadonly, Ref } from 'vue';

export interface IdsMessageInjectedAttributes {
  sizeValue?: DeepReadonly<Ref<SizeType>>,
  variantValue?: DeepReadonly<Ref<MessageVariantType>>,
  disabledValue?: DeepReadonly<Ref<boolean>>,
}
