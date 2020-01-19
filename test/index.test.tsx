import Markdown from '../src/index';
import React from 'react';
import dedent from 'dedent';
import { render } from 'ink-testing-library';

test('Renders markdown', () => {
  const markdown = dedent`
    # Hello

    This is **markdown** printed in the \`terminal\`
  `;

  const { lastFrame } = render(<Markdown>{markdown}</Markdown>);

  expect(lastFrame()).toMatchSnapshot();
});
