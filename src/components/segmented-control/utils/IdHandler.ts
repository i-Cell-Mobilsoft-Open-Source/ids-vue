let _controlUid = 0;
let _itemUid = 0;
let _controlToggleUid = 0;
let _itemToggleUid = 0;

export function getControlUid(isToggle: boolean): number {
  return isToggle ? ++_controlToggleUid : ++_controlUid;
}

export function getItemUid(isToggle: boolean): number {
  return isToggle ? ++_itemToggleUid : ++_itemUid;
}