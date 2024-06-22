let PromiseArray = [
  new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      resolve({message: "Promise 1", timeTaken: (endTime - startTime)/1000});
    }, Math.floor(Math.random()*3000)+1000);
  }),
  new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      resolve({message: "Promise 2", timeTaken: (endTime - startTime)/1000});
    }, Math.floor(Math.random()*3000)+1000);
  }),
  new Promise((resolve, reject) => {
    let startTime = Date.now();
    setTimeout(() => {
      let endTime = Date.now();
      resolve({message: "Promise 3", timeTaken: (endTime - startTime)/1000});
    }, Math.floor(Math.random()*3000)+1000);
  })
];

let totalTime = 0;
let table = document.getElementById('output');

Promise.all(PromiseArray).then((datas) => {
	table.innerHTML = ``;
  datas.forEach((data) => {
    totalTime += data.timeTaken;
    table.innerHTML += `
      <tr >
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