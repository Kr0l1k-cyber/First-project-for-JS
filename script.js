
// const title = prompt('Как называется Ваш проект?')

// const screens = prompt('Какие типы экранов нужно разработать?')

const scrrenPrice = +prompt('Сколько будет стоить данная работа?')

// const adaptiv = confirm('Нужен ли адаптив на сайте?')
// console.log(title, screens, scrrePrice, adaptiv);
// //расчте стоимости

const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const fullPrice = Number(scrrenPrice + servicePrice1 + servicePrice2);

console.log(fullPrice);