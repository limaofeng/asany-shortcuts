import React, { useCallback, useEffect, useRef } from 'react';

import invariant from 'invariant';
import Combokeys from 'combokeys';
import classnames from 'classnames';

import helpers from '../helpers';
import { useShortcuts } from '../ShortcutManager';

type ShortcutsProps = {
  tag?: string | React.ReactNode | React.Component;
  children?: React.ReactNode;
  handler: (shortcutName: string, event: any) => void;
  name: string;
  tabIndex: number;
  className: string;
  eventType: string;
  stopPropagation: boolean;
  preventDefault: boolean;
  targetNodeSelector: string;
  global: boolean;
  isolate: boolean;
  alwaysFireHandler: boolean;
};

function Shortcuts(_props: ShortcutsProps) {
  const domNodeRef = useRef<HTMLDivElement>(null);

  const shortcuts = useShortcuts();

  // NOTE: combokeys must be instance per component
  const state = useRef<{ _combokeys?: any; _lastEvent?: any }>({});

  const propsRef = useRef(_props);

  propsRef.current = _props;

  const getElementToBind = useCallback(() => {
    const props = propsRef.current;
    let element = null;
    if (props.targetNodeSelector) {
      element = document.querySelector(props.targetNodeSelector);
      invariant(element, `Node selector '${props.targetNodeSelector}'  was not found.`);
    } else {
      element = domNodeRef.current;
    }

    return element!;
  }, []);

  const decorateCombokeys = () => {
    const props = propsRef.current;
    const element = getElementToBind();
    const _combokeys = state.current._combokeys!;
    const _lastEvent = state.current._lastEvent;
    const originalHandleKey = _combokeys.handleKey.bind(_combokeys);

    // NOTE: stopCallback is a method that is called to see
    // if the keyboard event should fire
    _combokeys.stopCallback = (event: any, domElement: any) => {
      const isInputLikeElement =
        domElement.tagName === 'INPUT' ||
        domElement.tagName === 'SELECT' ||
        domElement.tagName === 'TEXTAREA' ||
        (domElement.contentEditable && domElement.contentEditable === 'true');

      let isReturnString;
      if (event.key) {
        isReturnString = event.key.length === 1;
      } else {
        isReturnString = Boolean(helpers.getCharacter(event));
      }

      if (isInputLikeElement && isReturnString && !props.alwaysFireHandler) {
        return true;
      }

      return false;
    };

    _combokeys.handleKey = (character: string, modifiers: any, event: any, isGlobalHandler: any) => {
      if (_lastEvent && event.timeStamp === _lastEvent.timeStamp && event.type === _lastEvent.type) {
        return;
      }
      state.current._lastEvent = event;

      let isolateOwner = false;
      if (props.isolate && !event.__isolateShortcuts) {
        event.__isolateShortcuts = true;
        isolateOwner = true;
      }

      if (!isGlobalHandler) {
        element.dispatchEvent(
          new CustomEvent('shortcuts:global', {
            detail: { character, modifiers, event },
            bubbles: true,
            cancelable: true,
          })
        );
      }

      // NOTE: works normally if it's not an isolated event
      if (!event.__isolateShortcuts) {
        if (props.preventDefault) {
          event.preventDefault();
        }
        if (props.stopPropagation && !isGlobalHandler) {
          event.stopPropagation();
        }
        originalHandleKey(character, modifiers, event);
        return;
      }
      // NOTE: global shortcuts should work even for an isolated event
      if (props.global || isolateOwner) {
        originalHandleKey(character, modifiers, event);
      }
    };
  };

  const _handleShortcuts = useCallback((event, keyName) => {
    const props = propsRef.current;
    if (!props.name) {
      return;
    }
    const shortcutName = shortcuts.findShortcutName(keyName, props.name)!;
    if (props.handler) {
      props.handler(shortcutName, event);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _customGlobalHandler = useCallback(e => {
    const props = propsRef.current;
    const { character, modifiers, event } = e.detail;
    const { _combokeys } = state.current;
    const _domNode = domNodeRef.current;
    let targetNode = null;
    if (props.targetNodeSelector) {
      targetNode = document.querySelector(props.targetNodeSelector);
    }

    if (e.target !== _domNode && e.target !== targetNode) {
      _combokeys.handleKey(character, modifiers, event, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _bindShortcuts = useCallback((shortcutsArr: string[]) => {
    const props = propsRef.current;
    const element = getElementToBind();
    element.setAttribute('tabindex', props.tabIndex as any);
    state.current._combokeys = new Combokeys(element, { storeInstancesGlobally: false });
    decorateCombokeys();
    state.current._combokeys.bind(shortcutsArr, _handleShortcuts, props.eventType);

    if (props.global) {
      element.addEventListener('shortcuts:global', _customGlobalHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _unbindShortcuts = useCallback(() => {
    const { _combokeys } = state.current;
    if (_combokeys) {
      _combokeys.detach();
      _combokeys.reset();
    }
  }, []);

  const _onUpdate = useCallback(() => {
    const props = propsRef.current;
    const shortcutsArr = props.name && shortcuts.getShortcuts(props.name);
    _unbindShortcuts();
    _bindShortcuts(shortcutsArr || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const props = propsRef.current;
    _onUpdate();
    if (props.name) {
      shortcuts.addUpdateListener(_onUpdate);
    }
    return () => {
      _unbindShortcuts();

      if (props.name) {
        shortcuts.removeUpdateListener(_onUpdate);
      }

      if (props.global) {
        const element = getElementToBind();
        element.removeEventListener('shortcuts:global', _customGlobalHandler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const props = propsRef.current;

  const { tag = 'div' } = props;

  const className = classnames(props.className, 'focus-invisible');

  if (React.isValidElement(tag)) {
    let tagRef = (tag as any).ref;
    if (tagRef) {
      tagRef = (ref: any) => {
        (domNodeRef as any).current = ref;
        if (typeof (tag as any).ref === 'function') {
          (tag as any).ref(ref);
        } else {
          (tag as any).ref.current = ref;
        }
      };
    } else {
      tagRef = domNodeRef;
    }

    return React.cloneElement(
      tag as any,
      {
        ref: tagRef,
        tabIndex: props.tabIndex,
        className: classnames(className, (tag.props as any).className),
      },
      <>
        {(tag.props as any).children}
        {props.children}
      </>
    );
  }

  return React.createElement(
    tag as any,
    {
      ref: domNodeRef,
      tabIndex: props.tabIndex,
      className,
    },
    props.children
  );
}

Shortcuts.defaultProps = {
  tabIndex: -1,
  className: null,
  eventType: null,
  stopPropagation: true,
  preventDefault: false,
  targetNodeSelector: null,
  global: false,
  isolate: false,
  alwaysFireHandler: false,
};

export default Shortcuts;
