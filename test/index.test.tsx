import Markdown from '../src/index';
import React from 'react';
import { render } from 'ink-testing-library';

test('Renders markdown', () => {
  const markdown = `
      # Title

      - This is a markdown bullet point
      - This is a [link](http://cameronhunter.co.uk)
  `;

  const { lastFrame } = render(<Markdown>{markdown}</Markdown>);

  expect(lastFrame()).toMatchSnapshot();
});
