// draculaTheme.js
export default {
    plain: {
      color: '#f8f8f2',
      backgroundColor: '#282a36',
    },
    styles: [
      {
        types: ['comment'],
        style: {
          color: '#6272a4',
          fontStyle: 'italic',
        },
      },
      {
        types: ['string', 'builtin', 'char', 'constant'],
        style: {
          color: '#ff79c6',
        },
      },
      {
        types: ['variable', 'class-name'],
        style: {
          color: '#50fa7b',
        },
      },
      {
        types: ['function', 'tag', 'attr-name'],
        style: {
          color: '#f1fa8c',
        },
      },
      {
        types: ['punctuation', 'operator'],
        style: {
          color: '#bd93f9',
        },
      },
      {
        types: ['keyword'],
        style: {
          color: '#ff5555',
        },
      },
    ],
  };
  