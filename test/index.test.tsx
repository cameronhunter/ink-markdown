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

  expect(lastFrame()).toMatchInlineSnapshot(`
    "[35m[4m[1m# Title[22m[24m[39m

        [33m  - This is a markdown bullet point[39m
        [33m  - This is a [link](http://cameronhunter.co.uk)[39m

    "
  `);
});
