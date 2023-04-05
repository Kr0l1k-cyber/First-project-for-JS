'use strict';
// const title = prompt('Как называется Ваш проект?')

// const screens = prompt('Какие типы экранов нужно разработать?')

const scrrenPrice = +prompt('Сколько будет стоить данная работа?')

// const adaptiv = confirm('Нужен ли адаптив на сайте?')
// console.log(title, screens, scrrePrice, adaptiv);
// //расчте стоимости

// const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
// const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const fullPrice = Number(scrrenPrice + servicePrice1 + servicePrice2);

const servicePercentPrice = Math.ceil(parseFloat(fullPrice * (100 - 11))) / 100;
console.log(servicePercentPrice);

switch (true) {
    case servicePercentPrice > 30000:
        console.log('Даем скидку в 10%');
        break
    case 15000 < servicePercentPrice && servicePercentPrice < 30000:
        console.log('Даем скидку в 5%');
        break
    case 0 < servicePercentPrice && servicePercentPrice < 15000:
        console.log('Скидка не предусмотрена');
        break
    default:
        console.log('Что то пошло не так');
}

