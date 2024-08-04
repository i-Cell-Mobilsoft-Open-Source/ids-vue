let _uid = 0;

export function getUid(): number {
  const uid = ++_uid;

  return uid;
}