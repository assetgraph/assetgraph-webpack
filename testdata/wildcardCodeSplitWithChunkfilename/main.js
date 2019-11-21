alert('main!');

var aOrB = Math.random() > 0.5 ? 'a' : 'b';

import('./split' + aOrB).then(function() {
  console.log('yup');
});
