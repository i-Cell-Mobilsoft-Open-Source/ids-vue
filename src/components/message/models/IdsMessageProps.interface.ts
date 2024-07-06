import { SizeType } from "@models/size.type";
import { MessageVariantType } from "@components/message/models/IdsMessageVariant.type.ts";

export interface IdsMessageProps {
  size?: SizeType,
  variant?: MessageVariantType,
  disabled?: boolean,
}
