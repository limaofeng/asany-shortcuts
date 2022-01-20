import * as React from 'react';

import * as ReactDOM from 'react-dom';

import { ShortcutProvider } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ShortcutProvider keymap={{}}>
        <div />
      </ShortcutProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
