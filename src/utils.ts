export const isArray = (arr: any) => Array.isArray(arr);

export const isPlainObject = (obj: any) => {
  const isObject = typeof obj === 'object' && obj !== null && !isArray(obj);
  if (!isObject || (obj.toString && obj.toString() !== '[object Object]')) return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
  );
};

export const findKey = (obj: any, fn: (item: any) => boolean) => {
  if (!isPlainObject(obj) && !isArray(obj)) return;

  const keys = Object.keys(obj);
  return keys.find(key => fn(obj[key]));
};

export const compact = (arr: any[]) => arr.filter(Boolean);

const flattenOnce = (arr: any[], recurse = true): any => {
  return arr.reduce((acc, val) => {
    if (isArray(val) && recurse) return acc.concat(flattenOnce(val, false));
    acc.push(val);
    return acc;
  }, []);
};

export const flatten = (arr: any) => {
  if (!isArray(arr)) throw new Error('flatten expects an array');
  return flattenOnce(arr);
};

export const map = (itr: any, fn: (it: any, key: string) => any) => {
  if (isArray(itr)) return itr.map(fn);

  const results = [];
  const keys = Object.keys(itr);
  const len = keys.length;
  for (let i = 0; i < len; i += 1) {
    const key = keys[i];
    results.push(fn(itr[key], key));
  }

  return results;
};
