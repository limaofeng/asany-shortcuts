import React, { useContext, useEffect } from 'react';

import { EventEmitter } from 'events';

import reduce from 'just-reduce-object';
import invariant from 'invariant';

import helpers from './helpers';
import { compact, findKey, flatten, isArray, isPlainObject, map } from './utils';

const warning = (text: string) => {
  if (process && process.env.NODE_ENV !== 'production') {
    console.warn(text);
  }
};

type Keymap = Record<string, Record<string, string[]>>;

type Callback = () => void;

class ShortcutManager extends EventEmitter {
  static CHANGE_EVENT = 'shortcuts:update';
  private _keymap: Keymap;

  constructor(keymap = {}) {
    super();
    this._keymap = keymap;
  }

  addUpdateListener(callback: Callback) {
    invariant(callback, 'addUpdateListener: callback argument is not defined or falsy');
    this.on(ShortcutManager.CHANGE_EVENT, callback);
  }

  removeUpdateListener(callback: Callback) {
    this.removeListener(ShortcutManager.CHANGE_EVENT, callback);
  }

  _platformName = helpers.getPlatformName();

  _parseShortcutDescriptor = (item: any) => {
    if (isPlainObject(item)) {
      return item[this._platformName];
    }
    return item;
  };

  setKeymap(keymap: Keymap) {
    invariant(keymap, 'setKeymap: keymap argument is not defined or falsy.');
    this._keymap = keymap;
    this.emit(ShortcutManager.CHANGE_EVENT);
  }

  extendKeymap(keymap: Keymap) {
    invariant(keymap, 'extendKeymap: keymap argument is not defined or falsy.');
    this._keymap = Object.assign({}, this._keymap, keymap);
    this.emit(ShortcutManager.CHANGE_EVENT);
  }

  getAllShortcuts() {
    return this._keymap;
  }

  getAllShortcutsForPlatform(platformName: string) {
    const _transformShortcuts = (shortcuts: any) => {
      return reduce(
        shortcuts,
        (result: any, keyName: string, keyValue: any) => {
          let _keyValue = keyValue;
          if (isPlainObject(_keyValue)) {
            if (_keyValue[platformName]) {
              _keyValue = _keyValue[platformName];
            } else {
              result[keyName] = _transformShortcuts(_keyValue);
              return result;
            }
          }

          result[keyName] = _keyValue;
          return result;
        },
        {}
      );
    };

    return _transformShortcuts(this._keymap);
  }

  getAllShortcutsForCurrentPlatform() {
    return this.getAllShortcutsForPlatform(this._platformName);
  }

  getShortcuts(componentName: string) {
    invariant(componentName, 'getShortcuts: name argument is not defined or falsy.');

    const cursor = this._keymap[componentName];
    if (!cursor) {
      warning(`getShortcuts: There are no shortcuts with name ${componentName}.`);
      return;
    }

    const shortcuts = compact(flatten(map(cursor, this._parseShortcutDescriptor)));

    return shortcuts;
  }

  _parseShortcutKeyName(obj: any, keyName: string) {
    const result = findKey(obj, item => {
      let _item = item;
      if (isPlainObject(_item)) {
        _item = _item[this._platformName];
      }
      if (isArray(_item)) {
        const index = _item.indexOf(keyName);
        if (index >= 0) {
          _item = _item[index];
        }
      }
      return _item === keyName;
    });

    return result;
  }

  findShortcutName(keyName: string, componentName: string) {
    invariant(keyName, 'findShortcutName: keyName argument is not defined or falsy.');
    invariant(componentName, 'findShortcutName: componentName argument is not defined or falsy.');

    const cursor = this._keymap[componentName];
    const result = this._parseShortcutKeyName(cursor, keyName);

    return result;
  }
}

const shortcutManager = new ShortcutManager();

export const ShortcutContext = React.createContext<ShortcutManager>(shortcutManager);

type ShortcutProviderProps = {
  keymap: Keymap;
  children: React.ReactNode;
};

export const useShortcuts = function() {
  return useContext(ShortcutContext);
};

export const ShortcutProvider = (props: ShortcutProviderProps) => {
  const { keymap, children } = props;

  useEffect(() => {
    shortcutManager.setKeymap(keymap);
  }, [keymap]);

  return <ShortcutContext.Provider value={shortcutManager}>{children}</ShortcutContext.Provider>;
};

export default ShortcutManager;
