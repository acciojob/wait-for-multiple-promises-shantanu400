let PromiseArray = [
  new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      resolve({message: "Promise1 resolved", timeTaken: endTime - startTime});
    }, Math.floor((Math.random()*(3-1)+1) *1000);
  }),
  new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      resolve({message: "Promise2 resolved", timeTaken: endTime - startTime});
    }, Math.floor((Math.random()*(3-1)+1) *1000);
  }),
  new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      resolve({message: "Promise3 resolved", timeTaken: endTime - startTime});
    }, Math.floor((Math.random()*(3-1)+1) *1000);
  })
];

let totalTime = 0;
let table = document.querySelector('#output');
table.innerHTML = ``;
Promise.all(PromiseArray).then((datas) => {
  datas.forEach((data) => {
    totalTime += data.timeTaken;
    table.innerHTML += `
      <tr id="loading">
        <td>${data.message}</td>
        <td>${data.timeTaken}</td>
      </tr>
    `;
  });
  table.innerHTML += `
    <tr id="loading">
      <td>Total</td>
      <td>${totalTime}</td>
    </tr>
  `;
}).catch((error) => {
  console.log(`Error: ${error}`);
});