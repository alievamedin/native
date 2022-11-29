// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

let list = document.querySelector(".list");
let API = "https://rickandmortyapi.com/api/character";
//  async function get(obj) {
//      await fetch("http://localhost:8006/characters", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         headers: {
//           "Content-type": "application/json; charset=utf-8",
//         },
//       });
// }

async function render() {
  let products = await fetch(API)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(products.results);

  list.innerHTML = "";
  products.results.forEach((item) => {
    //   get(item)
    let newElem = document.createElement("div");
    newElem.id = item.id;
    newElem.innerHTML = `
      <div class="card m-5" style="width: 18rem;">
    <img src=${item.image} class="card-img-top" alt="product">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
    </div>
  </div>
      `;
    list.append(newElem);
  });
}
render();
// console.log(products)
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
let list2 = document.querySelector(".list2");
async function render2() {
  let products = await fetch("http://localhost:8006/characters")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(products);

  list2.innerHTML = "";
  products.forEach((item) => {
    //   get(item)
    let newElem = document.createElement("div");
    newElem.id = item.id;
    newElem.innerHTML = `
      <div class="card m-5" style="width: 18rem;">
    <img src=${item.image} class="card-img-top" alt="product">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
    </div>
  </div>
      `;
    list2.append(newElem);
  });
}
render2();
/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.
/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/