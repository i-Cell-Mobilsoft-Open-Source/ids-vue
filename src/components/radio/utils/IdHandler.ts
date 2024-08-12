let _groupUid = 0;
let _itemUid = 0;

export function getRadioUid(isGroup: boolean): number {
  return isGroup ? ++_groupUid : ++_itemUid;
}
