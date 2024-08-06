export default function deepEquals(obj1: unknown, obj2: unknown): boolean {
  if (obj1 === obj2) return true;

  if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
      const arrObj1 = Array.isArray(obj1);
      const arrObj2 = Array.isArray(obj2);
      let i;
      let length;
      let key;

      if (arrObj1 && arrObj2) {
          length = obj1.length;
          if (length != obj2.length) return false;
          for (i = length; i-- !== 0; ) if (!deepEquals(obj1[i], obj2[i])) return false;

          return true;
      }

      if (arrObj1 != arrObj2) return false;

      const dateObj1 = obj1 instanceof Date;
      const dateObj2 = obj2 instanceof Date;

      if (dateObj1 != dateObj2) return false;
      if (dateObj1 && dateObj2) return obj1.getTime() == obj2.getTime();

      const regexpObj1 = obj1 instanceof RegExp;
      const regexpObj2 = obj2 instanceof RegExp;

      if (regexpObj1 != regexpObj2) return false;
      if (regexpObj1 && regexpObj2) return obj1.toString() == obj2.toString();

      const keys = Object.keys(obj1);

      length = keys.length;

      if (length !== Object.keys(obj2).length) return false;

      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;

      for (i = length; i-- !== 0; ) {
          key = keys[i] ;
          if (!deepEquals((obj1 as { [key: string]: unknown })[key], (obj2 as { [key: string]: unknown })[key])) return false;
      }

      return true;
  }

  return obj1 !== obj1 && obj2 !== obj2;
}