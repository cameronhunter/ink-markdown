import React from 'react';
import { render } from 'ink';
import Markdown from '../src/index';
import dedent from 'dedent';

const text = dedent`
  # Hello

  This is **markdown** printed in the \`terminal\`
`;

render(<Markdown>{text}</Markdown>);
