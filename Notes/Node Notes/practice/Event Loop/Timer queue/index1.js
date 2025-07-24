setTimeout(() => {
  console.log('timeout 1');

  process.nextTick(() => console.log('nextTick inside timeout 1'));
  Promise.resolve().then(() => console.log('promise inside timeout 1'));

}, 0);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

