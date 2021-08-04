function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:
async function withAsync(num) { 
  if (num === 0) {
    return 'zero';
  } else {
    return 'not zero';
  }
}
 
 withAsync(0)
.then(resolvedValue => {
    console.log(resolvedValue);
  })  











withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
