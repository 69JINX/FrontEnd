setTimeout(() => {
  console.log("timeout");

  process.nextTick(() => console.log("nextTick inside timeout"));
  Promise.resolve().then(() => console.log("promise inside timeout"));
}, 0);

setImmediate(() => {
  console.log("immediate");

  process.nextTick(() => console.log("nextTick inside immediate"));
  Promise.resolve().then(() => console.log("promise inside immediate"));
});

