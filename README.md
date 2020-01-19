# ink-markdown [![Actions Status](https://github.com/cameronhunter/ink-markdown/workflows/Test/badge.svg)](https://github.com/cameronhunter/ink-markdown/actions)

> Render markdown text using [Ink](https://github.com/vadimdemedes/ink)

## Install

```
$ npm install ink-markdown
```

```
$ yarn add ink-markdown
```

## Usage

```js
import React from 'react';
import { render } from 'ink';
import Markdown from 'ink-markdown';

const markdown = `
  # Title

  - Bullet point #1
  - Bullet point #2
  - Bullet point #3
`;

render(<Markdown>{markdown}</Markdown>);
```

## API

### `<Markdown>`

Props are passed as options to
[`marked-terminal`](https://github.com/mikaelbr/marked-terminal#options).

## License

MIT © [Cameron Hunter](https://cameronhunter.co.uk)
