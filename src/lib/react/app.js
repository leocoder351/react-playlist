import Diact from './index.js';

const element = Diact.createElement(
  'div',
  {id: 'foo'},
  Diact.createElement('a', null, 'bar'),
  Diact.createElement('b')
);

console.log(element);