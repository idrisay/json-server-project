fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
  });

let data = { title: "study css", author: "erdem" };
let dataString = '{ "title": "study js", "author": "idris" }';
console.log(data.title)
console.log(dataString.title)
// console.log(JSON.stringify(data))

document.getElementById("h2").onclick = () => {
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
    // body: dataString,
  });
  // .then(function (res) {
  //   return res.json();
  // })
  // .then(function (data) {
  //   alert(JSON.stringify(data));
  // });
};
